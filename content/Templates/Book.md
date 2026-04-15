<%*
const rating = await tp.system.prompt("Rating (1-10)");
const yearRead = tp.date.now("YYYY");
const dateFinished = tp.date.now("YYYY-MM-DD");
-%>
---
tags: Book
title: "{{title}}"
subtitle: "{{subtitle}}"
authors: [{{author}}]
category: [{{category}}]
publisher: "{{publisher}}"
publish: {{publishDate}}
totalPage: {{totalPage}}
isbn: {{isbn13}}
coverUrl: "{{coverUrl}}"
status: read
yearRead: <% yearRead %>
rating: <% rating %>
dateFinished: <% dateFinished %>
---
