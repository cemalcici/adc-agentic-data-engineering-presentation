# Konuşmacı notları

`composition/index.html` içindeki slideshow island'ından üretildi.
Düzenlemek için island'ı düzenleyin, sonra `npm run notes` çalıştırın.
Sunum sırasında bu dosyaya ihtiyacınız yok: Present'e basın, notlar
sunucu ekranında zaten duruyor.

---

## 1 · Kapak

`kapak`

Kendinizi tanıtın ve sözü hemen bağlayın. Bu sunum iki parça: kırk beş dakika kavram, on beş dakika çalışan sistem. Sunum üç perdeden oluşuyor: neden değişmeli, nasıl çalışıyor, ne yapmalı. Sonunda sizden bir karar beklemiyorum; şu soruyu yanınızda götürmenizi bekliyorum: bizim ekipte kuralın yetişemediği yer neresi?

## 2 · Hook: yeşil pipeline

`hook`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Odayı burada kazanın. Kaynak künyesi slayt açılır açılmaz altta duruyor, o yüzden rakamlara ayrı ayrı kaynak vermeyin; bir kez vurgulayın ve geçin: bu Microsoft Teams'in yüz elli iki yüksek şiddetli olayının postmortem analizi, yani kaynağı, insanı ve bütçesi olan bir ekip. Sorun özen eksikliği değil. 1) Herkesin yaşadığı anı anlatın, sonra ilk rakamı açın: olayların yalnızca yüzde elli beşini otomatik izleyiciler yakalamış. 2) Yüzde yirmi dokuzunu dışarıdaki kullanıcılar bildirmiş, yani sorunu müşteri söylemiş. 3) Yüzde on yedisinde ilgili yerde ne monitör ne telemetri varmış.

## 3 · Perde I: Neden değişmeli

`perde-1`

Bu slaytta 2 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Birinci perde açılıyor. Başlığı söyleyin ve nefes alın. 1) Pipeline şeması çiziliyor: kaynak, ingest, dönüşüm, tablo, dashboard. Bu şema sunum boyunca tekrar tekrar karşınıza çıkacak, o yüzden şimdi bir kez tanıtın. Altındaki kesikli çizgiyi gösterin: kural katmanı. Bu perdenin tamamı o katmanın nerede yetişip nerede yetişemediğiyle ilgili.

## 4 · Veri pipeline'ı nedir

`veri-pipeline-nedir`

Bu slaytta 5 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Salonun yarısı bu kelimeleri biliyor, yarısı bilmiyor. Bileni sıkmadan bilmeyeni içeri almanın yolu, şemayı bir kez ağır ağır kurmak. 1) Kaynak: verinin doğduğu yer, ve dikkat edin, genelde başka bir ekibin sahibi olduğu yer. Bu detay sunumun sonunda çok önemli olacak. 2) Ingest: veriyi oradan alıp kendi deponuza taşımak. 3) Dönüşüm: ham veriyi soruya cevap verebilir hale getirmek, yani hesaplamak ve birleştirmek. 4) Sunum: tablo ve grafik, yani birinin bakıp karar vereceği ekran. Şunu söyleyip geçin: bu şemayı sunum boyunca defalarca göreceksiniz, her seferinde başka bir yeri yanacak.

## 5 · DataOps nedir

`dataops-nedir`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Tıklanabilir kutucuk: "Sözlük: sunumdaki terimler" → sozluk

Şimdi ikinci kelimeyi kurun. Pipeline'ı kurmak bir iş, her gün çalışır tutmak bambaşka bir iş; DataOps ikincisinin adı. Yazılımdaki DevOps'un veri tarafındaki karşılığı diyebilirsiniz. 1) Döngüyü soldan sağa okuyun: planla, geliştir, test et, dağıt, işlet, izle. 2) Dönüş okunu gösterin: izlediğiniz şey size bir sonraki planı verir, yani döngü hiç bitmez. 3) Kapanışta sunumun yerini işaretleyin: bu sunum döngünün son iki adımıyla ilgili, işletmek ve izlemek. Çünkü bir pipeline'ın ömrünün neredeyse tamamı orada geçiyor, ve ilk dört adım zaten çok konuşuluyor.

## 6 · Kod nasıl production'a çıkıyor

`sdlc-bugun`

