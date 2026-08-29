# Kaynaklar

Ana sunum bir istatistik veya ürün karşılaştırması değildir. Bu belge,
tanımların ve önemli kavramsal ayrımların dayandığı birincil kaynakları slayt
akışına göre gösterir.

Son doğrulama: 29 Ağustos 2026.

## Slayt 3-8: SDLC, DataOps ve kural tabanlı çalışma

- [dbt, What is analytics engineering?](https://www.getdbt.com/what-is-analytics-engineering)
- [Google Cloud Architecture Center, DevOps capabilities](https://cloud.google.com/architecture/devops)
- [Apache Airflow documentation](https://airflow.apache.org/docs/)
- [dbt documentation](https://docs.getdbt.com/)

Bu bölümün temel iddiası istatistiksel değildir: Veri değişiklikleri geliştirme,
test, inceleme, yayınlama ve operasyon döngüsünden geçer; kurallar önceden ifade
edilmiş beklentileri deterministik biçimde sınar.

## Slayt 9: Otomasyon, copilot ve ajan

- [OpenAI, A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)
- [Anthropic, Building effective agents](https://www.anthropic.com/research/building-effective-agents)

OpenAI, LLM'in iş akışı yürütmesini yönetmediği tek seferlik uygulamaları ajan
olarak değerlendirmez. Anthropic, sabit workflow ile modelin kendi süreç ve araç
kullanımını yönettiği agent yaklaşımını açıkça ayırır.

## Slayt 10-17: Agentic Data Engineering ve kapsamı

- [IBM, What is agentic AI data engineering?](https://www.ibm.com/think/topics/agentic-ai-data-engineering)
- [Qlik, Redefining data engineering for the agentic era](https://www.qlik.com/blog/redefining-data-engineering-for-the-agentic-era)
- [Qlik, Agentic Data Engineering](https://www.qlik.com/us/agentic-ai/agentic-data-engineering)
- [Databricks, Use Genie Code for pipeline development](https://docs.databricks.com/aws/en/ldp/de-agent)

IBM alanı, veri sistemlerinin oluşturulması ve bakımında ajan kullanımı olarak
tanımlar. Qlik buna ajanlar için güvenilir veri hazırlama yönünü de ekler.
Databricks'in resmi dokümantasyonu planlama, varlık getirme, kod çalıştırma ve
çıktıya göre hata düzeltme davranışlarını veri mühendisliği bağlamında örnekler.

## Slayt 18-20: Ajan sistemi ve yürütme döngüsü

- [Anthropic, Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents)
- [OpenAI Agents SDK, Running agents](https://openai.github.io/openai-agents-python/running_agents/)
- [Google Cloud, Core concepts of AI agents](https://cloud.google.com/resources/core-concepts-ai-agents)
- [ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629)

Anthropic ajanı planlayan, eyleyen, sonucu gözlemleyen ve uyarlayan self-directed
loop olarak açıklar. “Kontrol döngüsü” ifadesi sunumda alanın tanımı olarak
kullanılmaz. “Kanıtla beslenen karar ve eylem döngüsü”, veri mühendisliği
izleyicisi için açıklayıcı bir yürütme modeli olarak kullanılır.

## Slayt 21-23: Grounding ve doğrulama

- [OpenAI, A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)
- [Anthropic, Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Anthropic, Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)

Grounding yanlış varsayım riskini azaltır, fakat doğruluk garantisi değildir.
Kod çalıştırma, compile, test ve sorgu gibi deterministik geri bildirimler,
önerinin sonucunu sınar. İnsan incelemesi sistem gereksinimleri ve daha geniş
etki için önemini korur.

## Slayt 24-27: Guardrail ve kademeli otonomi

- [OpenAI Agents SDK, Guardrails](https://openai.github.io/openai-agents-python/guardrails/)
- [OpenAI, A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)
- [Anthropic, Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents)

Kaynaklar guardrail'ların tek bir prompt kontrolü yerine kimlik, araç, çalışma
ortamı, model, insan kontrolü ve standart güvenlik önlemleriyle katmanlanmasını
önerir.

## Slayt 28-30 ve teknik ekler: Demo sistemi

Bu slaytların kaynağı çalışan PoC'nin kodu, capability spec'leri ve Architecture
Decision Record belgeleridir:

- Demo deposu `README.md`
- Demo deposu `DEMO.md`
- `adr/0019-reach-tools-through-direct-clients-rather-than-mcp.md`
- `adr/0020-diagnose-each-incident-from-scratch.md`
- `adr/0022-prove-a-fix-by-building-it-on-a-copy.md`
- `adr/0023-the-agent-chooses-contents-never-targets.md`
- `adr/0024-verify-a-fix-against-a-run-you-started.md`
- `adr/0027-bound-the-consoles-authority-by-grant.md`

Demo, tek bir schema drift senaryosunu kanıtlar. Diğer arıza sınıflarına
genellendiği iddia edilmez.

## Satıcı kaynakları hakkında

IBM, Qlik ve Databricks kendi ürün ve stratejilerinin sahibidir; bu nedenle
alanı nasıl tanımladıklarını göstermek için birincil kaynaktırlar. Performans
iddialarını bağımsız kanıt olarak kullanmıyoruz. Ana sunumda satıcı başarı oranı,
benimsenme oranı veya pazar karşılaştırması bulunmaz.
