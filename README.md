# Agentic Data Engineering: kuraldan ajana

DataOps süreçlerini bugün kural bazlı yöneten ekipler için hazırlanmış bir
sunum. Ana argüman şu: sorun kuralların yanlış olması değil, kuralın
kapsayamadığı alanın kural yazma hızından daha hızlı büyümesi. Agentic yaklaşım
kural bazlıyı yok etmiyor, üstüne bir katman ekliyor.

**Şekli:** 45 dakika sunum, ardından 15 dakika canlı demo. Üç perde, 42 ana
slayt, artı yalnızca soru gelirse açılan 3 ek slayt.

| Perde | Slayt | Soru |
| --- | --- | --- |
| I. Neden değişmeli | 3 - 19 | DataOps nedir, bugün nasıl yönetiliyor, nereye yetişemiyor |
| II. Nasıl çalışıyor | 20 - 26 | Bir veri ajanı fiilen neyden yapılır |
| III. Ne yapmalı | 27 - 42 | Riskler, guardrail'lar, nereden başlanır |

**Seviye:** başlangıç üstü. Hedef kitle yalnızca veri ekipleri değil, konuya
meraklı ama arka planı olmayan kişiler de. Bu yüzden Perde I önce ortak dili
kuruyor: veri pipeline'ı nedir, DataOps nedir ve döngüsü nasıl işler, kod bugün
hangi onay yolculuğundan geçerek production'a çıkar, ve veride bu döngü neden
yazılımdakinden farklıdır. Terimler ilk geçtikleri slaytta tanımlanır; 5. ve 42.
slayttaki kutucuk sözlüğü açar.

Slayt 19 kapsam haritası: Agentic Data Engineering'in yedi uygulama alanı ve
demonun bunlardan hangisi olduğu. Sunumun geri kalanı yedisinin de altında yatan
aynı mekanizmayı anlatıyor.

Slaytların çoğu adım adım kuruluyor: aynı slayt numarasında kalıp her `→` bir
bileşen ekliyor. Slayt açıldığında hiçbir adım açık değildir, yani ilk bileşen de
diğerleri gibi bir tıklamayla gelir. Ana hattın tamamı 160 tıklama, yani 45
dakikada adım başına ortalama 17 saniye. Kaynak künyeleri adım değildir: slayt
açılır açılmaz altta dururlar.

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
| `→` / `Space` | Sonraki adım, adımlar bitince sonraki slayt |
| `←` / `Backspace` | Önceki adım, slaytın başındaysanız önceki slaytın son adımı |
| `P` | Sunucu modunu aç |

Geri tuşu adım farkındadır ve bu, paylaşılan bileşenin varsayılan davranışı
değildir. Bileşenin `prev()` metodu doğrudan bir önceki slayta atlayıp onu ilk
adımından açar, yani az önce kurduğunuz her şeyi baştan tıklatır. `index.html`
içindeki kısa bir yama bunu düzeltir; ayrıntısı orada yorumda yazılı.

Slaytların çoğunda adımlı açılım var: bu slaytlarda `→` slaytı değiştirmez,
sıradaki bileşeni açar. Sayaç aynı numarada kalır. Konuşmacı notları da bu
adımlara göre numaralandı, yani notta `1)` yazan cümle ilk adıma karşılık
geliyor.

Dört slaytta tıklanabilir kutucuk var, hepsi ana hattın dışına açılır ve geri
dönmek için `←` yeterlidir:

| Slayt | Kutucuk |
| --- | --- |
| 5 ve 42 | Sözlük: sunumda geçen terimler |
| 14 | Kullanmadığım istatistikler ve nedenleri |
| 36 | Detaylı ekosistem karşılaştırması |

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
  index.html          45 sahne, slideshow island ve zaman çizelgesi
  assets/fonts/       Inter ve JetBrains Mono, latin + latin-ext
  vendor/gsap.min.js
vendor/               Player ve slideshow bundle'ları
scripts/              island, fragment, numaralama ve not script'leri
SOURCES.md            Her rakamın birincil kaynağı, ve kullanılmayanlar
SPEAKER-NOTES.md      Konuşmacı notları, island'dan üretilir
```

Slayt içeriği, zamanlama ve konuşmacı notları tek bir yerde yaşıyor:
`composition/index.html`. Sarmalayıcıdaki island bir kopya, elle düzenlenmemeli.

## Slaytları değiştirmek

```bash
npm run fragments   # island'in adim noktalarini slaytlardan yeniden turetir
npm run renumber    # sahne baslangic zamanlarini DOM sirasina gore yazar
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
saniyede başlıyor. Araya slayt eklemek sonraki bütün zamanları kaydırdığı için
bunu elle yapmayın:

```bash
npm run renumber && npm run fragments && npm run sync && npm run notes
```

`renumber` başlangıç zamanlarını DOM sırasından, `fragments` da adım noktalarını
slaytlardaki `data-frag` işaretlerinden türetir. İkisi de tek doğruluk kaynağı
olarak slaytların kendisini alır, yani island onları takip eder, tersi değil.

`npm run lint` iki uyarı verir: dosya uzun ve tek bir track'te 45 zamanlı öğe
var. İkisi de bilinçli. Bu bir deck, sahneleri ayrı dosyalara bölmek onları
sürüklenmeye açık hâle getirirdi.

## Hareket

Navigasyon bir seek'tir, yani oynatma değil tek kareye atlamadır. Bu yüzden deck
iki katman kullanır. Kök zaman çizelgesi "T anında ekranda ne olmalı" sorusunu
cevaplar ve her adım kendi anında tam açık olacak şekilde yerleştirilmiştir;
nereye atlarsanız atlayın kare doğrudur. İkinci katman playhead'i izler ve ileri
gidildiğinde o açılımı yeniden oynatır, yoksa her adım fotoğraf gibi belirirdi.

İkinci katman tamamen kozmetiktir: kaldırırsanız deck yine doğru çalışır, sadece
sert görünür. `?debug=layout` ile açıldığında zaten devre dışı kalır, çünkü
denetim tek kareleri örnekler.

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

Aynı sayfada iki kontrol daha var, ikisi de güvenli alanın göremediği hataları
yakalar:

- `__hfAuditAnchors()`: bir SVG etiketi `text-anchor` özniteliği yazıp CSS onu
  ezdiğinde etiket yanlış yere hizalanır ve yanındaki şekle girer.
- `__hfAuditSvgBoxes()`: bir etiket ait olduğu kutuya sığmıyorsa bildirir. Bir
  etiketin kutusu, merkezini içeren en küçük dikdörtgendir; merkezi hiçbir
  dikdörtgenin içinde olmayan etiketler (pipeline düğümlerinin altındaki
  açıklamalar, barların yanındaki değerler) tasarım gereği serbesttir ve
  denetlenmez. Taşma piksel cinsinden raporlanır.

İkincisi merdivendeki gerçek bir hatadan sonra eklendi: dördüncü kutunun başlığı
296 piksellik kutuda 363 piksel yer kaplayıp komşularının üstüne biniyordu, ve
slaytın güvenli alanı içinde kaldığı için ilk denetimden temiz geçmişti.

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