Bu slaytta 5 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Meraklı için zemin, profesyonel için hatırlatma. Hızlı gidin ama son cümleyi vurgulayın. 1) Kod bir depoda geçmişiyle durur, ve bir başkası değişikliği okuyup onaylar. 2) Otomatik testler insanın gözden kaçırdığını arar, sonra deneme ortamında gerçeğin kopyası üzerinde bir kez daha çalışır. 3) Ve production. 4) Bu zincirin adı SDLC, yani yazılım yaşam döngüsü. Şunu söyleyin ve akıllarında bırakın: ortada her zaman bir insan onayı var. Bu cümle sunumun sonundaki demoyu hazırlıyor.

## 7 · Veri neden farklı

`sdlc-veri-farki`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Bu slayt sunumun gizli kilit taşı, o yüzden acele etmeyin. 1) Yazılımda hata yaparsanız eski sürüme dönersiniz ve birkaç dakika içinde her şey eski hâline gelir; hatanın ömrü, onu fark etme sürenizdir. 2) Veride öyle değil. Kodu geri alırsınız ama yanlış veri çoktan yazılmıştır; o veriyle rapor çıkmış, karar verilmiş, belki müşteriye e-posta gitmiştir. Hatanın ömrü artık o kararların ömrüdür. 3) Sonucu söyleyin: bu yüzden veri tarafında onay kapısı yazılımdakinden daha değerlidir. On beş dakika sonra göreceğiniz demonun merkezinde de tam olarak bu kapı duruyor.

## 8 · Kuralı nereye koyuyoruz

`bugun-kural`

Bu slaytta 6 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Salondaki herkesin işini tarif edin, ve saygıyla tarif edin. Kuralları haritanın üstüne tek tek yerleştireceksiniz. 1) Ingest'in altında freshness monitörü: tablo geç mi geldi. 2) Dönüşümün altında dbt testleri: not_null, unique, accepted_values. 3) Tablonun altında volume monitörü: satır sayısı saptı mı. 4) Dashboard'un altında alarm, runbook ve nöbetçi insan. 5) Kapanışı yapın: dördü de çalışan mühendislik, kimse burada yanlış bir şey yapmıyor. Sorun kalite değil, kapsam.

## 9 · Kural olaydan sonra yazılır

`kuralin-varsayimi`

Bu slaytta 3 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Perdenin tezi burada, acele etmeyin. 1) Redyuk ve arkadaşlarının cümlesini yüksek sesle okuyun: elle yazılan kod pipeline'a geriye dönük ekleniyor, yani gözlenmiş hata tipini gelecekte yakalamak için. Kural her zaman olaydan sonra yazılır. Bu hakemli bir kaynak, satıcı broşürü değil. 2) Google TFX alıntısına geçin ve şunu vurgulayın: kuralları en büyük ölçekte işleten ekip, kural kümesinin eksiksiz olabileceği iddiasını kendisi reddediyor. Salona bir soru bırakın: geçen ay yaşadığınız en kötü veri olayının önceden yazılmış bir kuralı var mıydı?

## 10 · Ölçülmüş gürültü

`gurultu`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Üç rakam, sırayla. Kaynaklar altta zaten duruyor; açılışta bir kez söyleyin: bunlar satıcı anketi değil, hakemli akademik çalışmaların üretim ölçümü. 1) Microsoft'un Skype ve Teams alarmlarını dört ay boyunca üretimde ölçtüğü Lumos çalışmasında, alarmların yüzde doksanından fazlası hiç çıkmamalıymış. Metrik bazında yüzde doksan ile doksan sekiz virgül iki arasında. 2) Tencent'in çalışmasında tek bir sistemde elli dokuz bin altı yüz yedi aktif alarm kuralı sayılmış. 3) En can alıcısı: bazı sistemler hiç arıza yaşamadan günde on binlerce alarm üretiyor.

## 11 · Kural envanteri çürür

