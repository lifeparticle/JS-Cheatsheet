let elements = document.getElementsByClassName("_btyzidpf _ca0qc4v4 _u5f3c4v4 _n3tdc4v4 _19bvc4v4 _19itglyw _19h61l7b _1u6lybqi _s7n4jp4b _1ul9idpf _p12fidpf");

for (let element of elements) {
  console.log(element.getElementsByTagName('a')[0].text);
}
