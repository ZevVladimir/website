---
tags: Book
title: "New-York Observer"
subtitle: ""
authors: <%=book.authors.map(author=>`\n  - ${author}`).join('')%>
category: [New York (N.Y.)]
publisher: 
publish: 1906
totalPage: 1756
isbn:  NYPL:33433003183682
coverUrl: http://books.google.com/books/content?id=0HNPAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
localCover: 
status: read
yearRead: 2022
rating: <%await tp.system.prompt("Rating out of 10")%>
dateFinished: <%tp.date.now("YYYY-MM-DD")%>
---