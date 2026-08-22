# Agentic Data Engineering: kuraldan ajana

DataOps süreçlerini bugün kural bazlı yöneten ekipler için hazırlanmış bir
sunum. Ana argüman şu: sorun kuralların yanlış olması değil, kuralın
kapsayamadığı alanın kural yazma hızından daha hızlı büyümesi. Agentic yaklaşım
kural bazlıyı yok etmiyor, üstüne bir katman ekliyor.

**Şekli:** 45 dakika sunum, ardından 15 dakika canlı demo. Üç perde, 38 ana
slayt, artı yalnızca soru gelirse açılan 2 ek slayt.

| Perde | Slayt | Soru |
| --- | --- | --- |
| I. Neden değişmeli | 3 - 14 | Kuralı nereye koyuyoruz, nereye yetişemiyor |
| II. Nasıl çalışıyor | 15 - 22 | Bir veri ajanı fiilen neyden yapılır |
| III. Ne yapmalı | 23 - 38 | Riskler, guardrail'lar, nereden başlanır |

Slaytların çoğu adım adım kuruluyor: aynı slayt numarasında kalıp her `→` bir
bileşen ekliyor. Ana hattın tamamı 124 tıklama, yani 45 dakikada adım başına
ortalama 22 saniye.

---

## Sunumu açmak

Repoyu klonlayıp `index.html`'i tarayıcıda açmak yeterli. Dış bağımlılık yok:
player, GSAP ve fontlar repoda duruyor, yani internet olmadan da çalışır.

Bazı tarayıcılar `file://` üzerinden iframe'e erişimi kısıtladığı için yerel bir
sunucu daha güvenli:

```bash
npm run serve
```

Sonra `http://localhost:4173` adresini açın.

Sunucu ön planda çalışır, yani `Ctrl+C` kapatır. Arka planda başlattıysanız ya
da terminali kapattıysanız 4173 portunda takılı kalır. Serbest bırakmak için:

```bash
npm run serve:stop
```

Bu komut portu kimin tuttuğunu bulup kapatır. Sunucu zaten kapalıysa hiçbir şey
yapmaz ve hata vermez, yani emin olmak için çalıştırmakta sakınca yok.

## Sunum yapmak

Sağ alttaki kapsülde **Present** düğmesi var, ya da **P** tuşuna basın. İkinci
bir sekme açılır: o sekme seyircinin gördüğü ekran, ilk sekme sizin sunucu
ekranınız olur. Sunucu ekranında o anki slayt, sıradaki slaytın önizlemesi,
konuşmacı notları ve geçen süre bulunur.

| Tuş | Ne yapar |
| --- | --- |
| `→` / `Space` | Sonraki slayt ya da sonraki açılım maddesi |
| `←` / `Backspace` | Geri |
| `P` | Sunucu modunu aç |

Slaytların çoğunda adımlı açılım var: bu slaytlarda `→` slaytı değiştirmez,
sıradaki bileşeni açar. Sayaç aynı numarada kalır. Konuşmacı notları da bu
adımlara göre numaralandı, yani notta `1)` yazan cümle ilk adıma karşılık
geliyor.

İki slaytta tıklanabilir kutucuk var. 10. slayttaki kutucuk kullanılmayan
istatistiklerin listesini, 32. slayttaki kutucuk detaylı ekosistem tablosunu
açar. İkisi de ana hattın dışında; ancak tıklarsanız görünürler ve geri
dönmek için `←` yeterli.

Konuşmacı notları sunucu ekranında düzenlenebilir. Düzenlemeler tarayıcının
`localStorage`'ında saklanır, dosyaya yazılmaz.

### Google Meet ya da Zoom üzerinden

Seyirci sekmesini paylaşın, sunucu ekranı sizde kalsın.

- **Meet:** Present'e basın, Meet'te **Share screen → A tab** seçip seyirci
  sekmesini paylaşın, sonra sunucu sekmesine dönün. "A window" ya da "Entire
  screen" paylaşmayın: tamamen örtülen bir pencere render etmeyi bırakır ve
  seyirci donmuş slayt görür, tüm ekran ise notlarınızı gösterir.
- **Zoom:** Seyirci sekmesini ayrı bir pencereye sürükleyip o pencereyi
  paylaşın. Pencere tamamen örtülürse donar, bu yüzden ikinci bir ekran
  kullanın ya da bir kenarını görünür bırakın.

