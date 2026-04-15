
---
Title: {{title}}

tags: {% if allTags %}{{allTags}}{% endif %} #paper

citekey: {{citekey}}

collection:
{% for collection in collections %}
- {{ collection.fullPath }}
{% endfor %}
status: unread

dateread:

---
# Abstract
- 
# Introduction
- 
# Discussion
- 
# Conclusion
- 
# Questions
- 

> [!Cite]

{{bibliography}}
  

>[!md]

{% for type, creators in creators | groupby("creatorType") -%} 
{%- for creator in creators -%} 
**{{"First" if loop.first}}{{type | capitalize}}**:
{%- if creator.name %} [[Files/Authors/{{creator.name}}]] 
{%- else %} [[Files/Authors/{{creator.lastName}}, {{creator.firstName}}]] 
{%endif-%} 
{% endfor -%}
{% endfor %}

> **Date**: {{date | format("YYYY-MM-DD")}}  

> **Citekey**: {{citekey}} {%- if itemType %} 

> **itemType**: {{itemType}}{%- endif %}{%- if itemType == "journalArticle" %} 

> **Journal**: *{{publicationTitle}}* {%- endif %}{%- if volume %} 

> **Volume**: {{volume}} {%- endif %}{%- if issue %} 

> **Issue**: {{issue}} {%- endif %}{%- if itemType == "bookSection" %} 

> **Book**: {{publicationTitle}} {%- endif %}{%- if publisher %} 

> **Publisher**: {{publisher}} {%- endif %}{%- if place %} 

> **Location**: {{place}} {%- endif %}{%- if pages %}  

> **Pages**: {{pages}} {%- endif %}{%- if DOI %} 

> **DOI**:: {{DOI}} {%- endif %}{%- if ISBN %} 

> **ISBN**:: {{ISBN}} {%- endif %}   

  
> [!Abstract]

> {%- if abstractNote %}

> {{abstractNote}}

> {%- endif -%}.



# Annotations

{%- macro calloutHeader(type, color) -%} 
{%- if type == "highlight" -%} 
<mark style="background-color: {{color}}">Quote</mark> 
{%- endif -%}
{%- if type == "text" -%} 
Note 
{%- endif -%} 
{%- endmacro -%}

{% persist "annotations" %}

{% set newAnnotations = annotations | filterby("date", "dateafter", lastImportDate) %}

{% if newAnnotations.length > 0 %}
  

{% for a in newAnnotations %}

{{calloutHeader(a.type, a.color)}}

> {{a.annotatedText}}

{% endfor %}

{% endif %}

{% endpersist %}

<% await tp.file.include("[[Templates/paper_create_author]]") %>
