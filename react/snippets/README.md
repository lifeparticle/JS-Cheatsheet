```jsx
{tableOfContents.map((tocItem, idx) => {
					const { tag, text } = tocItem;
					return createElement(tag.toLowerCase(), {
						key: `${tag}-${idx}`,
						children: text,
					});
				})}
```

```jsx
			<div
					dangerouslySetInnerHTML={{
						__html: tableOfContents
							.replaceAll("\n", "<br />")
							.replaceAll("\t", "&nbsp;"),
					}}
				/>
			</div>
```