`kural-curumesi`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Kural envanteri bakım ister ve bu bakımın maliyeti görünmezdir. Kaynaklar altta duruyor: Monte Carlo tarafı satıcı telemetrisi, Google tarafı hakemli. 1) Kural tabanlı monitörler anomali tespitine göre yaklaşık yüzde kırk daha fazla bakım dokunuşu istiyor. 2) Haftada elli alarmı geçen bir kanalda etkileşim yüzde on beş düşüyor, yüzü geçince yüzde yirmi daha. Burada salona sorun: kaç kişinin susturulmuş bir alarm kanalı var? Eller kalkar, ve o eller sizin argümanınızdır. 3) Aynı olgu CI tarafında da var: testlerin yalnızca yüzde bir virgül yirmi üçü ömrü boyunca bir kırılma bulmuş.

## 12 · Kök neden dağılımı

`kok-neden`

Bu slaytta 3 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Burada dürüstlük yapacaksınız, çünkü bu slayt kendi demonuzu zorluyor. 1) Grafiğin tamamını açın ve yukarıdan aşağı okuyun: pipeline çalıştırma hataları yüzde yirmi altı virgül iki, gerçek dünya değişimi yüzde yirmi, ingestion kesintileri yüzde on altı virgül altı, platform kararsızlığı yüzde on beş virgül iki, kasıtlı değişiklikler yüzde on dört virgül iki, ve şema kayması yalnızca yüzde yedi virgül sekiz. Renkleri gösterin: amber olanlar aslında olay değil, yeşil olan demonun kullandığı sınıf. 2) Son satırı açın ve iki şeyi birden söyleyin: amber olanların toplamı yüzde otuz dört, yani ekibiniz zamanının üçte birini olmayan bir problemi kovalıyor. Ve yeşil dilim onaltıda bir; demoda şema kayması kullanıyoruz çünkü en temiz gösterilebilir olan o, en yaygın olan değil. Saklamayın, tam tersine öne çıkarın.

## 13 · Faturanın insan tarafı

`insan-faturasi`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Fatura sistemin değil, nöbetteki insanın üstünde birikiyor. Kaynak altta duruyor ve satıcı anketi olduğunu kendiniz söyleyin, çünkü bir sonraki slayt zaten o freni çekiyor. Freni siz çekerseniz salondaki şüpheci çekmek zorunda kalmaz. 1) Ayda altmış yedi olay. 2) Olay başına ortalama on beş saat. 3) Ve en acı rakam: olayların yüzde yetmiş dördünde sorunu iş tarafı veri ekibinden önce fark ediyor.

## 14 · Dürüstlük freni

`durustluk-freni`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Tıklanabilir kutucuk: "Kullanmadığım istatistikler ve nedenleri" → istatistik-hijyeni

Bu slayt sunumun güvenilirliğini taşıyor. 1) Satıcı anketlerinin nasıl çalıştığını anlatın: soru çözümün var olduğu yeri işaret eder, örneklem de o çözümü satın alabilecek kurumlardan seçilir. 2) Sonra SANS'i açın: satıcı olmayan, dört yüz üç katılımcılı ankette alarm aşırı yükünü en büyük engel sayanlar yalnızca yüzde dört virgül altı. Aynı olgu, iki farklı soru, iki farklı dünya. 3) Perdenin tezini söyleyin: sorun kuralların yanlış olması değil, kuralın kapsayamadığı alanın kural yazma hızınızdan hızlı büyümesi. Vaktiniz varsa sağ alttaki kutucuğa tıklayıp kullanmadığım istatistikler slaytını açabilirsiniz.

## 15 · Üç evre

`uc-evre`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Kısa tutun, bu bir geçiş slaytı. 1) Otomasyon: low-code araçlar manuel script'lerin yerini aldı, ne yapılacağına hâlâ insan karar veriyor. 2) Asistanlık: copilot'lar yazma hızını artırdı ama direksiyon insanda kaldı. 3) Otonomi: ajan hedefi alır, adımları planlar, çalıştırır ve kendi işini doğrular. Öğrenciler için net söyleyin, üçüncü evre yeni ve henüz kanıtlanmamış.

## 16 · Copilot ve ajan farkı

`copilot-ajan`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Tek cümlelik farkı önce söyleyin. 1) Copilot tarafı: bağlamı siz taşırsınız, çalıştırmaz, doğrulamaz, ve hata sizin hatanızdır çünkü kodu siz yazdınız. 2) Ajan tarafı: bağlamı kendi toplar, araç çağırır, çalıştırır ve kendi işini doğrular; hata artık sizin onayınızdır. 3) Kapanış: bu bir hız farkı değil, sorumluluğun yer değiştirmesi. Bu ayrımı burada kurun, çünkü guardrail bölümünün tamamı bunun üzerine oturuyor.