---

## Repoda ne var

```
index.html            Sunumu açan sarmalayıcı. GitHub Pages girişi de bu.
composition/          Slaytların kendisi: tek bir HyperFrames kompozisyonu
  index.html          40 sahne, slideshow island ve zaman çizelgesi
  assets/fonts/       Inter ve JetBrains Mono, latin + latin-ext
  vendor/gsap.min.js
vendor/               Player ve slideshow bundle'ları
scripts/              sync-island.mjs ve export-notes.mjs
SOURCES.md            Her rakamın birincil kaynağı, ve kullanılmayanlar
SPEAKER-NOTES.md      Konuşmacı notları, island'dan üretilir
```

Slayt içeriği, zamanlama ve konuşmacı notları tek bir yerde yaşıyor:
`composition/index.html`. Sarmalayıcıdaki island bir kopya, elle düzenlenmemeli.

## Slaytları değiştirmek

```bash
npm run sync        # island'i sarmalayiciya kopyalar, JSON'u dogrular
npm run notes       # SPEAKER-NOTES.md dosyasini yeniden uretir
npm run lint        # slideshow ve kompozisyon kurallari
npm run check       # tarayicida calistirip dogrular
npm run serve       # yerel sunucu, http://localhost:4173
npm run serve:stop  # 4173 portunu serbest birakir
```

Bir slaytın metnini değiştirdikten sonra `npm run lint` yeter. Island'a
dokunduysanız (slayt ekleme, not değiştirme, kutucuk ekleme) önce `npm run sync`
sonra `npm run notes` çalıştırın, yoksa sarmalayıcı ile kompozisyon birbirinden
ayrı düşer ve navigasyon sessizce bozulur.

Sahneler 10 saniyelik bloklar hâlinde diziliyor: `n` numaralı sahne `n × 10`
saniyede başlıyor. Yeni sahne eklerken üç yeri birlikte güncelleyin: sahnenin
kendisi, çalışma zamanı script'indeki `SCENES` dizisi ve island. Üçü ayrışırsa
lint yakalar.

`npm run lint` iki uyarı verir: dosya uzun ve tek bir track'te 40 zamanlı öğe
var. İkisi de bilinçli. Bu bir deck, sahneleri ayrı dosyalara bölmek onları
sürüklenmeye açık hâle getirirdi.

## Taşma denetimi

Slaytların içeriği 1620×840'lık güvenli alanın içinde kalmalı, ve sağ alttaki
360×140'lık köşe navigasyon kapsülü için boş durmalı. Kontrol etmek için deck'i
şu adresle açın:

```
http://localhost:4173/composition/index.html?debug=layout
```

Güvenli alan yeşil kesikli çerçeveyle, nav köşesi kırmızıyla çizilir; sınırı
geçen her öğe kırmızı konturla işaretlenir. Tarayıcı konsolundan
`__hfAuditLayout()` çağırırsanız ihlallerin listesini döndürür.

Aynı sayfada `__hfAuditAnchors()` ikinci bir kontrol yapar: bir SVG etiketi
`text-anchor` özniteliği yazıp CSS onu ezdiğinde etiket yanlış yere hizalanır ve
yanındaki şekle girer. Bu, güvenli alan ihlali sayılmadığı için gözle
yakalanması gereken bir hatadır; denetleyici onu da listeler.

## Yayınlamak

Repo sunum gününe kadar private. Yayına almak için:

1. Repoyu public yapın.
2. **Settings → Pages → Source: GitHub Actions** seçin.

`.github/workflows/pages.yml` zaten hazır; `main` dalına atılan her commit'te
siteyi yayınlar. Adres:
`https://cemalcici.github.io/adc-agentic-data-engineering-presentation/`

Pages, ücretsiz hesaplarda private repo yayınlamaz. Bu yüzden ikinci adım
repoyu public yapmadan çalışmaz.

## Demo

Sunumun son 15 dakikası ayrı bir repodaki çalışan sistemle yapılıyor: upstream
şema kayması bir dbt dönüşümünü kırıyor, bir ajan kök nedeni teşhis ediyor,
düzeltmeyi üretip derleyerek kanıtlıyor, insan onayından sonra uyguluyor ve
pipeline yeşile dönene kadar yeniden çalıştırıyor. Bu repo yalnızca slaytları
içeriyor.
