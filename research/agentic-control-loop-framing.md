# Agentic Data Engineering İçin Kontrol Döngüsü Çerçevesi

**Araştırma tarihi:** 29 Ağustos 2026  
**Araştırma sorusu:** “Agentic Data Engineering = Ajan bir kontrol döngüsüdür” anlatımı gerçekçi mi?  
**Kısa karar:** **Metaforu nitelendirerek koru.** Kontrol döngüsü, agentic davranışın yaygın bir yürütme modelidir; Agentic Data Engineering alanının tamamının tanımı değildir.

## Sonuç

Şu eşitlik fazla indirgemecidir:

> Agentic Data Engineering = Ajan bir kontrol döngüsüdür.

Şu ifade ise kaynaklarla uyumludur:

> **Datacının gözünden ajan, kanıtla beslenen bir karar ve eylem döngüsüdür.**

Sunumda kurulması gereken ayrım:

- **Ajan döngüsü:** Ajanın bir görevi nasıl yürüttüğünü açıklar.
- **Agentic Data Engineering:** Bu yürütme modelinin veri mühendisliği yaşam döngüsüne; veri bağlamı, araçlar, doğrulayıcılar, izinler, yönetişim ve insan sorumluluğuyla birlikte uygulanmasını anlatır.

## Metafor Neden Gerçekçi?

OpenAI, tek ajanlı sistemleri araç ve talimatlarla bir iş akışını döngü içinde yürüten sistemler olarak tanımlar. Bir “run”, çıkış koşuluna kadar devam eden bir döngüdür ve OpenAI bu `while` döngüsünü ajan çalışmasının merkezinde konumlandırır. [OpenAI, *A Practical Guide to Building Agents*](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)