## 17 · Niyet odaklı mühendislik

`niyet-odakli`

Bu slaytta 3 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

1) Örneği yüksek sesle okuyun, çünkü örneğin kendisi argümandır: Stripe abonelik olaylarını depoya al, event ID'ye göre tekilleştir, tarihe göre partition'la. Bu bir şartname; kod değil, pseudo-kod da değil. 2) Zihinsel modeli verin: makine hızında çalışan ve test yazmayı asla unutmayan bir junior mühendisin pull request'ini incelemek. Hızlıdır, çok iş yapar, ve sınırlara ihtiyacı vardır.

## 18 · Neden şimdi

`neden-simdi`

Bu slaytta 3 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Dört madde, hızlı gidin ama dördüncüde durun. 1) Modeller artık araç çağırabiliyor, sadece metin üretmiyor. 2) Ajan çerçeveleri bir nokta sıfır seviyesine geldi: LangGraph ekim iki bin yirmi beş, Microsoft Agent Framework nisan iki bin yirmi altı. 3) MCP bir satıcı özelliği olmaktan çıkıp standart oldu; Anthropic aralık iki bin yirmi beşte Linux Foundation'a bağışladı. 4) Ve talep. Ekiplerin yüzde yetmiş ikisi AI destekli kod yazmayı önceliklendiriyor, ama yalnızca yüzde yirmi dördü AI destekli pipeline yönetimini. Boşluk tam burada, ve bu sunum o boşluğun içinde duruyor. Kaynak altta: dbt Labs anketi, üç yüz altmış üç katılımcı.

## 19 · Ajanlar neyi yapıyor

`kapsam-haritasi`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Bu slayt 'niye sadece bir konu anlatıyorsun' sorusunun cevabı, o yüzden atlamayın. 1) İlk dört işi okuyun: pipeline üretimi, veri kalitesi izleme, dokümantasyon ve test üretimi, alarm triyajı. 2) Kalan üçü: kök neden analizi, düz cümleden sorgu yani text-to-SQL, ve kırılanı onarma. 3) Sonra demonun yerini işaretleyin: bugün yedincisini canlı göstereceğiz. Ama şunu ekleyin, çünkü sunumun tamamını bir arada tutan cümle bu: yedisinin de altında aynı mekanizma var, ve sunumun geri kalanı o mekanizmayı anlatıyor. Yani tek bir kutuyu değil, kutuların hepsini çalıştıran motoru konuşacağız.

## 20 · Perde II: Nasıl çalışıyor

`perde-2`

Bu slaytta 2 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

İkinci perde. Artık soru neden değil, nasıl. 1) Harita geri geliyor ama bu kez dönüşüm kutusu yanıyor ve yukarıdan bir ok iniyor: ajan buraya bakıyor. Alttaki kural katmanının hâlâ orada durduğunu da gösterin, çünkü onu kaldırmıyoruz. Bu perdede ajanın içini açacağız: döngü, bağlam, doğrulayıcı, hafıza, planlama, iz ve determinizm.

## 21 · Ajan döngüsü

`ajan-dongusu`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Sunumun merkez diyagramı. Yavaş anlatın, çünkü sonraki altı slayt bu diyagramın üzerine katman biniyor. 1) Döngü çiziliyor: model akıl yürütür, araç çağrısı seçer, araç çalışır, sonuç bağlama girer, ve baştan. Bir ajan düşünen bir program değil; çıkış koşulu modelin araç çağırmayı bırakması olan bir döngü. 2) Kesikli kutuyu gösterin: araçlar sizin kodunuz. Ajanın yapabileceği her şey, sizin ona verdiğiniz fonksiyonların toplamıdır, bir fazlası değil. 3) Dört meşru çıkışı okuyun. Amber olan ikisi bu sunumun geri kalanının konusu: doğrulayıcının yeşil yanması ve insan kapısı.

## 22 · Grounding

`grounding`

