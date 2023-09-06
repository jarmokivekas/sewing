---
title: karttatasku
images:
  - url: "/uploads/beer/2.jpg"
    caption: "this is two"
  - url: "/uploads/beer/3.jpg"
    caption: "the third picture"
variant_type: size
variants:
- name: half-a-pint
  price: 2.75
  sku: beerhalfapint
- name: pint
  price: 4.25
  sku: beerpint
order_number: 2
---


hell


The product has the following images

{% for image in page.images %}
- the url to the image is: {{ image.url }}
- the caption is {{ image.caption }}
{% endfor %}
