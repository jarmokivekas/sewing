---
title: karttatasku
images:
  - url: "/uploads/img/2.jpg"
    caption: "this is two"
  - url: "/uploads/img/3.jpg"
    caption: "the third picture"
product_description: """

"""
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





The product has the following images

{% for image in page.images %}
- the url to the image is: {{ image.url }}
- the caption is {{ image.caption }}
{% endfor %}



Use this, but check for page.layout or something else that defines it as a product page
```
{% for page in site.pages %}
  {% if page.categories contains 'fruit' %}
    <div class="item">
      <h3>{{page.title}}</h3>
      <p>{{page.description}}</p>
    </div>
  {% endif %}
{% endfor %}
```