Bu slaytta 5 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Halüsinasyonu doğru tanımlayın; öğrenciler için en değerli slayt bu olabilir. Model şemayı bilmiyorsa uydurmuyor, en olası şemayı yazıyor, ve en olası şema çoğu zaman sizinkine çok benzediği için hata gözden kaçıyor. 1) Kaynağın altında canlı şema: kod ne diyorsa değil, veritabanı ne diyorsa. 2) Dönüşümün altında lineage: neyin neyi kırdığı. 3) Tablonun altında çalıştırma logu: tahmin değil kanıt. 4) Kapanış: halüsinasyon bir model arızası değil, boş bırakılmış bir bağlam alanı. Çözüm daha akıllı model değil, daha dolu bağlam.

## 23 · Kendi kendini düzeltme

`self-correction`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Sunumun en pratik cümlesi burada. 1) Döngüyü gösterin: üret, doğrula, hatayı oku, yeniden üret. Doğrulayıcı ucuz ve deterministik olmalı, çünkü pahalıysa ajan onu yeterince sık çalıştıramaz. 2) Çıkışı gösterin: iki denemede olmazsa ajan açıklamayla unfixable diyerek temiz çıkar. 3) Somut örneği anlatın: demodaki sistem önce yalnızca SQL parse etmeyi denedi, ama var olmayan bir kolonu okuyan bir view tertemiz parse ediyor. Yani yanlış doğrulayıcı size yeşil ışık verir. Bu yüzden doğrulayıcı gerçek derlemeye yükseltildi. Kapanış cümlesi: dbt compile'ınız yoksa, ajanınız da yoktur.

## 24 · Hafıza

`hafiza`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Hafıza sezgiye aykırı bir takas. Kaynak altta duruyor ve birinci taraf olduğunu belirtin; Anthropic kendi iç ajanı hakkında yazmış. 1) Bakımlı bağlamla doğruluk yüzde doksan beş. 2) Bakımsız bırakıldıktan bir ay sonra yaklaşık yüzde altmış beşe düşüyor. Hafıza hızlandırır ve tam olarak aynı oranda eskitir: dün doğru olan cevabı, bugün değişmiş bir sistem hakkında aynı özgüvenle tekrarlar. 3) Demodaki tercihi söyleyin: hafıza bilerek yok, her olay sıfırdan teşhis ediliyor.

## 25 · Ajana ne kadar yetki verilir

`otonomi-siniri`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Bu slayt iki eski slaytın birleşimi, o yüzden tek bir fikirde toplayın: otonomi bir övgü değil, bir hasar ölçüsü. 1) Geniş yetkili ajan ne yapacağına kendisi karar verir, ve yanılırsa nereye dokunacağı önceden bilinemez. 2) Dar yetkili ajan bilinen bir problemin çözümünü üretir, adımları önceden bellidir, yanılırsa hasarın sınırı da bellidir. Demodaki sistem bilerek burada duruyor. 3) Sınırın nasıl konduğunu okuyun: onaysız yazma yok, derlenmeyen öneri sunulmaz, bütçe aşılmaz, her koşu iz bırakır. Kritik cümle şu: dördü de modelin ne cevap verdiğinden bağımsız olarak doğrulanabilir. Bu yüzden ajanın testi, modelin testi değildir.

## 26 · Gözlemlenebilirlik ve eval

`gozlemlenebilirlik`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

1) Trace'i olmayan ajan hata ayıklanamaz, eval'i olmayan ajan iyileştirilemez; ikisi de yoksa elinizde bir sistem değil, iyi giden bir demo vardır. 2) Sonra kendi hatanızı anlatın, çünkü bu hikaye sizi dürüst gösterir: spesifikasyon ajanın takılmasını açıkça yasaklıyordu, test yeşildi, ve ajan her geçişte doksan saniye takılıyordu. Çünkü test ajan hayatta kaldı mı diye soruyordu, ne kadar sürdü diye değil. 3) Kapanış: eval'iniz sorduğunuz soru kadar iyidir.

## 27 · Perde III: Ne yapmalı

`perde-3`

Bu slaytta 2 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Üçüncü perde ve tonu değiştirin: savunmadan değerlendirmeye geçiyorsunuz. 1) Harita son kez geliyor, bu kez dönüşümün üstünde insan onay kapısı duruyor. Bu perdede riskleri, guardrail'ları ve nereden başlanacağını konuşacağız, sonra da o kapıyı canlı göreceksiniz.

