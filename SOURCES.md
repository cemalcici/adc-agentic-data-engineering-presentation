# Kaynaklar

Sunumdaki her rakamın birincil kaynağı. Her kaynak hazırlık sırasında fiilen
açılıp doğrulandı; doğrulanamayanlar en sondaki bölümde, neden kullanılmadıkları
ile birlikte duruyor.

Etiketler:

- **[hakemli]** akademik yayın ya da konferans bildirisi
- **[satıcı telemetrisi]** ürün verisinden çıkarılmış, anket değil
- **[satıcı anketi]** satıcının ısmarladığı anket
- **[birinci taraf]** kurumun kendi sistemi hakkında kendi yazdığı rapor

---

## Bölüm 1: Kuralın faturası

| Slaytta geçen | Kaynak |
| --- | --- |
| Olayların %55'ini otomatik izleyiciler yakaladı, %29'unu dış kullanıcılar bildirdi, %17'sinde monitör ya da telemetri yoktu | **[hakemli]** Ghosh, Shetty, Bansal, Nath, "How to Fight Production Incidents? An Empirical Study on a Large-scale Cloud Service", ACM SoCC '22. Microsoft Teams'in 152 yüksek şiddetli olayının postmortem analizi. [PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2022/09/3542929.3563482.pdf) |
| "Handwritten code is added to the data pipeline in retrospect to catch the observed type of errors in the future." | **[hakemli]** Redyuk, Kaoudi, Markl, Schelter, "Automating Data Quality Validation for Dynamic Data Ingestion", EDBT 2021. [PDF](https://openproceedings.org/2021/conf/edbt/p79.pdf) |
| "We do not make any claims on completeness [...] there are reasonable data properties that our schema cannot encode." | **[hakemli]** Breck ve ark., "Data Validation for Machine Learning", MLSys 2019 (Google TFX). [PDF](https://mlsys.org/Conferences/2019/doc/2019/167.pdf) |
| Alarmların %90'ından fazlası hiç çıkmamalıydı (metrik bazında %90 ile %98,2) | **[hakemli]** "Lumos: A Library for Diagnosing Metric Regressions in Web-Scale Applications", KDD '20 (Microsoft). Skype ve Teams KPI'ları, 4 aylık üretim ölçümü. [arXiv](https://arxiv.org/pdf/2006.12793) |
| Tek bir sistemde 59.607 aktif alarm kuralı; bazı sistemler hiç arıza yaşamadan günde on binlerce alarm üretiyor | **[hakemli]** "AlertGuardian: Intelligent Alert Life-Cycle Management for Large-scale Cloud Systems", ASE 2025 (Sun Yat-sen Üniversitesi ve Tencent). 200+ sistem, 9 gün. [PDF](https://yuxiaoba.github.io/files/ASE25/AlertGuardian.pdf) |
| "A simple rule-based approach with human knowledge is insufficient in practice as it can be easily overwhelmed by a massive number of complex and ever-changing rules." | **[hakemli]** "Fighting the Fog of War: Automated Incident Detection for Cloud Systems" (Warden), USENIX ATC '21. 26 Azure servisi, 18 ay, 10M+ alarm. [PDF](https://www.usenix.org/system/files/atc21-li-liqun.pdf) |
| Testlerin yalnızca %1,23'ü ömrü boyunca bir kırılma buldu; koşan testlerin %99'undan fazlası geçiyor ya da flake veriyor | **[hakemli]** Google CI çalışmaları, ICSE-SEIP 2017 ve ICST 2017. [PDF](https://research.google.com/pubs/archive/45861.pdf) |
| Kural tabanlı monitörler anomali tespitine göre ~%40 daha fazla bakım dokunuşu istiyor; haftada 50 alarmı geçen kanalda etkileşim %15, 100'ü geçince %20 daha düşüyor; kök neden dağılımı ve "olayların ~%34'ü aslında olay değil" | **[satıcı telemetrisi]** Monte Carlo, "Data Quality Statistics & Insights From Monitoring +11 Million Tables in 2026", 1 Haziran 2026. [Bağlantı](https://montecarlo.ai/blog-data-quality-statistics) |
| Ayda 67 olay, olay başına ortalama 15 saat, %74'ünde iş tarafı önce fark ediyor | **[satıcı anketi]** Monte Carlo / Wakefield Research, n=200, saha Mart 2023. [Bağlantı](https://montecarlo.ai/blog-data-quality-survey) |
| SRE tarafında toil medyanı %20, operasyon işi medyanı %30 | **[satıcı anketi]** Catchpoint, The SRE Report 2025, n=301, saha Temmuz-Ağustos 2024. [PDF](https://resources.catchpoint.com/hubfs/Website%20Assets%20-%20Briefs,%20EBooks,%20etc/The%20SRE%20Report%202025%20Catchpoint.pdf) |
| Alarm aşırı yükünü en büyük engel seçenler %4,6 | SANS 2024 SOC Survey, n=403. Satıcı sponsorlu ama satıcı anketi değil. **Bitişik alandan aktarım:** bu güvenlik operasyonları verisi, veri pipeline'ı verisi değil, ve slayt bunu açıkça söylüyor. |

## Bölüm 2: Paradigma kayması

| Slaytta geçen | Kaynak |
| --- | --- |
| LangGraph 1.0 GA, Ekim 2025 | [LangChain changelog](https://changelog.langchain.com/announcements/langgraph-1-0-is-now-generally-available) |
| Microsoft Agent Framework 1.0, Nisan 2026 | [Microsoft Agent Framework blogu](https://devblogs.microsoft.com/agent-framework/migrate-your-semantic-kernel-and-autogen-projects-to-microsoft-agent-framework-release-candidate/) |
| MCP, Aralık 2025'te Linux Foundation altındaki Agentic AI Foundation'a bağışlandı; en kapsamlı revizyon Temmuz 2026 | [Bağış duyurusu](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/) · [2026-07-28 spesifikasyonu](https://blog.modelcontextprotocol.io/posts/2026-07-28/) |
| Ekiplerin %72'si AI destekli kod yazmayı, yalnızca %24'ü AI destekli pipeline yönetimini önceliklendiriyor (n=363, Nisan 2026); "zamanının çoğunu bakıma harcıyorum" oranı %57'de sabit kaldı | **[satıcı anketi]** dbt Labs, State of Analytics Engineering 2026. [Bağlantı](https://www.getdbt.com/blog/new-dbt-labs-report-finds-ai-driven-acceleration-is-outpacing-trust-and-governance) |

## Bölüm 3: Bir veri ajanı neyden yapılır

| Slaytta geçen | Kaynak |
| --- | --- |
| Araç çağırma döngüsü, gözlem ve akıl yürütmenin iç içe geçmesi | **[hakemli]** Yao ve ark., "ReAct: Synergizing Reasoning and Acting in Language Models". [arXiv](https://arxiv.org/abs/2210.03629) |
| Kendi kendini düzeltmenin sınırları; ajanın doğrulayıcısı kadar iyi olması | **[hakemli]** "Self-Refine" ([arXiv](https://arxiv.org/abs/2303.17651)), "Reflexion" ([arXiv](https://arxiv.org/abs/2303.11366)) ve "Large Language Models Cannot Self-Correct Reasoning Yet" ([arXiv](https://arxiv.org/abs/2310.01798)) |
| Bakımsız bırakılan bağlam katmanı doğruluğu bir ayda %95'ten ~%65'e düşürdü | **[birinci taraf]** Anthropic, "How Anthropic enables self-service data analytics with Claude", 3 Haziran 2026. [Bağlantı](https://claude.com/blog/how-anthropic-enables-self-service-data-analytics-with-claude) |
| Graf tabanlı, durum tutan ajan orkestrasyonu ve özyineleme sınırı | [LangGraph dokümantasyonu](https://docs.langchain.com/oss/python/langgraph/overview) |
| Trace, span ve ajan gözlemlenebilirliği; GenAI ajan span'larının hâlâ Development kararlılığında olması | [OpenTelemetry GenAI semantic conventions](https://github.com/open-telemetry/semantic-conventions-genai) · [Arize Phoenix](https://arize.com/docs/phoenix) |

## Bölüm 4: Riskler ve guardrail'lar

| Slaytta geçen | Kaynak |
| --- | --- |
| Agentic AI projelerinin %40'tan fazlası 2027 sonuna kadar iptal edilecek; binlerce satıcıdan ~130'u gerçek | Gartner basın açıklaması, 25 Haziran 2025. Öngörü geri çekilmedi. [Bağlantı](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled) |
| İlk bağımsız Hype Cycle for Agentic AI, Nisan 2026, Peak of Inflated Expectations | [Gartner](https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai) |
| Kuruluşların %17'si AI ajanı dağıtmış | Gartner 2026 CIO anketi |
| Yanıtların %53'ü teknik olarak doğru, kullanıcı memnuniyeti %95, oturumların %80'i "Fix with AI" | **[hakemli]** LinkedIn SQL Bot, KDD '25 workshop bildirisi. [arXiv](https://arxiv.org/abs/2507.14372) |
| İlk seferde kabul oranı %20'den %40'ın üzerine | **[birinci taraf]** Pinterest mühendislik blogu, "How we built text-to-SQL at Pinterest". [Bağlantı](https://medium.com/pinterest-engineering/how-we-built-text-to-sql-at-pinterest-30bad30dabff) |
| ELT-Bench: %3,9 önce, düzeltilmiş benchmark'ta %32,51; başarısızlıkların %82,7'sinde hata benchmark'ın kendisinde | **[hakemli]** ELT-Bench-Verified, Mart 2026. [arXiv](https://arxiv.org/abs/2603.29399) |
| Deneyimli geliştiriciler AI ile %19 daha yavaş, kendileri %20 hızlandıklarını sanarken | **[hakemli]** METR, randomize kontrollü deney. [arXiv](https://arxiv.org/abs/2507.09089) |

## Bölüm 5 ve ekosistem tablosu

Olgunluk sütunu 21 Ağustos 2026 itibarıyla doğrulandı.

| İddia | Kaynak |
| --- | --- |
| Databricks Agent Bricks GA (Haziran 2026) | Databricks DAIS 2026 duyuruları · [Lakeflow Designer](https://docs.databricks.com/aws/en/designer/what-is-lakeflow-designer) |
| Snowflake Cortex Agents GA (4 Kasım 2025); "Snowflake Intelligence" adı CoWork oldu | [Cortex Agents sürüm notları](https://docs.snowflake.com/en/release-notes/2025/other/2025-11-04-cortex-agents) |
| dbt Developer Agent hâlâ Preview; Fusion ayrı motor değil, dbt Core v2.0'a birleşti | [Developer Agent](https://docs.getdbt.com/docs/dbt-ai/developer-agent) · [dbt Core v2](https://docs.getdbt.com/blog/dbt-core-v2-is-here) |
| BigQuery Data Engineering Agent GA (Nisan 2026), pipeline'ı kendisi çalıştıramıyor | [Google Cloud blogu](https://cloud.google.com/blog/products/data-analytics/exploring-the-data-engineering-agent-in-bigquery) · [Dokümantasyon](https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview) |
| Monte Carlo Troubleshooting Agent hâlâ preview kısıtları taşıyor; nicel iddialar 2025 blogundan, bugünkü dokümanda yok | [Dokümantasyon](https://docs.getmontecarlo.com/docs/troubleshooting-agent) · [2025 duyurusu](https://montecarlo.ai/blog-monte-carlo-observability-agents) |
| Matillion: Data Productivity Cloud'un tamamı Maia olarak yeniden markalandı | [Maia changelog](https://docs.maia.ai/docs/changelog/2026-changelog) |
| Airbyte Agent Engine public beta; 550+ konnektör | [Airbyte blogu](https://airbyte.com/blog/agent-connectors) |
| Prefect, Dagster Labs'ı 13 Temmuz 2026'da aldı; iki ürün de bağımsız devam ediyor | [Duyuru](https://dagster.io/blog/prefect-is-acquiring-dagster) |
| Airflow'un common-ai provider'ı, yerleşik insan incelemesi | [Airflow dokümantasyonu](https://airflow.apache.org/docs/apache-airflow/stable/installation/upgrading_to_airflow3.html) |

---

## Kullanmadığım istatistikler

Sunumda bu rakamlar geçmiyor. Hepsi çok dolaşıyor; hiçbirinin birincil kaynağı
iddia edildiği hâliyle doğrulanamadı. Deck içinde 9. slayttaki kutucuğa
tıklayarak açılan ek slayt bunların kısaltılmış hâlini gösteriyor.

| İddia | Neden kullanılmadı |
| --- | --- |
| "Alarmların %51'i hiç incelenmiyor" (IBM 2023) | Raporun içinde 51 diye bir sayı yok. IBM / Morning Consult raporu (n=1.000, 10 ülke, Mart 2023) "yüzde 49'una ulaşıyorlar" diyor. 51, 100'den 49'un çıkarılmışı; IBM'in kendi basın bülteni bile ifadeyi tersine çevirmiş. |
| "IBM: günde X saat false positive'e gidiyor" | Raporda saat cinsinden hiçbir false-positive metriği yok, yalnızca mesai gününün %32'si oranı var. Saatli her versiyon türetme. |
| "Veri bilimciler zamanının %80'ini temizliğe harcıyor" | Atıf zinciri izlendi ve çöktü. Gerçek anket rakamları %51 ile %60 arasında ve sorular birbirinden farklı. [İz sürümü](https://blog.ldodds.com/2020/01/31/do-data-scientists-spend-80-of-their-time-cleaning-data-turns-out-no/) |
| "Kötü veri kalitesi yılda 3,1 trilyon dolar" (IBM) | Kaynak bir infografik ve yayından kaldırılmış. |
| "Kötü veri kalitesi kurum başına yılda 12,9 milyon dolar" (Gartner) | Gartner'ın kendi yayınında var, ama metodolojisi kamuya kapalı. Kullanılacaksa bu şerhle kullanılmalı. |
| "Ekipler haftada 2.000+ alarm alıyor, %3'ü gerçekten önemli" | Bir kaynağa atfediliyor ama rapor adı ve bağlantısı yok. En çok dolaşan alarm yorgunluğu rakamı ve dayanağı bulunamadı. |
| "SANS: SOC ekiplerinin %66'sı alarm hacmine yetişemiyor" | Yanlış atıf. SANS 2024 raporundaki %66, üst yönetime metrik raporlama oranı. Alarm hacmiyle ilgili rakam %4,6. |
| "Bilinen bilinmeyen / bilinmeyen bilinmeyen" çerçevesi | İzi sürüldüğünde tamamen satıcı kökenli, bağımsız dayanağı yok. Aynı argüman bunun yerine Redyuk vd. (EDBT 2021) üzerine kuruldu. |
| Monte Carlo "olay çözüm süresinde %80 veya daha fazla azalma" | Satıcı pazarlaması, bağımsız doğrulama yok. Aynı satıcının telemetrisi kullanıldı, iddiası değil. |
| Vectra 2026 "günde 2.992 alarm, %63'ü ele alınmıyor" | Sayısal kırılım form arkasında. Dolaşan %63, aynı satıcının bambaşka bir raporundaki bambaşka bir metrik. |
| "Ardent AI, ilk AI Data Engineer" | Şirket veri mühendisliğinden pivot etti; örnek artık geçerli değil. |
