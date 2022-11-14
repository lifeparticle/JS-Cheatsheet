// https://miragejs.com/quickstarts/react/develop-an-app/

import { createServer, Response } from "miragejs";
import { faker } from "@faker-js/faker";

export function makeServer({ environment = "test" } = {}) {
	let server = createServer({
		environment,

		routes() {
			this.namespace = "api";

			this.get(
				"/lines/1",
				() => {
					return {
						data: faker.lorem.lines(1),
					};
				},
				{ timing: 1500 }
			);

			this.get(
				"/lines/2",
				() => {
					return {
						data: faker.lorem.lines(2),
					};
				},
				{ timing: 1500 }
			);

			this.get(
				"/lines/3",
				() => {
					// https://miragejs.com/api/classes/response/
					return new Response(
						400,
						{ some: "header" },
						{ errors: ["name cannot be blank"] }
					);
					// return {
					// 	data: faker.lorem.lines(3),
					// };
				},
				{ timing: 1500 }
			);
		},
	});

	return server;
}