## 28 · Piyasa nerede duruyor

`hype-cycle`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

1) Eğri çiziliyor ve tepe noktasında duruyoruz: Gartner ilk bağımsız Agentic AI Hype Cycle'ını nisan iki bin yirmi altıda yayınladı, konum Peak of Inflated Expectations. 2) Eğrinin devamını gösterin: hayal kırıklığı çukuru ve verimlilik platosu daha önümüzde. 3) Yüzde kırk rakamını verin ve kritik nüansı söyleyin: iptal sebepleri model yetersizliği değil; maliyet, belirsiz iş değeri ve zayıf risk kontrolü. Yani hepsi düzeltilebilir yönetim problemleri.

## 29 · Ölçülmüş sonuçlar

`olculmus-sonuclar`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Üç rakam. 1) LinkedIn SQL Bot en dürüst kaynak, çünkü kendi zayıf rakamını kendisi yayınlamış: yanıtların yalnızca yüzde elli üçü teknik olarak doğru, ama kullanıcıların yüzde doksan beşi geçer notu veriyor. 2) Ve en çok kullanılan özellik sorgu üretimi değil, sorgu patlayınca çıkan Fix with AI butonu, oturumların yüzde sekseni. Yani değer sıfırdan yazmakta değil, kırılanı onarmakta. Bu, birazdan göreceğiniz demonun tam olarak yaptığı şey. 3) Pinterest'te ilk seferde kabul oranı ikiye katlanmış ama hâlâ yarısından azı.

## 30 · METR randomize deneyi

`metr`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Acele etmeyin. Kaynak altta duruyor: METR'in randomize kontrollü deneyi. 1) Deneyimli geliştiriciler AI ile yüzde on dokuz daha yavaş çıkmış. 2) Asıl bulgu ikinci rakam: aynı geliştiriciler yüzde yirmi hızlandıklarını sanıyordu. 3) Çerçeveyi verin: bu, ajan kullanmayın demek değil; kendi algıladığınız kazancı kanıt sanmayın demek. Sezgi burada sistematik olarak yanılıyor ve yanılma yönü hep aynı: iyimser.

## 31 · Beş risk

`bes-risk`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Hızlı gidin, bunlar sezgisel. 1) Üretilen kod derlenebilir ve yine de yanlış olabilir. 2) Ajan hassas veriye, yasak olduğunu bilmediği için değil, kimse engellemediği için dokunur. 3) Maliyet olay başına değil döngü başına birikir; bu yüzden tahminler iki üç katı aşılabiliyor. 4) Trace yoksa geçen sefer neden öyle yaptı sorusunun cevabı yoktur. 5) Ve insan onayı geçici bir çözüm değil, sektörün bugün fiilen durduğu yer.

## 32 · Guardrail nereye konur

`guardrail`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Guardrail prompt'ta değil IAM'de yaşar. Kişisel bilgi sütunlarını sorgulama kuralı bir erişim politikasında olmalı, prompt penceresinde değil, çünkü prompt penceresindeki kural ikna edilebilir bir kuraldır. 1) Explain and Confirm: ajan taslağı ve gerekçesini sunar, insan onaylar. En yavaş, en güvenli. 2) Override: ajan hareket eder, insan veto edebilir; geri alınabilir işler için. 3) Sandbox and Deploy: ajan izole bir dalda test eder, sonuç incelenip taşınır.

## 33 · Kural katmanı duruyor

`guardrail-katman`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Salondaki kural bazlı ekiplere verdiğiniz asıl cevap burada, o yüzden tane tane konuşun. 1) Alttaki kural katmanını gösterin: bilineni yakalar ve yerinde kalır. Kimse bunu kaldırmıyor. 2) Üstteki ajan katmanını gösterin: kuralın yazılmadığı yeri karşılar. 3) Kapanışı söyleyin: son on yılda yazdığınız testler çöpe gitmiyor, tam tersine ajanın doğrulayıcısı oluyor. Deterministik kararlar kural motorunda kalır.

## 34 · Olgunluk merdiveni

`merdiven`