OpenAI Agents SDK bu yapıyı somut bir yürütme algoritması olarak gösterir: model çağrılır; son çıktı oluşmuşsa çalışma biter; araç çağrısı veya handoff varsa sonuç girdiye eklenir ve model yeniden çalıştırılır. Ayrıca azami tur sayısı gibi durma koşulları vardır. [OpenAI Agents SDK, *Running Agents*](https://openai.github.io/openai-agents-python/running_agents/)

Anthropic, ajanı sabit bir betiği izlemek yerine kendi süreç ve araç kullanımını yönlendiren sistem olarak tanımlar. Ajanın pratikte “planla, eyle, sonucu gözlemle, uyum sağla ve tekrarla” biçiminde kendini yöneten bir döngüde çalıştığını belirtir. Aynı kaynak, modelin yanında talimat ve güvenlik katmanı, araçlar ve çalışma ortamını da ajan sisteminin parçaları olarak sayar. [Anthropic, *Trustworthy Agents in Practice*](https://www.anthropic.com/research/trustworthy-agents)

ReAct araştırması da akıl yürütme ile dış dünyadaki eylemleri dönüşümlü yürütür. Eylem dış kaynaktan yeni bilgi getirir; bu gözlem, sonraki akıl yürütme ve eylem planını etkiler. Bu yapı, “gözlem ve eylem” döngüsünün araştırma temelidir. [Yao ve diğerleri, *ReAct: Synergizing Reasoning and Acting in Language Models*](https://arxiv.org/abs/2210.03629)

Bu nedenle aşağıdaki akış gerçekçi bir öğretim modelidir:

```text
Gözlemle
   ↓
Kanıt topla
   ↓
Hipotez kur veya planla
   ↓
Araçla eyle
   ↓
Sonucu doğrula
   ↓
Uyarlayıp tekrarla veya yetki sınırında dur
```

## Eşitlik Neden Yanıltıcı?

### 1. Döngü, ajan olmanın tek başına yeterli koşulu değildir

Kodla önceden belirlenmiş bir otomasyon da gözlem, eylem ve yeniden deneme döngüsüne sahip olabilir. Anthropic’in ayrımında workflow yolları kodla belirlenirken ajan, kendi sürecini ve araç kullanımını dinamik biçimde yönlendirir. Dolayısıyla her döngü agentic değildir. [Anthropic, *Building Effective Agents*](https://www.anthropic.com/engineering/building-effective-agents)

### 2. Döngü, ajan mimarisinin tamamı değildir

Google Cloud’un ajan mimarisi; model, grounding, araçlar, bellek, veri mimarisi, orkestrasyon ve çalışma ortamını birlikte ele alır. ReAct yalnızca yaygın orkestrasyon desenlerinden biridir. Üretim ortamında güvenlik, kimlik, politika, gözlemlenebilirlik ve değerlendirme de gerekir. [Google Cloud, *Core Concepts of AI Agents*](https://cloud.google.com/resources/core-concepts-ai-agents)

Planlama ve uzun vadeli bellek de her ajan için zorunlu ve aynı biçimde uygulanmış özellikler değildir. OpenAI, orkestrasyonun model tarafından veya kodla yönetilebileceğini belirtir; Google ise kısa süreli bağlam, uzun süreli bilgi ve işlem kaydı için farklı bellek katmanları tanımlar. Bu öğeler tasarım seçenekleridir, “döngü” kelimesinin doğal sonucu değildir. [OpenAI Agents SDK, *Agent Orchestration*](https://openai.github.io/openai-agents-python/multi_agent/), [Google Cloud, *Core Concepts of AI Agents*](https://cloud.google.com/resources/core-concepts-ai-agents)

### 3. Agentic Data Engineering tek bir çalışma döngüsünden daha geniştir

Google Cloud’un Data Engineering Agent tanımı; pipeline oluşturma ve bakım, doğal dilden SQL veya Python üretme, pipeline arızalarını bulup düzeltme, şema ve partition iyileştirmeleri önerme gibi birden fazla veri mühendisliği işini kapsar. Başka veri ajanları gözlemlenebilirlik, analitik ve veri bilimi gibi farklı görevler üstlenir. Bu kapsam, alanın yalnızca olay müdahale döngüsüyle açıklanamayacağını gösterir. [Google Cloud, *New Data Agents Across the Agentic Data Cloud*](https://cloud.google.com/blog/products/data-analytics/new-data-agents-across-the-agentic-data-cloud/)

İncelenen birincil kaynaklardan çıkan yorum şudur: **Agentic Data Engineering için tek ve ortak bir standart tanım kullanılmıyor.** Kaynakların ortak yönü, veri yaşam döngüsündeki işleri amaç odaklı, araç kullanan ve bağlama dayalı ajanlarla yürütmektir. “Kontrol döngüsü” bunun çalışma çekirdeğini açıklayabilir; alanın sınırını çizemez.

### 4. “Kontrol döngüsü” klasik kontrol teorisi anlamında kullanılmamalıdır

Klasik geri beslemeli kontrolde ölçülen çıktı, referans değerle karşılaştırılır; hata sinyali kontrolöre girer ve tasarımda kararlılık, izleme doğruluğu ve bozucu etki bastırma gibi ölçülebilir özellikler aranır. [MIT OpenCourseWare, *Lectures on Dynamic Systems and Control*, Bölüm 18](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/996025f6db0d90b00f11c44fc49b85f9_MIT6_241JS11_textbook.pdf)

LLM tabanlı ajanlarda ise hedef çoğu zaman sembolik ve açık uçludur; eylemler ayrık olabilir, model olasılıksaldır ve klasik kararlılık garantisi yoktur. Bu nedenle “kontrol döngüsü” standart teknik eş anlamlı değil, yararlı bir mühendislik analojisidir. Sunum bu analojiden klasik kontrol garantileri çıkarmamalıdır.

## Demo İçin Uygunluk

Metafor, schema drift demosuna özellikle iyi oturur:

| Kontrol benzetmesindeki öğe | Demodaki karşılık |
|---|---|
| Hedef durum | Pipeline’ın doğrulanmış biçimde yeşil olması |
| Gözlem | Çalışma logları, canlı şema, dbt modeli |
| Hipotez | Arızanın kolon adı değişikliğinden kaynaklandığı çıkarımı |
| Eylem | Sınırlı bir kod değişikliği önerisi |
| Geri bildirim | İzole ortamda `dbt build` ve test sonucu |
| Sınır ve durma koşulu | İnsan onayı, izin politikası, başarı veya açıklamalı başarısızlık |

Burada ajan yalnızca bir çıktı üretmez; araç sonucunu yeniden bağlama alır ve sonraki kararını buna göre değiştirir. Bu, “kanıtla beslenen karar ve eylem döngüsü” ifadesini somutlaştırır.

## Halüsinasyon ve Bağlam İçin Doğru İfade

“Halüsinasyon veri veya bağlam eksikliğinden oluşur” denmemelidir. NIST, yanlış veya uydurma içeriği üretici modellerin olasılıksal tasarımının doğal bir riski olarak tanımlar; yüksek bağlam ve alan uzmanlığı gerektiren konularda risk daha belirgin olabilir. [NIST AI 600-1, *Generative Artificial Intelligence Profile*, Bölüm 2.2](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)

Grounding, model çıktısını doğrulanabilir kaynaklara bağlayarak halüsinasyon olasılığını azaltır; ortadan kaldırdığı söylenmez. [Google Cloud, *Develop a Generative AI Application: Grounding*](https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application)

Sunumda önerilen ifade:

> **Eksik veya yanlış bağlam, hatalı çıkarım riskini artırır. Grounding riski azaltır; doğrulama ise yanlış önerinin eyleme dönüşmesini sınırlar.**

## Sunum İçin Nihai Öneri

**Karar: Nitelendirerek koru.**

- Ana metafor olarak “Agentic Data Engineering = kontrol döngüsü” eşitliğini kullanma.
- “Datacının gözünden ajan” slaytında kontrol döngüsünü bir **çalışma modeli** olarak kullan.
- Sunumun büyük resminde iki iç içe döngü göster:

```text
DataOps yaşam döngüsü
└── Ajanın kanıtla beslenen karar ve eylem döngüsü
```

- Ajan döngüsünün çevresine şu sistem öğelerini açıkça yerleştir: veri bağlamı, araçlar, doğrulayıcılar, izinler, gözlemlenebilirlik ve insan onayı.
- “Kontrol” kelimesinin yanlış bir kesinlik duygusu yaratmasını önlemek için slayt başlığında “kanıtla beslenen karar ve eylem döngüsü” ifadesini tercih et.

Önerilen slayt cümlesi:

> **Ajan, çevreden kanıt toplar; araçlarla eyleme geçer; sonucu doğrular ve bir sonraki adımını geri bildirime göre uyarlar.**

Önerilen anlatıcı notu:

> Bu bir klasik kontrol sistemi denklemi değil, ajanın yürütme biçimini anlatan bir mühendislik analojisidir. Döngü tek başına Agentic Data Engineering değildir. Güvenilir sistemi; döngünün etrafındaki bağlam, araçlar, doğrulayıcılar, izinler ve insan sorumluluğu oluşturur.
