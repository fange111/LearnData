const e=JSON.parse('{"key":"v-73fe61b2","path":"/services/Huginn.html","title":"Huginn","lang":"zh-CN","frontmatter":{"article":false,"title":"Huginn","icon":"customize","order":2,"description":"Huginn 部署：查看 deploy Huginn inside of Docker 和 .env 设置，或按下方的教程手动部署到服务器上，轻量使用推荐部署到 Docker。 Huginn 抓取教程：RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/Huginn.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Huginn"}],["meta",{"property":"og:description","content":"Huginn 部署：查看 deploy Huginn inside of Docker 和 .env 设置，或按下方的教程手动部署到服务器上，轻量使用推荐部署到 Docker。 Huginn 抓取教程：RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:05:08.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:05:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Huginn\\",\\"description\\":\\"Huginn 部署：查看 deploy Huginn inside of Docker 和 .env 设置，或按下方的教程手动部署到服务器上，轻量使用推荐部署到 Docker。 Huginn 抓取教程：RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）\\"}"]]},"headers":[{"level":2,"title":"常用 Agent","slug":"常用-agent","link":"#常用-agent","children":[]},{"level":2,"title":"Huginn 部署","slug":"huginn-部署","link":"#huginn-部署","children":[{"level":3,"title":"Ubuntu 手动部署","slug":"ubuntu-手动部署","link":"#ubuntu-手动部署","children":[]},{"level":3,"title":"Huginn Docker","slug":"huginn-docker","link":"#huginn-docker","children":[]}]},{"level":2,"title":"Agents","slug":"agents","link":"#agents","children":[{"level":3,"title":"Trigger Agent","slug":"trigger-agent","link":"#trigger-agent","children":[]},{"level":3,"title":"Liquid Output Agent","slug":"liquid-output-agent","link":"#liquid-output-agent","children":[]},{"level":3,"title":"Event Formatting Agent","slug":"event-formatting-agent","link":"#event-formatting-agent","children":[]},{"level":3,"title":"Adioso Agent - 机票价格追踪","slug":"adioso-agent-机票价格追踪","link":"#adioso-agent-机票价格追踪","children":[]},{"level":3,"title":"Aftership Agent - 物流追踪-API 付费","slug":"aftership-agent-物流追踪-api-付费","link":"#aftership-agent-物流追踪-api-付费","children":[]},{"level":3,"title":"Algorithmia Agent - AI 算法","slug":"algorithmia-agent-ai-算法","link":"#algorithmia-agent-ai-算法","children":[]},{"level":3,"title":"Attribute Difference Agent - 属性差异（待深入理解）","slug":"attribute-difference-agent-属性差异-待深入理解","link":"#attribute-difference-agent-属性差异-待深入理解","children":[]},{"level":3,"title":"Basecamp Agent - Service 停用","slug":"basecamp-agent-service-停用","link":"#basecamp-agent-service-停用","children":[]},{"level":3,"title":"Bigquery Agent - 大型数据库分析","slug":"bigquery-agent-大型数据库分析","link":"#bigquery-agent-大型数据库分析","children":[]},{"level":3,"title":"Boxcar Agent - iPhone 通知栏 app","slug":"boxcar-agent-iphone-通知栏-app","link":"#boxcar-agent-iphone-通知栏-app","children":[]},{"level":3,"title":"Change Detector Agent - 监测数据变化","slug":"change-detector-agent-监测数据变化","link":"#change-detector-agent-监测数据变化","children":[]},{"level":3,"title":"Commander Agent - 触发命令","slug":"commander-agent-触发命令","link":"#commander-agent-触发命令","children":[]},{"level":3,"title":"Csv Agent - CSV 表格数据处理","slug":"csv-agent-csv-表格数据处理","link":"#csv-agent-csv-表格数据处理","children":[]},{"level":3,"title":"Data Output Agent - 网页输出数据（RSS）","slug":"data-output-agent-网页输出数据-rss","link":"#data-output-agent-网页输出数据-rss","children":[]},{"level":3,"title":"De Duplication Agent - 数据去重","slug":"de-duplication-agent-数据去重","link":"#de-duplication-agent-数据去重","children":[]},{"level":3,"title":"Delay Agent - 缓冲存储区","slug":"delay-agent-缓冲存储区","link":"#delay-agent-缓冲存储区","children":[]},{"level":3,"title":"Digest Agent - 摘要汇总 - 未理解","slug":"digest-agent-摘要汇总-未理解","link":"#digest-agent-摘要汇总-未理解","children":[]},{"level":3,"title":"Dkt Clustering Agent - 数据挖掘算法？","slug":"dkt-clustering-agent-数据挖掘算法","link":"#dkt-clustering-agent-数据挖掘算法","children":[]},{"level":3,"title":"Dropbox File Url","slug":"dropbox-file-url","link":"#dropbox-file-url","children":[]},{"level":3,"title":"Dropbox Watch Agent","slug":"dropbox-watch-agent","link":"#dropbox-watch-agent","children":[]},{"level":3,"title":"Email Agent - 邮件触发器？","slug":"email-agent-邮件触发器","link":"#email-agent-邮件触发器","children":[]},{"level":3,"title":"Email Digest Agent - 邮件摘要","slug":"email-digest-agent-邮件摘要","link":"#email-digest-agent-邮件摘要","children":[]},{"level":3,"title":"Evernote Agent","slug":"evernote-agent","link":"#evernote-agent","children":[]},{"level":3,"title":"Freme Explore Agent - SPARQL-数据断点？","slug":"freme-explore-agent-sparql-数据断点","link":"#freme-explore-agent-sparql-数据断点","children":[]},{"level":3,"title":"Ftpsite Agent","slug":"ftpsite-agent","link":"#ftpsite-agent","children":[]}]}],"git":{"createdTime":1683129908000,"updatedTime":1683129908000,"contributors":[{"name":"PowerBelief","email":"200893453@qq.com","commits":1}]},"readingTime":{"minutes":26.65,"words":7996},"filePathRelative":"services/Huginn.md","localizedDate":"2023年5月3日","excerpt":"<ul>\\n<li>Huginn 部署：查看 <a href=\\"https://github.com/huginn/huginn/blob/master/doc/docker/install.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">deploy Huginn inside of Docker</a> 和 <a href=\\"https://github.com/huginn/huginn/blob/master/.env.example\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">.env 设置</a>，或按下方的教程手动部署到服务器上，轻量使用推荐部署到 Docker。</li>\\n<li>Huginn 抓取教程：<a href=\\"https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）</a></li>\\n</ul>","autoDesc":true}');export{e as data};