Bu slaytta 7 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Beş basamak, ve her basamakta tek soru: burada en kötü sonuç nedir? 1) İzle: yalnızca okur, en kötü sonuç kötü bir öneri. 2) Öner: teşhis ve düzeltme adayı üretir ama uygulamaz, en kötü sonuç boşa giden bir inceleme. 3) Sandbox: izole bir dalda uygular, en kötü sonuç bozuk bir dal. 4) Onayla uygula: insan onayından sonra üretime yazar; en kötü sonuç sizin onayladığınız bir hata. Demoda göreceğiniz sistem burada. 5) Otonom: onay kapısı yok, en kötü sonuç sessiz bir hata. 6) Kapanış: çoğu ekip iki ve üçte ciddi değer buluyor ve beşe hiç geçmesi gerekmiyor.

## 35 · Nereden başlanır

`nereden-baslanir`

Bu slaytta 5 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Salondan çıkarken akıllarında kalmasını istediğiniz pratik slayt bu. 1) Dokümantasyon ve test üretimi: geri alınabilir ve kalitesi anında görülebilir. 2) Alarm triyajı: bu alarm neden çıktı, ilgili mi sorusunu ön cevaplar, insan kararı yerinde kalır. 3) Kök neden ön analizi: lineage'i gezip hipotez listesi çıkarır, yanılırsa maliyeti bir dakikalık okuma. 4) Uyarıyı yapın: ajanın vaadi daha akıllı alarm olamaz, çünkü otomatik anomali tespiti de vakaların çoğunda yanlış alarm üretiyor. Vaat, teşhis ve doğrulama döngüsünün kendisidir.

## 36 · Ekosistem haritası

`ekosistem`

Bu slaytta 3 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Tıklanabilir kutucuk: "Detaylı karşılaştırma tablosu" → ekosistem-detay

1) Altı kategoriyi hızlıca geçin ve ürün ismi ezberletmeye çalışmayın. Kategoriler kalıyor, isimler değişiyor. 2) Sonra bunu açıkça söyleyin: bu slayt altı ay sonra yanlış olacak. Sadece bu sunumu hazırlarken altı iddia çürüdü; bir satıcı veri mühendisliğinden tamamen pivot etmişti, bir ürünün adı değişmişti, iki ürünün olgunluk seviyesi yanlıştı. Detaylı tabloyu isteyen olursa sağdaki kutucuğa tıklayıp açabilirsiniz.

## 37 · Ne ölçülür

`olcum`

Bu slaytta 3 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

1) Dört metriği okuyun: öneri kabul oranı, incelemede red oranı, olay başına token maliyeti, olay başına çözüm süresi. Ajanlı ve ajansız aynı olay sınıfında karşılaştırın. 2) Üç eşiği verin. Red oranı düşüyorsa otonomiyi bir basamak artırın. Token maliyeti tahmini iki katı aşarsa kapsamı daraltın. Yönetişim sahibi ya da net bir ROI metriği yoksa production'a hiç geçmeyin. Sonuncusu en çok ihmal edilen madde, üstünde bir saniye fazla durun.

## 38 · Kanıt boşluğu

`kanit-boslugu`

Bu slaytta 3 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Kavram bölümünün dürüst kapanışı. 1) Zinciri soldan sağa okuyun: şema kayması, teşhis, öneri, derleme kanıtı, insan onayı, yeşil. Amber olan kutuyu gösterin: sektör orada duruyor. 2) Sonra şunu söyleyin: bu zincirin tamamını üretimde çalıştırıp ölçtüğünü yayınlayan bir şirket bulamadık. Parçaları yayınlanmış, tamamı ve ölçümü yayınlanmamış. Bunu bir zayıflık gibi değil bir konum gibi söyleyin, ve devam edin: şimdi size tam olarak orayı göstereceğim.

## 39 · Demo köprüsü

`demo-koprusu`

Bu slaytta 5 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Demoya geçiş. Haritayı son kez kullanıyorsunuz. 1) Kaynakta bir kolonun adı değişiyor ve dönüşüm kırılıyor. Veri hâlâ iyi görünüyor, kimse bildirmiyor. 2) Ajan devreye giriyor: canlı kaynağı ve transformation'ı okuyup teşhis koyuyor, düzeltmeyi üretiyor ve derleyerek kanıtlıyor. 3) Ve duruyor. Onay bekliyor. 4) Merdivendeki yeri söyleyin: dördüncü basamak, öner artı onaylanmış değişiklik. Otonom değil, ve bu bir eksiklik değil bir tercih.

