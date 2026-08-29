# İleri okuma

Bu belge, ana sunumu bir kaynak ve ürün turuna dönüştürmeden konuyu
derinleştirmek isteyenler için hazırlanmıştır. Ana sunumun anlaşılması için
zorunlu değildir.

## Ajan nedir?

- [OpenAI, A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)
- [Anthropic, Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Anthropic, Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents)
- [ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629)

Bu kaynakların ortak noktası, ajanı yalnızca bir model olarak değil; hedef,
araç, çevresel geri bildirim ve durma koşullarıyla çalışan bir sistem olarak
ele almalarıdır.

## Agentic Data Engineering

- [IBM, What is agentic AI data engineering?](https://www.ibm.com/think/topics/agentic-ai-data-engineering)
- [Qlik, Redefining data engineering for the agentic era](https://www.qlik.com/blog/redefining-data-engineering-for-the-agentic-era)
- [Databricks, Use Genie Code for pipeline development](https://docs.databricks.com/aws/en/ldp/de-agent)

Alanın iki yönünü birlikte okuyun: veri mühendisliği görevlerinde ajan
kullanmak ve ajanların güvenle kullanabileceği veri ürünleri hazırlamak.

## Grounding, eval ve guardrail

- [OpenAI, Agent guardrails](https://openai.github.io/openai-agents-python/guardrails/)
- [Anthropic, Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [Google Cloud, Core concepts of AI agents](https://cloud.google.com/resources/core-concepts-ai-agents)

Grounding ile doğrulamayı aynı şey olarak okumayın. Grounding modele daha iyi
kanıt sağlar. Deterministik doğrulama ise yanlış bir önerinin eyleme dönüşmesini
engeller.

## Veri mühendisliği bağlamı

- [dbt, What is analytics engineering?](https://www.getdbt.com/what-is-analytics-engineering)
- [Apache Airflow documentation](https://airflow.apache.org/docs/)
- [dbt documentation](https://docs.getdbt.com/)
- [Model Context Protocol specification](https://modelcontextprotocol.io/specification/)

## Demo kararları

Demo deposundaki README ve Architecture Decision Record belgeleri şu soruların
ayrıntılı cevabını taşır:

- Neden LangGraph?
- Neden MCP kullanılmadı?
- İnsan onayı nasıl zorunlu tutuluyor?
- Düzeltme neden scratch projede build ediliyor?
- Hafıza ve serbest planlama neden kapsam dışında?
- Production'a taşımak için ne eksik?

## Güncellik notu

Ürün adları, preview veya GA durumları ve satıcı özellikleri hızla değişir.
Bu nedenle ana sunum bir ürün karşılaştırması içermez. Bir araç seçmeden önce
üreticinin güncel dokümantasyonunu yeniden doğrulayın.
