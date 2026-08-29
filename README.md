# ADC #3 - Agentic Data Engineering: DataOps'ta kuraldan ajana

Agentic Data Engineering kavramını veri ekiplerinin çalışma biçimi üzerinden
anlatan, 45 dakikalık sunum ve 15 dakikalık canlı demo için hazırlanmış açık
kaynak HyperFrames sunumu.

Sunumun ana çıktısı şudur: Katılımcı Agentic Data Engineering'in ne olduğunu,
otomasyon ve copilot'tan nasıl ayrıldığını açıklayabilmeli; kendi veri stack'inde
uygun bir ilk kullanım alanını seçebilmeli ve bu alan için gereken bağlam,
doğrulama, yetki ve insan onayı sınırlarını tarif edebilmelidir.

## Yapı

- 45 dakika anlatım
- 15 dakika canlı demo
- Sorular için 8 teknik ek slayt
- 32 ana sahne; son iki sahne demo sonrası kapanış için
- En fazla 85 anlamlı ilerleme eylemi

Ana anlatı altı bölümden oluşur:

1. Yanlış yeşil problemi
2. SDLC ve DataOps ortak dili
3. Agentic Data Engineering büyük resmi
4. Datacının gözünden ajan
5. Güvenli başlangıç ve kademeli otonomi
6. Demonun büyük haritadaki yeri

## Sunumu açmak

```bash
npm run dev
```

Komutun yazdığı yerel adresi açın. Sağ alttaki **Present** düğmesi veya `P`
tuşu, seyirci ekranını ayrı sekmede açar. İleri ve geri gitmek için ok tuşları
ya da Space ve Backspace kullanılabilir.

Statik paylaşımda depo kökündeki `index.html` doğrudan açılabilir. Bazı
tarayıcılar `file://` üzerinden iframe erişimini sınırlandırır; bu durumda:

```bash
npm run serve
```

ve ardından `http://localhost:4173` adresini açın.

## Dosyalar

- `index.html`: Katılımcının açtığı sunum kabuğu
- `composition/index.html`: HyperFrames slayt kompozisyonu
- `assets/`: Konuşmacı fotoğrafı ve LinkedIn QR kodları
- `SOURCES.md`: Slayt bazında birincil kaynaklar
- `FURTHER-READING.md`: Konuyu derinleştirmek isteyenler için okuma yolu
- `frame.md`: Görsel dil, renk semantiği ve hareket kuralları

Anlatıcı ve prova notları bu açık kaynak depoda bulunmaz. Slaytlar, notlara
bağımlı olmadan kendi başına izlenebilir biçimde tasarlanmıştır.

## Demo

Canlı demo ayrı depoda paylaşılır: `adc-agentic-data-engineering-demo`.

Demo, Agentic Data Engineering'in tamamını temsil etmez. Dört bölgeli kapsam
haritasındaki **İşlet ve iyileştir** alanından kontrollü bir self-healing
senaryosunu gösterir: schema drift, kök neden analizi, doğrulanmış düzeltme,
insan onayı ve yeniden çalıştırma.

## Tasarım ilkeleri

- Her slaytta tek fikir ve tek baskın görsel
- Açık zemin açıklama, koyu zemin anlatı eşiği ve teknik çekirdek için
- Mavi kanıt ve bağlam, mercan eylem ve dikkat, yeşil doğrulanmış başarı,
  kırmızı arıza anlamına gelir
- Animasyon yalnızca yeni bir düşünce açtığında kullanılır
- Başlık ve grafik aynı sahne matematiğine bağlıdır
- Türkçe metin sentence case kullanır; em dash ve en dash kullanılmaz

## Doğrulama

```bash
npm run sync
npm run check
```

`sync`, slideshow manifestini kompozisyondan kullanıcıya açık `index.html`
dosyasına taşır. `check`, lint, runtime, layout, hareket ve kontrast kontrollerini
çalıştırır.