## 40 · Demoda ne var, ne yok

`demo-ne-var-ne-yok`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Bu slayt sizi soru turunda kurtaracak, atlamayın. 1) Olmayanlar: uzun vadeli hafıza yok, her olay sıfırdan teşhis ediliyor. Planlama yok, adımlar sabit bir graf, yani planlayıcı uygulayıcı ayrımının hasar yarıçapı küçük olan yarısı. MCP yok, Airflow ve Postgres'e sıradan istemci kütüphaneleriyle ulaşıyor; iki aracı olan tek bir ajan için MCP gösterilebilir karşılığı olmadan iki servis ekliyordu. Üçünün de yazılı gerekçesi var. 2) Olanlar: canlı şemadan kanıt, gerçek derlemeyle doğrulama, iki kez kendini düzeltme, çözemezse açıklamalı kapanış, insan onay kapısı, uçtan uca trace ve olay başına bir centin altında maliyet. 3) Kapanış: bunlar eksiklik değil, merdivende bilerek bir basamak geride durmak. Kapıyı kaldırmak için gereken her şey mevcut; eksik olan güven, ve güven de önce bu basamakta çalıştırarak kazanılıyor.

## 41 · Ne izlemenizi istiyorum

`demo-ne-izleyin`

Bu slaytta 2 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Tek cümle söyleyin ve ekranı bırakın. 1) İzlemenizi istediğim tek bir an var: ajanın durduğu ve sizden onay beklediği an. Çünkü bu sistemin zor kısmı düzeltmeyi bulmak değil, bulduktan sonra kendiliğinden uygulamamak. Sonra demoya geçin.

## 42 · Kaynakça

`kaynakca`

Bu slaytta 4 adımlı açılım var: her Next tuşu bir maddeyi açıyor.

Tıklanabilir kutucuk: "Sözlük: sunumdaki terimler" → sozluk

Kapanış slaytı, ekranda bırakıp soruları alın. 1) Hakemli kaynaklar. 2) Satıcı kaynakları, hepsi etiketli. 3) Slaytlar, konuşmacı notları ve kaynakçanın tamamı sunum reposunda; hazırlarken kullanmadığım, çok dolaşan ama birincil kaynağı doğrulanamayan istatistiklerin gerekçeli listesi de orada.

---

# Ek: Ekosistem: detaylı karşılaştırma

Ana hatta değil. Yalnızca bir kutucuğa tıklanırsa açılıyor.

## E1 · Ek: ekosistem detay tablosu

`ekosistem-detay-tablo`

Yalnızca soru gelirse açın. Olgunluk sütunu yirmi bir ağustos iki bin yirmi altı itibarıyla doğrulandı. En çok sorulan iki satır: dbt Developer Agent hâlâ preview, ve BigQuery ajanı GA olduğu hâlde pipeline'ı kendisi çalıştıramıyor, kullanıcı onayı şart.

---

# Ek: Kullanmadığım istatistikler

Ana hatta değil. Yalnızca bir kutucuğa tıklanırsa açılıyor.

## E1 · Ek: kullanmadığım istatistikler

`istatistik-hijyeni-liste`

Bu slayt bir dipnot değil, bir yöntem beyanı. Her satır, hazırlık sırasında birincil kaynağını arayıp bulamadığım ya da yanlış aktarıldığını gördüğüm bir istatistik. En öğretici olanı IBM örneği: her yerde dolaşan yüzde elli bir alarm hiç incelenmiyor rakamı raporun içinde yok, rapor yüzde kırk dokuzuna ulaşılabiliyor diyor. Elli bir, yüzden kırk dokuzun çıkarılmışı. Kapanışta şunu söyleyin: bir istatistiğin çok tekrarlanması, doğrulanmış olmasıyla aynı şey değildir.

---

# Ek: Sözlük

Ana hatta değil. Yalnızca bir kutucuğa tıklanırsa açılıyor.

## E1 · Ek: sözlük

`sozluk`

Yalnızca soru gelirse açın, ya da sunum başında 'takıldığınız bir kelime olursa burada' diye bir kez gösterin. On iki terim, hepsi tek cümle. En sık sorulanlar lineage ve şema kayması.
