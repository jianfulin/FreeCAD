<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="tr" sourcelanguage="en">
  <context>
    <name>AttachmentEditor</name>
    <message>
      <location filename="Commands.py" line="79"/>
      <source>Attachment...</source>
      <translation>Eklenti...</translation>
    </message>
    <message>
      <location filename="Commands.py" line="83"/>
      <source>Edit attachment of selected object.</source>
      <translation>Seçili nesnenin ekini düzenleyin.</translation>
    </message>
  </context>
  <context>
    <name>Part_CompoundFilter</name>
    <message>
      <location filename="_CommandCompoundFilter.py" line="57"/>
      <source>Compound Filter</source>
      <translation>Bileşik Filtre</translation>
    </message>
    <message>
      <location filename="_CommandCompoundFilter.py" line="67"/>
      <source>Filter out objects from a selected compound by characteristics like volume,
area, or length, or by choosing specific items.
If a second object is selected, it will be used as reference, for example,
for collision or distance filtering.</source>
      <translation>Hacim, alan veya uzunluk gibi özelliklere göre ya da belirgin ögeleri seçerek, seçilen birleşikten nesneleri süz.
Eğer ikinci bir nesne seçiliyse bu, başvuru ögesi olarak kullanılacak. Örneğin çakışma veya mesafe süzme için.</translation>
    </message>
  </context>
  <context>
    <name>Part_ExplodeCompound</name>
    <message>
      <location filename="_CommandExplodeCompound.py" line="56"/>
      <source>Explode compound</source>
      <translation>Bileşiği patlat</translation>
    </message>
    <message>
      <location filename="_CommandExplodeCompound.py" line="62"/>
      <source>Split up a compound of shapes into separate objects.
It will create a 'Compound Filter' for each shape.</source>
      <translation>Şekiller birleşimini ayrı nesneler halinde ayır.
Bu işlem her bir şekil için 'Birleşim Süzgeci' oluşturacak.</translation>
    </message>
  </context>
  <context>
    <name>Part_JoinConnect</name>
    <message>
      <location filename="JoinFeatures.py" line="197"/>
      <source>Connect objects</source>
      <translation>Nesneleri bağla</translation>
    </message>
    <message>
      <location filename="JoinFeatures.py" line="202"/>
      <source>Fuses objects, taking care to preserve voids.</source>
      <translation>Boşlukları korumaya özen göstererek nesneleri birleştirir.</translation>
    </message>
  </context>
  <context>
    <name>Part_JoinCutout</name>
    <message>
      <location filename="JoinFeatures.py" line="388"/>
      <source>Cutout for object</source>
      <translation>Nesne için kesip biçimle</translation>
    </message>
    <message>
      <location filename="JoinFeatures.py" line="393"/>
      <source>Makes a cutout in one object to fit another object.</source>
      <translation>Bir nesneyi başka bir nesneye sığdırmak için bir kesim yapar.</translation>
    </message>
  </context>
  <context>
    <name>Part_JoinEmbed</name>
    <message>
      <location filename="JoinFeatures.py" line="293"/>
      <source>Embed object</source>
      <translation>Yerleştirilen nesne</translation>
    </message>
    <message>
      <location filename="JoinFeatures.py" line="298"/>
      <source>Fuses one object into another, taking care to preserve voids.</source>
      <translation>Boşlukları korumaya özen göstererek bir nesneyi diğerine birleştirir.</translation>
    </message>
  </context>
  <context>
    <name>Part_SplitFeatures</name>
    <message>
      <location filename="SplitFeatures.py" line="188"/>
      <source>Boolean fragments</source>
      <translation>Mantıksal (Boolean) parçalar</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="197"/>
      <source>Create a 'Boolean Fragments' object from two or more selected objects,
or from the shapes inside a compound.
This is a boolean union which is then sliced at the intersections
of the original shapes.
A 'Compound Filter' can be used to extract the individual slices.</source>
      <translation>Seçilen bir veya daha fazla nesneden ya da bir birleşik içindeki şekillerden 'Mantıksal Parçalar' nesnesi oluştur.
Bu mantıksal bir birleşmedir; daha sonra orijinal şekillerin kesişimlerinde bölünür.
Bölünen parçaları elde etmek için 'Birleşik Süzgeci' kullanılabilir.</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="347"/>
      <source>Slice to compound</source>
      <translation>Bileşiği dilimle</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="354"/>
      <source>Slice a selected object by using other objects as cutting tools.
The resulting pieces will be stored in a compound.
A 'Compound Filter' can be used to extract the individual slices.</source>
      <translation>Kesme aracı olarak diğer nesneleri kullanıp seçilen nesneyi bölümleyin.
Sonuçta oluşan parçalar bir birleşikte depolanacaktır.
Bölümleri nesneden çıkarmak için 'Birleşik Filtresi' kullanılabilir.</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="379"/>
      <source>Slice apart</source>
      <translation>Parçalara ayır</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="385"/>
      <source>Slice a selected object by other objects, and split it apart.
It will create a 'Compound Filter' for each slice.</source>
      <translation>Seçilen bir nesneyi diğer nesnelerle dilimleyin ve ayırın.
Her dilim için bir 'Bileşik Filtre' oluşturacaktır.</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="529"/>
      <source>Boolean XOR</source>
      <translation>Mantıksal XOR</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="537"/>
      <source>Perform an 'exclusive OR' boolean operation with two or more selected objects,
or with the shapes inside a compound.
This means the overlapping volumes of the shapes will be removed.
A 'Compound Filter' can be used to extract the remaining pieces.</source>
      <translation>İki veya daha fazla seçilen nesne ile ya da bir birleşik içerisindeki şekillerle 'özel bir OR' mantıksal işlemi gerçekleştirin.
Bu; şekillerin örtüşen hacimleri kaldırılacak anlamına gelir.
Kalan parçaları çıkarmak için 'Birleşik Filtresi' kullanılabilir.</translation>
    </message>
  </context>
  <context>
    <name>Part_Tube</name>
    <message>
      <location filename="CommandShapes.py" line="44"/>
      <source>Create tube</source>
      <translation>Boru oluştur</translation>
    </message>
    <message>
      <location filename="CommandShapes.py" line="50"/>
      <source>Creates a tube</source>
      <translation>Bir boru oluşturur</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="CommandShapes.py" line="52"/>
      <source>Create tube</source>
      <translation>Boru oluştur</translation>
    </message>
    <message>
      <location filename="../../ViewProvider.cpp" line="57"/>
      <location filename="../../ViewProviderPrimitive.cpp" line="66"/>
      <location filename="../../ViewProviderPrimitive.cpp" line="75"/>
      <source>Edit %1</source>
      <translation>%1'i düzenle</translation>
    </message>
    <message>
      <location filename="../../AppPartGui.cpp" line="221"/>
      <location filename="../../AppPartGui.cpp" line="222"/>
      <location filename="../../AppPartGui.cpp" line="223"/>
      <source>Part design</source>
      <translation>Parça tasarımı</translation>
    </message>
    <message>
      <location filename="../../AppPartGui.cpp" line="224"/>
      <location filename="../../AppPartGui.cpp" line="225"/>
      <source>Import-Export</source>
      <translation>İçe-Dışa Aktar</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="286"/>
      <location filename="../../Command.cpp" line="381"/>
      <location filename="../../Command.cpp" line="481"/>
      <location filename="../../Command.cpp" line="900"/>
      <location filename="../../Command.cpp" line="957"/>
      <location filename="../../Command.cpp" line="2097"/>
      <source>Wrong selection</source>
      <translation>Yanlış seçim</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="287"/>
      <location filename="../../Command.cpp" line="958"/>
      <source>Select two shapes please.</source>
      <translation>İki şekli seçin lütfen.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="296"/>
      <location filename="../../Command.cpp" line="396"/>
      <location filename="../../Command.cpp" line="496"/>
      <source>Non-solids selected</source>
      <translation>Katılar seçilmedi</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="297"/>
      <location filename="../../Command.cpp" line="397"/>
      <location filename="../../Command.cpp" line="497"/>
      <source>The use of non-solids for boolean operations may lead to unexpected results.
Do you want to continue?</source>
      <translation>Boole işlemleri için katı olmayanların kullanılması beklenmedik sonuçlara neden olabilir.
Devam etmek istiyor musun?</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="382"/>
      <source>Select two shapes or more, please. Or, select one compound containing two or more shapes to compute common between.</source>
      <translation>İki şekil seçin veya daha fazla, lütfen. Veya ortak arasında hesaplamak için iki veya daha fazla şekil içeren bir bileşik seçin.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="482"/>
      <source>Select two shapes or more, please. Or, select one compound containing two or more shapes to be fused.</source>
      <translation>İki şekil seçin veya daha fazla, lütfen. Veya kaynaştırılacak iki veya daha fazla şekil içeren bir bileşik seçin.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="901"/>
      <source>Select one shape or more, please.</source>
      <translation>Bir şekil seçin veya daha fazla, lütfen.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1113"/>
      <source>All CAD Files</source>
      <translation>Tüm CAD Dosyaları</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1118"/>
      <source>All Files</source>
      <translation>Tüm Dosyalar</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2098"/>
      <source>You have to select either two edges or two wires.</source>
      <translation>İki kenarı veya iki çizgiyi seçtiniz.</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="128"/>
      <source>Sewing Tolerance</source>
      <translation>Dikiş Toleransı</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="129"/>
      <source>Enter tolerance for sewing shape:</source>
      <translation>Dikiş şekli toleransını girin:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="73"/>
      <location filename="../../TaskAttacher.cpp" line="109"/>
      <source>No reference selected</source>
      <translation>Seçilen referans yok</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="82"/>
      <location filename="../../TaskCheckGeometry.cpp" line="86"/>
      <source>Face</source>
      <translation>Yüz</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="85"/>
      <location filename="../../TaskCheckGeometry.cpp" line="88"/>
      <source>Edge</source>
      <translation>Kenar</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="88"/>
      <location filename="../../TaskCheckGeometry.cpp" line="89"/>
      <source>Vertex</source>
      <translation type="unfinished">Vertex</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="82"/>
      <source>Compound</source>
      <translation>Bileşik</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="83"/>
      <source>Compound Solid</source>
      <translation>Bileşik Katı</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="84"/>
      <source>Solid</source>
      <translation>Katı</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="85"/>
      <source>Shell</source>
      <translation>Kabuk</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="87"/>
      <source>Wire</source>
      <translation>Yay</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="90"/>
      <source>Shape</source>
      <translation>Şekil</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="105"/>
      <source>No Error</source>
      <translation>Hata yok</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="106"/>
      <source>Invalid Point On Curve</source>
      <translation>Eğri Üzerindeki Geçersiz Nokta</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="107"/>
      <source>Invalid Point On Curve On Surface</source>
      <translation>Yüzey Üzerindeki Eğri Üzerindeki Geçersiz Nokta</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="108"/>
      <source>Invalid Point On Surface</source>
      <translation>Yüzey Üzerinde Geçersiz Nokta</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="109"/>
      <source>No 3D Curve</source>
      <translation>3D Eğri Yok</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="110"/>
      <source>Multiple 3D Curve</source>
      <translation>Birden fazla 3D Eğri</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="111"/>
      <source>Invalid 3D Curve</source>
      <translation>Geçersiz 3D Eğri</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="112"/>
      <source>No Curve On Surface</source>
      <translation>Yüzey Üzerinde Eğri Yok</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="113"/>
      <source>Invalid Curve On Surface</source>
      <translation>Yüzey Üzerinde Geçersiz Eğri</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="114"/>
      <source>Invalid Curve On Closed Surface</source>
      <translation>Kapalı Yüzey Üzerinde Geçersiz Eğri</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="115"/>
      <source>Invalid Same Range Flag</source>
      <translation>Geçersiz Aynı Aralık İşareti</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="116"/>
      <source>Invalid Same Parameter Flag</source>
      <translation>Geçersiz Aynı Parametre Bayrağı</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="117"/>
      <source>Invalid Degenerated Flag</source>
      <translation>Geçersiz Dejenere Bayrak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="118"/>
      <source>Free Edge</source>
      <translation>Serbest kenar</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="119"/>
      <source>Invalid MultiConnexity</source>
      <translation>Geçersiz Çoklu Bağımlık</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="120"/>
      <source>Invalid Range</source>
      <translation>Geçersiz Aralık</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="121"/>
      <source>Empty Wire</source>
      <translation>Boş tel</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="122"/>
      <source>Redundant Edge</source>
      <translation>Yedekli Kenar</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="123"/>
      <source>Self Intersecting Wire</source>
      <translation>Kendiliğinden Kesişen Tel</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="124"/>
      <source>No Surface</source>
      <translation>Yüz Yok</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="125"/>
      <source>Invalid Wire</source>
      <translation>Geçersiz Tel</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="126"/>
      <source>Redundant Wire</source>
      <translation>Yedek Tel</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="127"/>
      <source>Intersecting Wires</source>
      <translation>Kesişen Teller</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="128"/>
      <source>Invalid Imbrication Of Wires</source>
      <translation>Kabloların Geçersiz İmbrication</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="129"/>
      <source>Empty Shell</source>
      <translation>Boş kabuk</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="130"/>
      <source>Redundant Face</source>
      <translation>Yedek Yüz</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="131"/>
      <source>Unorientable Shape</source>
      <translation>Kayıtsız Şekil</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="132"/>
      <source>Not Closed</source>
      <translation>Kapalı değil</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="133"/>
      <source>Not Connected</source>
      <translation>Bağlı değil</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="134"/>
      <source>Sub Shape Not In Shape</source>
      <translation>Şekil Alt Değil Şekil Değil</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="135"/>
      <source>Bad Orientation</source>
      <translation>Kötü Oryantasyon</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="136"/>
      <source>Bad Orientation Of Sub Shape</source>
      <translation>Alt Şekilın Kötü Yönlendirilmesi</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="137"/>
      <source>Invalid Tolerance Value</source>
      <translation>Geçersiz Tolerans Değeri</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="138"/>
      <source>Check Failed</source>
      <translation>Kontrol Edilemedi</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="148"/>
      <source>No Result</source>
      <translation>Sonuç yok</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="152"/>
      <source>Out Of Enum Range:</source>
      <translation type="unfinished">Out Of Enum Range:</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="164"/>
      <source>BOPAlgo CheckUnknown</source>
      <translation>BOPAlgo BilinmeyeniKontrolEdin</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="165"/>
      <source>BOPAlgo BadType</source>
      <translation>BOPAlgo KötüTip</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="166"/>
      <source>BOPAlgo SelfIntersect</source>
      <translation>BOPAlgo KendiniKesiş</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="167"/>
      <source>BOPAlgo TooSmallEdge</source>
      <translation>BOPAlgo ÇokKüçükKenar</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="168"/>
      <source>BOPAlgo NonRecoverableFace</source>
      <translation>BOPAlgo KurtarılamayanYüz</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="169"/>
      <source>BOPAlgo IncompatibilityOfVertex</source>
      <translation>BOPAlgo GeçilmezlikOfVereksleri</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="170"/>
      <source>BOPAlgo IncompatibilityOfEdge</source>
      <translation>BOPAlgo UyuşmazlıkDefteri</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="171"/>
      <source>BOPAlgo IncompatibilityOfFace</source>
      <translation>BOPAlgo UyuşmazlıkFonu</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="172"/>
      <source>BOPAlgo OperationAborted</source>
      <translation>BOPAlgo OperasyonuKapalı</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="173"/>
      <source>BOPAlgo GeomAbs_C0</source>
      <translation>BOPAlgo GeomAbs_C0</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="174"/>
      <source>BOPAlgo_InvalidCurveOnSurface</source>
      <translation>BOPAlgo_YüzeyÜzerindeGeçersizEğri</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="175"/>
      <source>BOPAlgo NotValid</source>
      <translation>BOPAlgo Geçersiz</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="464"/>
      <location filename="../../TaskCheckGeometry.cpp" line="758"/>
      <source>Invalid</source>
      <translation>Geçersiz</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="631"/>
      <location filename="../../TaskDimension.cpp" line="1769"/>
      <source>Selections</source>
      <translation>Seçimler</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="638"/>
      <location filename="../../TaskDimension.cpp" line="1776"/>
      <source>Control</source>
      <translation type="unfinished">Control</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="1481"/>
      <source>Reset selection</source>
      <translation>Seçimi sıfırla</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="1485"/>
      <source>Toggle direct dimensions</source>
      <translation>Doğrudan ölçülere geçiş yap</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="1490"/>
      <source>Toggle orthogonal dimensions</source>
      <translation>Dikey ölçülere geçiş yap</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="1495"/>
      <source>Clear all dimensions</source>
      <translation>Tüm ölçüleri temizle</translation>
    </message>
    <message>
      <location filename="../../ViewProviderExt.cpp" line="977"/>
      <source>Set colors...</source>
      <translation>Renkleri ayarla...</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="79"/>
      <source>Edit mirror plane</source>
      <translation>Ayna düzlemini düzenle</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="279"/>
      <source>Edit fillet edges</source>
      <translation>Dolgu kenarlarını düzenleme</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="383"/>
      <source>Edit chamfer edges</source>
      <translation>Kenarların pahını düzenle</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="528"/>
      <source>Edit offset</source>
      <translation>Ofseti düzenle</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="614"/>
      <source>Edit thickness</source>
      <translation>Kalınlığı düzenleme</translation>
    </message>
    <message>
      <location filename="../../ViewProviderSpline.cpp" line="87"/>
      <location filename="../../ViewProviderSpline.cpp" line="339"/>
      <source>Show control points</source>
      <translation>Kontrol noktalarını göster</translation>
    </message>
    <message>
      <location filename="../../ViewProviderAttachExtension.cpp" line="116"/>
      <source>Attachment editor</source>
      <translation type="unfinished">Attachment editor</translation>
    </message>
  </context>
  <context>
    <name>Attacher</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="311"/>
      <source>Any</source>
      <comment>Attacher reference type</comment>
      <translation>Herhangi biri</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="312"/>
      <source>Vertex</source>
      <comment>Attacher reference type</comment>
      <translation type="unfinished">Vertex</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="313"/>
      <source>Edge</source>
      <comment>Attacher reference type</comment>
      <translation>Kenar</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="314"/>
      <source>Face</source>
      <comment>Attacher reference type</comment>
      <translation>Yüz</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="316"/>
      <source>Line</source>
      <comment>Attacher reference type</comment>
      <translation>Çizgi</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="317"/>
      <source>Curve</source>
      <comment>Attacher reference type</comment>
      <translation>Eğri</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="318"/>
      <source>Circle</source>
      <comment>Attacher reference type</comment>
      <translation>Daire</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="319"/>
      <source>Conic</source>
      <comment>Attacher reference type</comment>
      <translation>Konik</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="320"/>
      <source>Ellipse</source>
      <comment>Attacher reference type</comment>
      <translation>Elips</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="321"/>
      <source>Parabola</source>
      <comment>Attacher reference type</comment>
      <translation>Parabol</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="322"/>
      <source>Hyperbola</source>
      <comment>Attacher reference type</comment>
      <translation>Hiperbol</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="324"/>
      <source>Plane</source>
      <comment>Attacher reference type</comment>
      <translation>Düzlem</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="325"/>
      <source>Sphere</source>
      <comment>Attacher reference type</comment>
      <translation>Küre</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="326"/>
      <source>Revolve</source>
      <comment>Attacher reference type</comment>
      <translation>Döndür</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="327"/>
      <source>Cylinder</source>
      <comment>Attacher reference type</comment>
      <translation>Silindir</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="328"/>
      <source>Torus</source>
      <comment>Attacher reference type</comment>
      <translation>Halka</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="329"/>
      <source>Cone</source>
      <comment>Attacher reference type</comment>
      <translation>Koni</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="331"/>
      <source>Object</source>
      <comment>Attacher reference type</comment>
      <translation>Nesne</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="332"/>
      <source>Solid</source>
      <comment>Attacher reference type</comment>
      <translation>Katı</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="333"/>
      <source>Wire</source>
      <comment>Attacher reference type</comment>
      <translation>Yay</translation>
    </message>
  </context>
  <context>
    <name>Attacher0D</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="268"/>
      <source>Deactivated</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Devre dışı</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="269"/>
      <source>Attachment is disabled. Point can be moved by editing Placement property.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Ataşman devre dışı. Yerleşim düzenini düzenleyerek nokta taşınabilir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="271"/>
      <source>Object's origin</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Nesnenin menşei</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="272"/>
      <source>Point is put at object's Placement.Position. Works on objects with placements, and ellipse/parabola/hyperbola edges.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Nokta nesnenin Yerleşim Yerine konur. Yerleşimler ve elips / parabol / köşeli köşeli nesneler üzerinde çalışır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="274"/>
      <source>Focus1</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Odak1</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="275"/>
      <source>Focus of ellipse, parabola, hyperbola.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Elips, parabol, hiperbola odaklan.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="277"/>
      <source>Focus2</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Odak2</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="278"/>
      <source>Second focus of ellipse and hyperbola.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>İkinci elips ve hiperbola odaklanma.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="280"/>
      <source>On edge</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Sınırda</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="281"/>
      <source>Point is put on edge, MapPathParameter controls where. Additionally, vertex can be linked in for making a projection.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Nokta koyar, MapPathParameter nerede kontrol eder. Buna ek olarak, vertex bir projeksiyon yapmak için bağlanabilir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="283"/>
      <source>Center of curvature</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Eğrilik merkezi</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="284"/>
      <source>Center of osculating circle of an edge. Optional vertex link defines where.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Bir kenarın osculating daire merkezi. Optimal 頂tex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="286"/>
      <source>Center of mass</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Kitlesel merkez kullanın</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="287"/>
      <source>Center of mass of all references (equal densities are assumed).</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Tüm referansların kütle merkezi (eşit yoğunluklar varsayılır).</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="289"/>
      <source>Intersection</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Kesişim</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="290"/>
      <source>Not implemented</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Uygulanmadı</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="292"/>
      <source>Vertex</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation type="unfinished">Vertex</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="293"/>
      <source>Put Datum point coincident with another vertex.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Datum noktasını başka bir vertex ile aynı yerde tutun.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="295"/>
      <source>Proximity point 1</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Proximity Mine	</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="296"/>
      <source>Point on first reference that is closest to second reference.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Datum noktasını başka bir vertex ile aynı yerde tutun.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="298"/>
      <source>Proximity point 2</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Proximity Mine	</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="299"/>
      <source>Point on second reference that is closest to first reference.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Datum noktasını başka bir vertex ile aynı yerde tutun.</translation>
    </message>
  </context>
  <context>
    <name>Attacher1D</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="199"/>
      <source>Deactivated</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Devre dışı</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="200"/>
      <source>Attachment is disabled. Line can be moved by editing Placement property.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Ataşman devre dışı. Satır, Yerleşim özelliğini düzenleyerek taşınabilir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="202"/>
      <source>Object's X</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Nesneler</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="203"/>
      <location filename="../../AttacherTexts.cpp" line="209"/>
      <source>Line is aligned along local X axis of object. Works on objects with placements, and ellipse/parabola/hyperbola edges.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Çizgi, nesnenin yerel X ekseni boyunca hizalanır. Yerleşimler ve elips / parabol / köşeli köşeli nesneler üzerinde çalışır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="205"/>
      <source>Object's Y</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Nesneler</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="206"/>
      <source>Line is aligned along local Y axis of object. Works on objects with placements, and ellipse/parabola/hyperbola edges.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Çizgi, nesnenin yerel Y ekseni boyunca hizalanır. Yerleşimler ve elips / parabol / köşeli köşeli nesneler üzerinde çalışır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="208"/>
      <source>Object's Z</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Nesneler</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="211"/>
      <source>Axis of curvature</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Eğrilik Ekseni</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="212"/>
      <source>Line that is an axis of osculating circle of curved edge. Optional vertex defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Eğrisel kenarın osculating dairevi ekseni olan çizgi. İsteğe bağlı vertex nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="214"/>
      <source>Directrix1</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Directrix1</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="215"/>
      <source>Directrix line for ellipse, parabola, hyperbola.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Elips, parabol, hiperboli için Directrix satırı.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="217"/>
      <source>Directrix2</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Directrix2</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="218"/>
      <source>Second directrix line for ellipse and hyperbola.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Elips ve hiperbola ait ikinci satır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="220"/>
      <source>Asymptote1</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Asymptote1</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="221"/>
      <source>Asymptote of a hyperbola.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Bir Hiperbol asimptot.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="223"/>
      <source>Asymptote2</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Asymptote2</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="224"/>
      <source>Second asymptote of hyperbola.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Hiperbol ikinci asimptot.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="226"/>
      <source>Tangent</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Teğet</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="227"/>
      <source>Line tangent to an edge. Optional vertex link defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Çizgi bir kenara teğet. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="229"/>
      <source>Normal to edge</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Normalden kenara</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="230"/>
      <source>Align to N vector of Frenet-Serret coordinate system of curved edge. Optional vertex link defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Kavisli kenarın Frenet-Serret koordinat sisteminin N vektörüne hizalayın. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="232"/>
      <source>Binormal</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Binormal</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="233"/>
      <source>Align to B vector of Frenet-Serret coordinate system of curved edge. Optional vertex link defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Kavisli kenarın Frenet-Serret koordinat sisteminin B vektörüne hizalayın. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="235"/>
      <source>Tangent to surface (U)</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Yüzeye teğet (U)</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="236"/>
      <location filename="../../AttacherTexts.cpp" line="239"/>
      <source>Tangent to surface, along U parameter. Vertex link defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Yüzeye, U parametresi boyunca teğet. Vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="238"/>
      <source>Tangent to surface (V)</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Yüzeye teğet (V)</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="241"/>
      <source>Through two points</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>İki nokta sayesinde</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="242"/>
      <source>Line that passes through two vertices.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>İki köşeden geçen çizgi.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="244"/>
      <source>Intersection</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Kesişim</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="245"/>
      <source>Not implemented.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Uygulanmadı.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="247"/>
      <source>Proximity line</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Yakınlık hattı</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="248"/>
      <source>Line that spans the shortest distance between shapes.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Şekiller arasındaki en kısa mesafeyi kapsayan çizgi.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="250"/>
      <source>1st principal axis</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>1. ana eksen</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="251"/>
      <source>Line follows first principal axis of inertia.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Satır devam eden durumda ilk ilk ekseni takip eder.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="253"/>
      <source>2nd principal axis</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>2. ana eksen</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="254"/>
      <source>Line follows second principal axis of inertia.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Çizgi, devam eden durumda ikinci ana ekseni takip eder.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="256"/>
      <source>3rd principal axis</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>3. ana eksen</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="257"/>
      <source>Line follows third principal axis of inertia.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Satır devam eden durumda üçüncü ana ekseni izler.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="259"/>
      <source>Normal to surface</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Yüzey normal</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="260"/>
      <source>Line perpendicular to surface at point set by vertex.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Vertex tarafından belirlenen noktada yüzeye dik çizgi.</translation>
    </message>
  </context>
  <context>
    <name>Attacher2D</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="124"/>
      <source>Deactivated</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Devre dışı</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="125"/>
      <source>Attachment is disabled. Object can be moved by editing Placement property.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Ek Dosya devre dışı. Nesne, Yerleşim özelliğini düzenleyerek taşınabilir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="127"/>
      <source>Translate origin</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Menşeyi çevir</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="128"/>
      <source>Origin is aligned to match Vertex. Orientation is controlled by Placement property.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Orijin, Vertex ile eşleşecek şekilde hizalıdır. Yönlendirme Yerleşim yeri özelliği ile kontrol edilir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="130"/>
      <source>Object's XY</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Nesnenin XY' si</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="131"/>
      <source>Plane is aligned to XY local plane of linked object.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Düzlem, bağlantılı nesnenin XY yerel düzlemiyle hizalıdır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="133"/>
      <source>Object's XZ</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Nesnenin XZ' si</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="134"/>
      <source>Plane is aligned to XZ local plane of linked object.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Düzlem, bağlantılı nesnenin XZ yerel düzlemine hizalanır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="136"/>
      <source>Object's YZ</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Nesneye ait YZ</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="137"/>
      <source>Plane is aligned to YZ local plane of linked object.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Düzlem, bağlantılı nesnenin XZ yerel düzlemine hizalanır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="139"/>
      <source>Plane face</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Uçak yüz</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="140"/>
      <source>Plane is aligned to coincide planar face.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Uçak düzlemsel yüz denk hizalanır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="142"/>
      <source>Tangent to surface</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Yüzeye teğet geçiş</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="143"/>
      <source>Plane is made tangent to surface at vertex.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Uçak teğet vertex yüzeyde yapılır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="145"/>
      <source>Normal to edge</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Normalden kenara</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="146"/>
      <source>Plane is made tangent to edge. Optional vertex link defines where.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Düzlem kenarlığa teğet yapılır. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="148"/>
      <source>Frenet NB</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Frenet NB</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="149"/>
      <location filename="../../AttacherTexts.cpp" line="152"/>
      <location filename="../../AttacherTexts.cpp" line="155"/>
      <source>Align to Frenet-Serret coordinate system of curved edge. Optional vertex link defines where.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Kavisli kenarın Frenet-Serret koordinat sistemine hizalayın. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="151"/>
      <source>Frenet TN</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Frenet TN</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="154"/>
      <source>Frenet TB</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Frenet TB</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="157"/>
      <source>Concentric</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Ortak merkezli</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="158"/>
      <source>Align to plane to osculating circle of an edge. Origin is aligned to point of curvature. Optional vertex link defines where.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Dairenin kenarını düzleme dayandırmak için hizalayın. Orijin, eğrilik noktasına hizalanır. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="160"/>
      <source>Revolution Section</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Köklü Değişiklik Bölümü</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="161"/>
      <source>Plane is perpendicular to edge, and Y axis is matched with axis of osculating circle. Optional vertex link defines where.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Düzlem kenara dik ve Y ekseni daireye dayanan kenarla eşleştirilir. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="163"/>
      <source>Plane by 3 points</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Üç nokta ile düzlem</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="164"/>
      <source>Align plane to pass through three vertices.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Üç köşeden geçmek için düzlemi hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="166"/>
      <source>Normal to 3 points</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Üç nokta için normal</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="167"/>
      <source>Plane will pass through first two vertices, and perpendicular to plane that passes through three vertices.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Düzlem, ilk iki köşeden geçer ve üç köşeden geçen düzleme dik olur.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="169"/>
      <source>Folding</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Katlama</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="170"/>
      <source>Specialty mode for folding polyhedra. Select 4 edges in order: foldable edge, fold line, other fold line, other foldable edge. Plane will be aligned to folding the first edge.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Kat katlı çokyüzlü için özel mod. Sırayla 4 kenar seçin: katlanabilir kenar, kat çizgi, diğer katlama çizgileri, diğer katlanabilir kenar. Düzlem ilk kenarı katlayacak şekilde hizalanacak.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="172"/>
      <source>Inertia 2-3</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Devam Eden Durum 2-3</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="173"/>
      <source>Plane constructed on second and third principal axes of inertia (passes through center of mass).</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Düzlem, devam eden durumun ikinci ve üçüncü ana eksenleri (kütle merkezi üzerinden geçer) üzerine inşa edilmiştir.</translation>
    </message>
  </context>
  <context>
    <name>Attacher3D</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="49"/>
      <source>Deactivated</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Devre dışı</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="50"/>
      <source>Attachment is disabled. Object can be moved by editing Placement property.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Ek Dosya devre dışı. Nesne, Yerleşim özelliğini düzenleyerek taşınabilir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="52"/>
      <source>Translate origin</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Menşeyi çevir</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="53"/>
      <source>Origin is aligned to match Vertex. Orientation is controlled by Placement property.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Orijin, Vertex ile eşleşecek şekilde hizalıdır. Yönlendirme Yerleşim yeri özelliği ile kontrol edilir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="55"/>
      <source>Object's X Y Z</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Nesneye ait X Y Z</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="56"/>
      <source>Placement is made equal to Placement of linked object.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Yerleşim, Bağlantılı Nesnenin Yerleşimine eşit yapılır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="58"/>
      <source>Object's X Z Y</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Nesneye ait X Z Y</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="59"/>
      <source>X', Y', Z' axes are matched with object's local X, Z, -Y, respectively.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>X ', Y', Z 'eksenleri, nesnenin yerel X, Z, -Y' si ile eşleştirilir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="61"/>
      <source>Object's Y Z X</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Nesneye ait Y Z X</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="62"/>
      <source>X', Y', Z' axes are matched with object's local Y, Z, X, respectively.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>X ', Y', Z 'eksenleri, sırasıyla, nesnenin yerel Y, Z, X' i ile eşleştirilir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="64"/>
      <source>XY on plane</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Düzlemde XY</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="65"/>
      <source>X' Y' plane is aligned to coincide planar face.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>X 'Y' düzlemi düzlemsel yüze denk gelecek şekilde hizalanır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="67"/>
      <source>XY tangent to surface</source>
      <comment>Attachment3D mode caption</comment>
      <translation>XY, yüzeye teğet</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="68"/>
      <source>X' Y' plane is made tangent to surface at vertex.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>X 'Y' düzlemi köşe yüzeyine teğet yapılır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="70"/>
      <source>Z tangent to edge</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Z tanjanttan teğet</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="71"/>
      <source>Z' axis is aligned to be tangent to edge. Optional vertex link defines where.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Z 'ekseni kenara teğet olacak şekilde hizalanmıştır. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="73"/>
      <source>Frenet NBT</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Frenet NBT</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="74"/>
      <location filename="../../AttacherTexts.cpp" line="77"/>
      <location filename="../../AttacherTexts.cpp" line="80"/>
      <source>Align to Frenet-Serret coordinate system of curved edge. Optional vertex link defines where.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Kavisli kenarın Frenet-Serret koordinat sistemine hizalayın. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="76"/>
      <source>Frenet TNB</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Frenet TNB</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="79"/>
      <source>Frenet TBN</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Frenet TBN</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="82"/>
      <source>Concentric</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Ortak merkezli</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="83"/>
      <source>Align XY plane to osculating circle of an edge. Optional vertex link defines where.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>XY düzlemini dairenin kenarına dayandırmak için hizalayın. Opsiyonel vertex bağlantısı nerede tanımlanır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="85"/>
      <source>Revolution Section</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Köklü Değişiklik Bölümü</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="86"/>
      <source>Align Y' axis to match axis of osculating circle of an edge. Optional vertex link defines where.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Y 'ekseni, dairenin kenarına dayandırılan eksenle karşılaştırmak için hizalayın. Opsiyonel vertex bağlantısı nerede tanımlar.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="88"/>
      <source>XY plane by 3 points</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Üç noktalı olarak XY düzlemi</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="89"/>
      <source>Align XY plane to pass through three vertices.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>XY düzlemini üç köşeden geçmek için hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="91"/>
      <source>XZ plane by 3 points</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Üç noktalı XZ düzlemi</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="92"/>
      <source>Align XZ plane to pass through 3 points; X axis will pass through two first points.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>XZ düzlemini 3 nokta geçecek şekilde hizalayın; X ekseni iki ilk noktadan geçecektir.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="94"/>
      <source>Folding</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Katlama</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="95"/>
      <source>Specialty mode for folding polyhedra. Select 4 edges in order: foldable edge, fold line, other fold line, other foldable edge. XY plane will be aligned to folding the first edge.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Kat katlı çokyüzlü için özel mod. Sırayla 4 kenar seçin: katlanabilir kenar, kat çizgi, diğer katlama çizgileri, diğer katlanabilir kenar. XY düzlemi ilk kenarın katlanması için hizalanacaktır.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="97"/>
      <source>Inertial CS</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Devam Eden Durum CS</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="98"/>
      <source>Inertial coordinate system, constructed on principal axes of inertia and center of mass.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Esas devam eden durum eksenleri ve kütle merkezi üzerinde kurulan devam eden durumun koordinat sistemi.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="100"/>
      <source>Align O-Z-X</source>
      <comment>Attachment3D mode caption</comment>
      <translation>O-Z-X hizala</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="101"/>
      <source>Match origin with first Vertex. Align Z' and X' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Z 've X' eksenlerini köşe / çizgi doğrultusunda hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="103"/>
      <source>Align O-Z-Y</source>
      <comment>Attachment3D mode caption</comment>
      <translation>O-Z-Y hizala</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="104"/>
      <source>Match origin with first Vertex. Align Z' and Y' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Z 've Y' eksenlerini köşe / çizgi doğrultusunda hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="106"/>
      <location filename="../../AttacherTexts.cpp" line="181"/>
      <source>Align O-X-Y</source>
      <comment>Attachment3D mode caption</comment>
      <translation>O-X-Y hizala</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="107"/>
      <source>Match origin with first Vertex. Align X' and Y' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. X 've Y' eksenlerini köşe / doğrultuda hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="109"/>
      <source>Align O-X-Z</source>
      <comment>Attachment3D mode caption</comment>
      <translation>O-X-Z Hizala</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="110"/>
      <source>Match origin with first Vertex. Align X' and Z' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. X 've Z' eksenlerini köşe / çizgi doğrultusunda hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="112"/>
      <source>Align O-Y-Z</source>
      <comment>Attachment3D mode caption</comment>
      <translation>O-Y-Z hizala</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="113"/>
      <source>Match origin with first Vertex. Align Y' and Z' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Y 've Z' eksenlerini köşe / doğrultu boyunca hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="115"/>
      <location filename="../../AttacherTexts.cpp" line="190"/>
      <source>Align O-Y-X</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Hizala O-Y-X</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="116"/>
      <source>Match origin with first Vertex. Align Y' and X' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Y 've X' eksenlerini köşe / doğrultuda hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="175"/>
      <source>Align O-N-X</source>
      <comment>Attachment3D mode caption</comment>
      <translation>O-N-X hizala</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="176"/>
      <source>Match origin with first Vertex. Align normal and horizontal plane axis towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Normal ve yatay düzlem eksenini köşe / çizgi doğrultusunda hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="178"/>
      <source>Align O-N-Y</source>
      <comment>Attachment3D mode caption</comment>
      <translation>O-N-Y hizala</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="179"/>
      <source>Match origin with first Vertex. Align normal and vertical plane axis towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Normal ve dikey düzlem eksenini köşe / çizgi doğrultusunda hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="182"/>
      <source>Match origin with first Vertex. Align horizontal and vertical plane axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Yatay ve düşey düzlem eksenlerini köşe / doğrultu boyunca hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="184"/>
      <source>Align O-X-N</source>
      <comment>Attachment3D mode caption</comment>
      <translation>O-X-N hizala</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="185"/>
      <source>Match origin with first Vertex. Align horizontal plane axis and normal towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Yatay düzlem eksenini ve normali, hat boyunca / tepeye doğru hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="187"/>
      <source>Align O-Y-N</source>
      <comment>Attachment3D mode caption</comment>
      <translation>O-Y-N hizala</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="188"/>
      <source>Match origin with first Vertex. Align vertical plane axis and normal towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Dikey düzlem eksenini ve normal dikey / çizgi doğrultusunda hizalayın.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="191"/>
      <source>Match origin with first Vertex. Align vertical and horizontal plane axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Başlangıç noktasını ilk Vertex ile eşleştirin. Dikey ve yatay düzlem eksenlerini köşe/çizgi doğrultusunda hizalayın.</translation>
    </message>
  </context>
  <context>
    <name>BlockDefinition</name>
    <message>
      <location filename="../../DlgBlock.ui" line="14"/>
      <source>Block definition</source>
      <translation>Blok tanımı</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="20"/>
      <source>First limit</source>
      <translation>İlk sınır</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="40"/>
      <location filename="../../DlgBlock.ui" line="221"/>
      <source>Type:</source>
      <translation>Türü:</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="47"/>
      <location filename="../../DlgBlock.ui" line="201"/>
      <source>mm</source>
      <translation>mm</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="57"/>
      <location filename="../../DlgBlock.ui" line="257"/>
      <source>Length:</source>
      <translation>Uzunluk:</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="65"/>
      <location filename="../../DlgBlock.ui" line="229"/>
      <source>Dimension</source>
      <translation>Boyut</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="70"/>
      <location filename="../../DlgBlock.ui" line="234"/>
      <source>Up to next</source>
      <translation>Sonrakine kadar</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="75"/>
      <location filename="../../DlgBlock.ui" line="239"/>
      <source>Up to last</source>
      <translation>En sonuncusuna kadar</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="80"/>
      <location filename="../../DlgBlock.ui" line="244"/>
      <source>Up to plane</source>
      <translation>Düzleme kadar</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="85"/>
      <location filename="../../DlgBlock.ui" line="249"/>
      <source>Up to face</source>
      <translation>Yüze kadar</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="93"/>
      <location filename="../../DlgBlock.ui" line="264"/>
      <source>Limit:</source>
      <translation>Sınır:</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="103"/>
      <location filename="../../DlgBlock.ui" line="142"/>
      <location filename="../../DlgBlock.ui" line="214"/>
      <location filename="../../DlgBlock.ui" line="309"/>
      <source>No selection</source>
      <translation>Seçim yok</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="115"/>
      <source>Profile</source>
      <translation>Yan görünüm</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="135"/>
      <source>Selection:</source>
      <translation>Seçim:</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="162"/>
      <source>Reverse</source>
      <translation>Ters çevir</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="169"/>
      <source>Both sides</source>
      <translation>Her iki taraf</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="181"/>
      <source>Second limit</source>
      <translation>İkinci sınır</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="276"/>
      <source>Direction</source>
      <translation>Yön</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="288"/>
      <source>Perpendicular to sketch</source>
      <translation>Eskize dik (açı)</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="316"/>
      <source>Reference</source>
      <translation>Referans</translation>
    </message>
  </context>
  <context>
    <name>CmdBoxSelection</name>
    <message>
      <location filename="../../Command.cpp" line="2419"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2420"/>
      <location filename="../../Command.cpp" line="2421"/>
      <location filename="../../Command.cpp" line="2423"/>
      <source>Box selection</source>
      <translation>Seçim kutusu</translation>
    </message>
  </context>
  <context>
    <name>CmdCheckGeometry</name>
    <message>
      <location filename="../../Command.cpp" line="2127"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2128"/>
      <source>Check Geometry</source>
      <translation>Geometriyi Kontrol Edin</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2129"/>
      <source>Analyzes Geometry For Errors</source>
      <translation>Hatalar için Geometriyi Analiz Ediyor</translation>
    </message>
  </context>
  <context>
    <name>CmdColorPerFace</name>
    <message>
      <location filename="../../Command.cpp" line="2161"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2162"/>
      <source>Color per face</source>
      <translation>Yüzey rengi</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2163"/>
      <source>Set the color of each individual face of the selected object.</source>
      <translation>Seçili nesnenin her bir ayrı yüzünün rengini ayarla.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureAngular</name>
    <message>
      <location filename="../../Command.cpp" line="2231"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2232"/>
      <source>Measure Angular</source>
      <translation>Açısal Ölçüm</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2233"/>
      <source>Measure the angle between two edges.</source>
      <translation>İki kenar arasındaki açıyı ölçün.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureClearAll</name>
    <message>
      <location filename="../../Command.cpp" line="2290"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2291"/>
      <source>Clear All</source>
      <translation>Hepsini temizle</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2292"/>
      <source>Clear all dimensions from the screen.</source>
      <translation>Tüm ölçüleri ekrandan temizle.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureLinear</name>
    <message>
      <location filename="../../Command.cpp" line="2200"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2201"/>
      <source>Measure Linear</source>
      <translation>Doğrusal Olarak Ölç</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2202"/>
      <source>Measure the linear distance between two points;
if edges or faces are picked, it will measure
between two vertices of them.</source>
      <translation>İki nokta arasındaki doğrusal mesafeyi ölçün;
eğer kenarlar veya yüzler seçiliyse, bunların
iki köşe noktası arası ölçülecektir.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureRefresh</name>
    <message>
      <location filename="../../Command.cpp" line="2260"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2261"/>
      <source>Refresh</source>
      <translation>Yenile</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2262"/>
      <source>Recalculate the dimensions
if the measured points have moved.</source>
      <translation>Ölçülen noktalar taşınmışsa
boyutları yeniden hesapla.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureToggle3d</name>
    <message>
      <location filename="../../Command.cpp" line="2356"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2357"/>
      <source>Toggle 3D</source>
      <translation>3B'ye geçiş yap</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2358"/>
      <source>Toggle on and off all direct dimensions,
including angular.</source>
      <translation type="unfinished">Toggle on and off all direct dimensions,
including angular.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureToggleAll</name>
    <message>
      <location filename="../../Command.cpp" line="2319"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2320"/>
      <source>Toggle All</source>
      <translation>Tümünü Aç / Kapat</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2321"/>
      <source>Toggle on and off all currently visible dimensions,
direct, orthogonal, and angular.</source>
      <translation type="unfinished">Toggle on and off all currently visible dimensions,
direct, orthogonal, and angular.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureToggleDelta</name>
    <message>
      <location filename="../../Command.cpp" line="2387"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2388"/>
      <source>Toggle Delta</source>
      <translation>Delta'ya Geçiş Yap</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2389"/>
      <source>Toggle on and off all orthogonal dimensions,
meaning that a direct dimension will be decomposed
into its X, Y, and Z components.</source>
      <translation type="unfinished">Toggle on and off all orthogonal dimensions,
meaning that a direct dimension will be decomposed
into its X, Y, and Z components.</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBoolean</name>
    <message>
      <location filename="../../Command.cpp" line="1290"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1291"/>
      <source>Boolean...</source>
      <translation>Mantıksal...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1292"/>
      <source>Run a boolean operation with two shapes selected</source>
      <translation>Seçilen iki şekille bir mantıksal işlem çalıştırın</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBox</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="87"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="88"/>
      <location filename="../../CommandParametric.cpp" line="99"/>
      <location filename="../../CommandParametric.cpp" line="104"/>
      <source>Cube</source>
      <translation>Küp</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="89"/>
      <source>Create a cube solid</source>
      <translation>Katı küp oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBox2</name>
    <message>
      <location filename="../../Command.cpp" line="136"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="137"/>
      <source>Box fix 1</source>
      <translation>Sabit kutu 1</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="138"/>
      <source>Create a box solid without dialog</source>
      <translation>Diyalog olmadan katı bir kutu oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBox3</name>
    <message>
      <location filename="../../Command.cpp" line="177"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="178"/>
      <source>Box fix 2</source>
      <translation>Sabit kutu 2</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="179"/>
      <source>Create a box solid without dialog</source>
      <translation>Diyalog olmadan katı bir kutu oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBuilder</name>
    <message>
      <location filename="../../Command.cpp" line="1553"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1554"/>
      <source>Shape builder...</source>
      <translation>Şekil oluşturucu...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1555"/>
      <source>Advanced utility to create shapes</source>
      <translation>Şekiller oluşturmak için gelişmiş yardımcı program</translation>
    </message>
  </context>
  <context>
    <name>CmdPartChamfer</name>
    <message>
      <location filename="../../Command.cpp" line="1457"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1458"/>
      <source>Chamfer...</source>
      <translation>Pah...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1459"/>
      <source>Chamfer the selected edges of a shape</source>
      <translation>Şeklin seçilen kenarlarına pah kır</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCommon</name>
    <message>
      <location filename="../../Command.cpp" line="350"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="351"/>
      <source>Intersection</source>
      <translation>Kesişim</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="352"/>
      <source>Make an intersection of two shapes</source>
      <translation>İki şeklin kesişimini oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompCompoundTools</name>
    <message>
      <location filename="../../Command.cpp" line="779"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="780"/>
      <source>Compound tools</source>
      <translation>Birleşik araçları</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="781"/>
      <source>Compound tools: working with lists of shapes.</source>
      <translation>Bileşik araçlar: şekil listeleriyle çalışma.</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompJoinFeatures</name>
    <message>
      <location filename="../../Command.cpp" line="551"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="552"/>
      <source>Join objects...</source>
      <translation>Nesnelere katıl...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="553"/>
      <source>Join walled objects</source>
      <translation>Duvarlı nesnelere katıl</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompOffset</name>
    <message>
      <location filename="../../Command.cpp" line="1743"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1744"/>
      <source>Offset:</source>
      <translation type="unfinished">Offset:</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1745"/>
      <source>Tools to offset shapes (construct parallel shapes)</source>
      <translation>Şekilleri dengelemek için kullanılan araçlar (paralel şekiller oluşturun)</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompSplitFeatures</name>
    <message>
      <location filename="../../Command.cpp" line="657"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="658"/>
      <source>Split objects...</source>
      <translation>Nesneleri böl...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="659"/>
      <source>Shape splitting tools. Compsolid creation tools. OCC 6.9.0 or later is required.</source>
      <translation>Şekil kesme aletleri. Compsolid oluşturma araçları. OCC 6.9.0 veya üstü gereklidir.</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompound</name>
    <message>
      <location filename="../../Command.cpp" line="886"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="887"/>
      <source>Make compound</source>
      <translation>Bileşik yap</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="888"/>
      <source>Make a compound of several shapes</source>
      <translation>Birkaç şekilden oluşan bir bileşik yapın</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCone</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="169"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="170"/>
      <location filename="../../CommandParametric.cpp" line="181"/>
      <location filename="../../CommandParametric.cpp" line="186"/>
      <source>Cone</source>
      <translation>Koni</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="171"/>
      <source>Create a cone solid</source>
      <translation>Katı bir koni oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCrossSections</name>
    <message>
      <location filename="../../Command.cpp" line="1513"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1514"/>
      <source>Cross-sections...</source>
      <translation>Kesitler...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1515"/>
      <source>Cross-sections</source>
      <translation>Kesit</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCut</name>
    <message>
      <location filename="../../Command.cpp" line="272"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="273"/>
      <source>Cut</source>
      <translation>Kes</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="274"/>
      <source>Make a cut of two shapes</source>
      <translation>İki şeklin kesimini oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCylinder</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="46"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="47"/>
      <location filename="../../CommandParametric.cpp" line="58"/>
      <location filename="../../CommandParametric.cpp" line="63"/>
      <source>Cylinder</source>
      <translation>Silindir</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="48"/>
      <source>Create a Cylinder</source>
      <translation>Bir silindir oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDefeaturing</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="416"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="417"/>
      <source>Defeaturing</source>
      <translation>Özelliği / işlevi kaldır</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="418"/>
      <source>Remove feature from a shape</source>
      <translation>Bir şekilden özelliği kaldır</translation>
    </message>
  </context>
  <context>
    <name>CmdPartElementCopy</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="328"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="329"/>
      <source>Create shape element copy</source>
      <translation type="unfinished">Create shape element copy</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="330"/>
      <source>Create a non-parametric copy of the selected shape element</source>
      <translation type="unfinished">Create a non-parametric copy of the selected shape element</translation>
    </message>
  </context>
  <context>
    <name>CmdPartExport</name>
    <message>
      <location filename="../../Command.cpp" line="1053"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1054"/>
      <source>Export CAD...</source>
      <translation>CAD'ı dışarı aktar...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1055"/>
      <source>Exports to a CAD file</source>
      <translation>Bir CAD dosyasına aktarır</translation>
    </message>
  </context>
  <context>
    <name>CmdPartExtrude</name>
    <message>
      <location filename="../../Command.cpp" line="1321"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1322"/>
      <source>Extrude...</source>
      <translation>Uzat...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1323"/>
      <source>Extrude a selected sketch</source>
      <translation>Seçili bir eskize kalınlık ver</translation>
    </message>
  </context>
  <context>
    <name>CmdPartFillet</name>
    <message>
      <location filename="../../Command.cpp" line="1429"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1430"/>
      <source>Fillet...</source>
      <translation>Dolgula...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1431"/>
      <source>Fillet the selected edges of a shape</source>
      <translation>Bir şeklin seçili kenarlarını dolgulayın</translation>
    </message>
  </context>
  <context>
    <name>CmdPartFuse</name>
    <message>
      <location filename="../../Command.cpp" line="450"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="451"/>
      <source>Union</source>
      <translation>Birleştir</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="452"/>
      <source>Make a union of several shapes</source>
      <translation>Çeşitli şekillerin birleşimini oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartImport</name>
    <message>
      <location filename="../../Command.cpp" line="991"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="992"/>
      <source>Import CAD...</source>
      <translation>CAD'i içeri aktar...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="993"/>
      <source>Imports a CAD file</source>
      <translation>Bir CAD dosyasını içeri aktarır</translation>
    </message>
  </context>
  <context>
    <name>CmdPartImportCurveNet</name>
    <message>
      <location filename="../../Command.cpp" line="1100"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1101"/>
      <source>Import curve network...</source>
      <translation>Eğri ağı içeri aktar...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1102"/>
      <source>Import a curve network</source>
      <translation>Eğri bir ağı içeri aktar</translation>
    </message>
  </context>
  <context>
    <name>CmdPartLoft</name>
    <message>
      <location filename="../../Command.cpp" line="1582"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1583"/>
      <source>Loft...</source>
      <translation>Çatıla...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1584"/>
      <source>Utility to loft</source>
      <translation>Çatılama için Yardımcı araçlar</translation>
    </message>
  </context>
  <context>
    <name>CmdPartMakeFace</name>
    <message>
      <location filename="../../Command.cpp" line="1349"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1350"/>
      <source>Make face from wires</source>
      <translation>Tellerden yüz yap</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1351"/>
      <source>Make face from set of wires (e.g. from a sketch)</source>
      <translation>Kablo kümelerinden yüzey oluştur (örneğin bir taslaktan)</translation>
    </message>
  </context>
  <context>
    <name>CmdPartMakeSolid</name>
    <message>
      <location filename="../../Command.cpp" line="1148"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1149"/>
      <source>Convert to solid</source>
      <translation>Katı hale dönüştür</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1150"/>
      <source>Create solid from a shell or compound</source>
      <translation>Bir kabuk veya bileşkeden katı cisim oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartMirror</name>
    <message>
      <location filename="../../Command.cpp" line="1485"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1486"/>
      <source>Mirroring...</source>
      <translation>Aynala...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1487"/>
      <source>Mirroring a selected shape</source>
      <translation>Seçili bir şekli aynala</translation>
    </message>
  </context>
  <context>
    <name>CmdPartOffset</name>
    <message>
      <location filename="../../Command.cpp" line="1640"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1641"/>
      <source>3D Offset...</source>
      <translation>3D Ofset...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1642"/>
      <source>Utility to offset in 3D</source>
      <translation>3D konumlandırma için yardımcı araçlar</translation>
    </message>
  </context>
  <context>
    <name>CmdPartOffset2D</name>
    <message>
      <location filename="../../Command.cpp" line="1692"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1693"/>
      <source>2D Offset...</source>
      <translation>2D Ofset...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1694"/>
      <source>Utility to offset planar shapes</source>
      <translation>Düzlemsel şekilleri konumlandırmak için yardımcı araçlar</translation>
    </message>
  </context>
  <context>
    <name>CmdPartPickCurveNet</name>
    <message>
      <location filename="../../Command.cpp" line="90"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="91"/>
      <source>Pick curve network</source>
      <translation>Eğri ağı seç</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="92"/>
      <source>Pick a curve network</source>
      <translation>Bir eğri ağı seç</translation>
    </message>
  </context>
  <context>
    <name>CmdPartPointsFromMesh</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="179"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="180"/>
      <source>Create points object from mesh</source>
      <translation type="unfinished">Create points object from mesh</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="181"/>
      <source>Create selectable points object from selected mesh object</source>
      <translation type="unfinished">Create selectable points object from selected mesh object</translation>
    </message>
  </context>
  <context>
    <name>CmdPartPrimitives</name>
    <message>
      <location filename="../../Command.cpp" line="218"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="219"/>
      <source>Create primitives...</source>
      <translation>Temel öğeleri oluştur...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="220"/>
      <source>Creation of parametrized geometric primitives</source>
      <translation>Değişkenlerle tanımlanmış geometrik temel öğelerin oluşumu</translation>
    </message>
  </context>
  <context>
    <name>CmdPartProjectionOnSurface</name>
    <message>
      <location filename="../../Command.cpp" line="2448"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2449"/>
      <source>Create projection on surface...</source>
      <translation type="unfinished">Create projection on surface...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2450"/>
      <source>Project edges, wires, or faces of one object
onto a face of another object.
The camera view determines the direction
of projection.</source>
      <translation type="unfinished">Project edges, wires, or faces of one object
onto a face of another object.
The camera view determines the direction
of projection.</translation>
    </message>
  </context>
  <context>
    <name>CmdPartRefineShape</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="356"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="357"/>
      <source>Refine shape</source>
      <translation>Şekli arıt (incelt)</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="358"/>
      <source>Refine the copy of a shape</source>
      <translation>Şeklin kopyasını hassaslaştırın</translation>
    </message>
  </context>
  <context>
    <name>CmdPartReverseShape</name>
    <message>
      <location filename="../../Command.cpp" line="1227"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1228"/>
      <source>Reverse shapes</source>
      <translation>Şekilleri ters çevir</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1229"/>
      <source>Reverse orientation of shapes</source>
      <translation>Şekillerin dizilimini ters çevir</translation>
    </message>
  </context>
  <context>
    <name>CmdPartRevolve</name>
    <message>
      <location filename="../../Command.cpp" line="1401"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1402"/>
      <source>Revolve...</source>
      <translation>Döndür...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1403"/>
      <source>Revolve a selected shape</source>
      <translation>Seçili bir şekli döndür</translation>
    </message>
  </context>
  <context>
    <name>CmdPartRuledSurface</name>
    <message>
      <location filename="../../Command.cpp" line="2011"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2012"/>
      <source>Create ruled surface</source>
      <translation>Düzenli yüzey oluştur</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2013"/>
      <source>Create a ruled surface from either two Edges or two wires</source>
      <translation>İki Kenardan veya iki telden bir çizgili yüzey oluşturun</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSection</name>
    <message>
      <location filename="../../Command.cpp" line="943"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="944"/>
      <source>Section</source>
      <translation>Kesişim</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="945"/>
      <source>Make a section of two shapes</source>
      <translation>İki şeklin kesişimini oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartShapeFromMesh</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="107"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="108"/>
      <source>Create shape from mesh...</source>
      <translation>Örgü formu oluştur...</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="109"/>
      <source>Create shape from selected mesh object</source>
      <translation>Seçilen örgü nesnesinden şekil oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSimpleCopy</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="229"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="230"/>
      <source>Create simple copy</source>
      <translation>Basit bir kopya oluştur</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="231"/>
      <source>Create a simple non-parametric copy</source>
      <translation>Parametrik olmayan basit bir kopyasını oluşturun</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSimpleCylinder</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="57"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="58"/>
      <source>Create Cylinder...</source>
      <translation>Silindir oluştur...</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="59"/>
      <source>Create a Cylinder</source>
      <translation>Bir silindir oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSphere</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="128"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="129"/>
      <location filename="../../CommandParametric.cpp" line="140"/>
      <location filename="../../CommandParametric.cpp" line="145"/>
      <source>Sphere</source>
      <translation>Küre</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="130"/>
      <source>Create a sphere solid</source>
      <translation>Katı bir küre oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSweep</name>
    <message>
      <location filename="../../Command.cpp" line="1611"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1612"/>
      <source>Sweep...</source>
      <translation>Süpür...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1613"/>
      <source>Utility to sweep</source>
      <translation>Süpürme yardımı</translation>
    </message>
  </context>
  <context>
    <name>CmdPartThickness</name>
    <message>
      <location filename="../../Command.cpp" line="1836"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1837"/>
      <source>Thickness...</source>
      <translation>Kalınlık...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1838"/>
      <source>Utility to apply a thickness</source>
      <translation>Kalınlığı uygulamada yarar</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1850"/>
      <location filename="../../Command.cpp" line="1870"/>
      <source>Wrong selection</source>
      <translation>Yanlış seçim</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1851"/>
      <source>Selected one or more faces of a shape</source>
      <translation>Bir şeklin bir veya daha fazla yüzü seçildi</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1871"/>
      <source>Selected shape is not a solid</source>
      <translation>Seçilen şekil katı değil</translation>
    </message>
  </context>
  <context>
    <name>CmdPartTorus</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="210"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="211"/>
      <location filename="../../CommandParametric.cpp" line="222"/>
      <location filename="../../CommandParametric.cpp" line="227"/>
      <source>Torus</source>
      <translation>Halka</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="212"/>
      <source>Create a torus solid</source>
      <translation>Katı bir yumru oluştur</translation>
    </message>
  </context>
  <context>
    <name>CmdPartTransformedCopy</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="300"/>
      <source>Part</source>
      <translation>Parça</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="301"/>
      <source>Create transformed copy</source>
      <translation type="unfinished">Create transformed copy</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="302"/>
      <source>Create a non-parametric copy with transformed placement</source>
      <translation type="unfinished">Create a non-parametric copy with transformed placement</translation>
    </message>
  </context>
  <context>
    <name>Command</name>
    <message>
      <location filename="../../Command.cpp" line="147"/>
      <location filename="../../Command.cpp" line="188"/>
      <source>Part Box Create</source>
      <translation type="unfinished">Part Box Create</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="307"/>
      <source>Part Cut</source>
      <translation type="unfinished">Part Cut</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="408"/>
      <source>Common</source>
      <translation>Ortak</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="508"/>
      <source>Fusion</source>
      <translation type="unfinished">Fusion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="921"/>
      <source>Compound</source>
      <translation>Bileşik</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="966"/>
      <source>Section</source>
      <translation>Kesişim</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1017"/>
      <source>Import Part</source>
      <translation>Parça İçe Aktar</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1123"/>
      <source>Part Import Curve Net</source>
      <translation type="unfinished">Part Import Curve Net</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1240"/>
      <source>Reverse</source>
      <translation>Ters çevir</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1363"/>
      <source>Make face</source>
      <translation type="unfinished">Make face</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1657"/>
      <source>Make Offset</source>
      <translation>Öteleme Yap</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1709"/>
      <source>Make 2D Offset</source>
      <translation>2B Öteleme Yap</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1877"/>
      <source>Make Thickness</source>
      <translation>Kalınlık Ver</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2102"/>
      <source>Create ruled surface</source>
      <translation>Düzenli yüzey oluştur</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="72"/>
      <source>Create Part Cylinder</source>
      <translation type="unfinished">Create Part Cylinder</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="137"/>
      <source>Convert mesh</source>
      <translation type="unfinished">Convert mesh</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="196"/>
      <source>Points from mesh</source>
      <translation type="unfinished">Points from mesh</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="373"/>
      <source>Refine shape</source>
      <translation>Şekli arıt (incelt)</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="430"/>
      <source>Defeaturing</source>
      <translation>Özelliği / işlevi kaldır</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="1063"/>
      <source>Edit attachment</source>
      <translation type="unfinished">Edit attachment</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.cpp" line="432"/>
      <source>Change face colors</source>
      <translation>Yüz renklerini değiştir</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="202"/>
      <source>Loft</source>
      <translation>Çatıla</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="240"/>
      <source>Edge</source>
      <translation>Kenar</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="281"/>
      <source>Wire</source>
      <translation>Yay</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="333"/>
      <location filename="../../TaskShapeBuilder.cpp" line="385"/>
      <source>Face</source>
      <translation>Yüz</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="448"/>
      <source>Shell</source>
      <translation>Kabuk</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="500"/>
      <source>Solid</source>
      <translation>Katı</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="342"/>
      <source>Sweep</source>
      <translation>Süpür</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="199"/>
      <source>Edit Mirror</source>
      <translation>Aynalamayı Düzenle</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDatumParameters</name>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="14"/>
      <source>Form</source>
      <translation>Şekil:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="20"/>
      <source>Selection accepted</source>
      <translation>Seçim kabul edildi</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="35"/>
      <source>Reference 1</source>
      <translation>Referans 1</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="52"/>
      <source>Reference 2</source>
      <translation>Referans 2</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="69"/>
      <source>Reference 3</source>
      <translation>Referans 3</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="86"/>
      <source>Reference 4</source>
      <translation>Referans 4</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="101"/>
      <source>Attachment mode:</source>
      <translation>Ek modu:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="124"/>
      <source>Attachment Offset (in local coordinates):</source>
      <translation>Ek Ofseti (yerel koordinatlarda):</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="136"/>
      <source>In x-direction:</source>
      <translation>X yönünde:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="152"/>
      <source>In y-direction:</source>
      <translation>Y yönünde:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="171"/>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="203"/>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="261"/>
      <source>Note: The placement is expressed in local space of object being attached.</source>
      <translation type="unfinished">Note: The placement is expressed in local space of object being attached.</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="184"/>
      <source>In z-direction:</source>
      <translation>Z yönünde:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="216"/>
      <source>Around x-axis:</source>
      <translation>X ekseni etrafında:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="229"/>
      <source>Around y-axis:</source>
      <translation>Y ekseni etrafında:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="242"/>
      <source>Around z-axis:</source>
      <translation>Z ekseni etrafında:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="280"/>
      <source>Rotation around the x-axis
Note: The placement is expressed in local space of object being attached.</source>
      <translation type="unfinished">Rotation around the x-axis
Note: The placement is expressed in local space of object being attached.</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="312"/>
      <source>Rotation around the y-axis
Note: The placement is expressed in local space of object being attached.</source>
      <translation type="unfinished">Rotation around the y-axis
Note: The placement is expressed in local space of object being attached.</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="344"/>
      <source>Rotation around the z-axis
Note: The placement is expressed in local space of object being attached.</source>
      <translation type="unfinished">Rotation around the z-axis
Note: The placement is expressed in local space of object being attached.</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="367"/>
      <source>Flip sides</source>
      <translation>Yönlerini çevirin</translation>
    </message>
  </context>
  <context>
    <name>PartGui::CrossSections</name>
    <message>
      <location filename="../../CrossSections.ui" line="14"/>
      <source>Cross sections</source>
      <translation>Kesitler</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="20"/>
      <source>Guiding plane</source>
      <translation>Rehberlik düzlemi</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="26"/>
      <source>XY</source>
      <translation>XY</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="36"/>
      <source>XZ</source>
      <translation>XZ</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="43"/>
      <source>YZ</source>
      <translation>YZ</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="52"/>
      <source>Position:</source>
      <translation>Pozisyon:</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="71"/>
      <source>Sections</source>
      <translation>Kesişimler</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="83"/>
      <source>On both sides</source>
      <translation>İki tarafta da</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="92"/>
      <source>Count</source>
      <translation>Saymak</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="109"/>
      <source>Distance:</source>
      <translation>Mesafe:</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgBooleanOperation</name>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="14"/>
      <source>Boolean Operation</source>
      <translation>Mantıksal işlem</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="20"/>
      <source>Boolean operation</source>
      <translation>Mantıksal İşlem</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="32"/>
      <source>Section</source>
      <translation>Kesişim</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="39"/>
      <source>Difference</source>
      <translation>Fark</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="46"/>
      <source>Union</source>
      <translation>Birleştir</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="56"/>
      <source>Intersection</source>
      <translation>Kesişim</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="76"/>
      <source>First shape</source>
      <translation>İlk şekil</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="81"/>
      <location filename="../../DlgBooleanOperation.ui" line="119"/>
      <source>Solids</source>
      <translation>Katı maddeler</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="86"/>
      <location filename="../../DlgBooleanOperation.ui" line="124"/>
      <source>Shells</source>
      <translation>Kabuklar</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="91"/>
      <location filename="../../DlgBooleanOperation.ui" line="129"/>
      <source>Compounds</source>
      <translation>Bileşikler</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="96"/>
      <location filename="../../DlgBooleanOperation.ui" line="134"/>
      <source>Faces</source>
      <translation>Yüzler</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="114"/>
      <source>Second shape</source>
      <translation>İkinci şekil</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="155"/>
      <source>Swap selection</source>
      <translation>Seçimi değiştir</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="378"/>
      <source>Select a shape on the left side, first</source>
      <translation>Sol tarafta bir şekil seçin, önce</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="383"/>
      <source>Select a shape on the right side, first</source>
      <translation>Sağ tarafta bir şekil seçin, önce</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="388"/>
      <source>Cannot perform a boolean operation with the same shape</source>
      <translation>Aynı şekille bir boolean işlemi gerçekleştirilemiyor</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="398"/>
      <source>No active document available</source>
      <translation>Aktif bir doküman yok</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="408"/>
      <source>One of the selected objects doesn't exist anymore</source>
      <translation>Seçilen nesnelerden biri artık mevcut değil</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="415"/>
      <source>Performing union on non-solids is not possible</source>
      <translation>Katılar üzerinde birleştirme yapmak mümkün değildir</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="424"/>
      <source>Performing intersection on non-solids is not possible</source>
      <translation>Katı maddeler üzerinde kesişim gerçekleştirmek mümkün değildir</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="433"/>
      <source>Performing difference on non-solids is not possible</source>
      <translation>Katı-olmayan maddeler üzerinde fark yaratmak mümkün değildir</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgChamferEdges</name>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="1041"/>
      <source>Chamfer Edges</source>
      <translation>Pah Kenarları</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgExtrusion</name>
    <message>
      <location filename="../../DlgExtrusion.ui" line="14"/>
      <source>Extrude</source>
      <translation>İhraç etmek</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="26"/>
      <source>Direction</source>
      <translation>Yön</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="32"/>
      <source>If checked, direction of extrusion is reversed.</source>
      <translation>İşaretlenirse, ekstrüzyon yönü tersine çevrilir.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="35"/>
      <source>Reversed</source>
      <translation>Ters çevirilmiş</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="42"/>
      <source>Specify direction manually using X,Y,Z values.</source>
      <translation>X, Y, Z değerlerini kullanarak manuel olarak yön belirtin.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="45"/>
      <source>Custom direction:</source>
      <translation>Özel yön:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="52"/>
      <source>Extrude perpendicularly to plane of input shape.</source>
      <translation>Giriş şekli düzlemine dik olarak itin.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="55"/>
      <source>Along normal</source>
      <translation>Normal boyunca</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="65"/>
      <source>Click to start selecting an edge in 3d view.</source>
      <translation>Bir kenarın 3D görünümde seçilmesine başlamak için tıklayın.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="68"/>
      <location filename="../../DlgExtrusion.cpp" line="208"/>
      <source>Select</source>
      <translation>Seç</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="78"/>
      <source>Set direction to match a direction of straight edge. Hint: to account for length of the edge too, set both lengths to zero.</source>
      <translation>Doğru kenarı yönüne uyacak şekilde yönü ayarlayın. İpucu: Kenar uzunluğunu hesaba katmak için her iki uzunluğu da sıfıra ayarlayın.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="81"/>
      <source>Along edge:</source>
      <translation>Kenar boyunca:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="99"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="122"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="145"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="179"/>
      <source>Length</source>
      <translation>Uzunluk</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="185"/>
      <source>Along:</source>
      <translation>Boyunca:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="204"/>
      <source>Length to extrude along direction (can be negative). If both lengths are zero, magnitude of direction is used.</source>
      <translation>Yön boyunca ekstrüzyon yapılacak uzunluk (negatif olabilir). Her iki uzunluk da sıfırsa, yönün büyüklüğü kullanılır.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="223"/>
      <source>Against:</source>
      <translation>Karşısında:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="242"/>
      <source>Length to extrude against direction (can be negative).</source>
      <translation>Yön doğrultusunda ekstrüzyon yapılacak uzunluk (negatif olabilir).</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="261"/>
      <source>Distribute extrusion length equally to both sides.</source>
      <translation>Ekstrüzyon uzunluğunu her iki tarafa da eşit dağıtın.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="264"/>
      <source>Symmetric</source>
      <translation>Simetrik</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="276"/>
      <source>Taper outward angle</source>
      <translation>Dışa açılan koni açısı</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="289"/>
      <location filename="../../DlgExtrusion.ui" line="314"/>
      <source>Apply slope (draft) to extrusion side faces.</source>
      <translation>Ekstrüzyon yan yüzlerine eğimi (taslak) uygulayın.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="335"/>
      <source>If checked, extruding closed wires will give solids, not shells.</source>
      <translation>İşaretlenirse, ekstrüzyonla üretilen kapalı kablolar kabuk değil katılar verecektir.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="338"/>
      <source>Create solid</source>
      <translation>Katı oluştur</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="368"/>
      <source>Shape</source>
      <translation>Şekil</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="182"/>
      <source>Selecting...</source>
      <translation>Seçiliyor...</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="423"/>
      <source>The document '%1' doesn't exist.</source>
      <translation type="unfinished">The document '%1' doesn't exist.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="470"/>
      <location filename="../../DlgExtrusion.cpp" line="475"/>
      <source>Creating Extrusion failed.
%1</source>
      <translation type="unfinished">Creating Extrusion failed.
%1</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="542"/>
      <source>Object not found: %1</source>
      <translation>Nesne bulunamadı: %1</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="604"/>
      <source>No shapes selected for extrusion. Select some, first.</source>
      <translation>Ekstrüzyon için şekil seçilmedi. Önce bir miktar seçin.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="625"/>
      <source>Extrusion direction link is invalid.

%1</source>
      <translation>Ekstrüzyon yön bağlantısı geçersiz.

%1</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="627"/>
      <source>Direction mode is to use an edge, but no edge is linked.</source>
      <translation>Yön modu bir kenar kullanmaktır, ancak kenar birbirine bağlı değildir.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="650"/>
      <source>Can't determine normal vector of shape to be extruded. Please use other mode. 

(%1)</source>
      <translation>Ekstrüzyon yapılacak normal vektör şekli belirlenemiyor. Lütfen diğer modu kullanın</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="660"/>
      <source>Extrusion direction vector is zero-length. It must be non-zero.</source>
      <translation type="unfinished">Extrusion direction vector is zero-length. It must be non-zero.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="671"/>
      <source>Total extrusion length is zero (length1 == -length2). It must be nonzero.</source>
      <translation>Toplam ekstrüzyon uzunluğu sıfırdır (uzunluk1 ==-uzunluk2). Sıfırdan farklı olmamalıdır.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgFilletEdges</name>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="14"/>
      <source>Fillet Edges</source>
      <translation>Dolgu Kenarları</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="20"/>
      <source>Shape</source>
      <translation>Şekil</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="32"/>
      <source>Selected shape:</source>
      <translation>Seçilen şekil:</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="40"/>
      <source>No selection</source>
      <translation>Seçim yok</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="51"/>
      <source>Fillet Parameter</source>
      <translation>Dolgu Parametresi</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="57"/>
      <source>Selection</source>
      <translation>seçim</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="63"/>
      <source>Select edges</source>
      <translation>Kenarları seç</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="73"/>
      <source>Select faces</source>
      <translation>Yüzleri seç</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="80"/>
      <source>All</source>
      <translation>Hepsi</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="87"/>
      <source>None</source>
      <translation>Hiçbiri</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="110"/>
      <source>Fillet type:</source>
      <translation>Dolgu tipi:</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="118"/>
      <source>Constant Radius</source>
      <translation>Sabit Yarıçap</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="123"/>
      <source>Variable Radius</source>
      <translation>Değişken Yarıçap</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="142"/>
      <source>Radius:</source>
      <translation>Yarıçap:</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="266"/>
      <source>Length:</source>
      <translation>Uzunluk:</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="267"/>
      <source>Constant Length</source>
      <translation>Sabit Uzunluk</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="268"/>
      <source>Variable Length</source>
      <translation>Değişken uzunluk</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="270"/>
      <source>Edges to chamfer</source>
      <translation>Pah kırma kenarları</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="271"/>
      <location filename="../../DlgFilletEdges.cpp" line="838"/>
      <source>Start length</source>
      <translation>Başlangıç uzunluğu</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="272"/>
      <source>End length</source>
      <translation>Bitiş uzunluğu</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="275"/>
      <source>Edges to fillet</source>
      <translation>Dolgu için Kenarlar</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="276"/>
      <location filename="../../DlgFilletEdges.cpp" line="840"/>
      <source>Start radius</source>
      <translation>Başlangıç yarıçapı</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="277"/>
      <source>End radius</source>
      <translation>Uç yarıçapı</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="687"/>
      <location filename="../../DlgFilletEdges.cpp" line="747"/>
      <source>Edge%1</source>
      <translation>Kenar%1</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="830"/>
      <source>Length</source>
      <translation>Uzunluk</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="832"/>
      <source>Radius</source>
      <translation>Yarıçap</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="886"/>
      <source>No shape selected</source>
      <translation>Şekil seçilmedi</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="887"/>
      <source>No valid shape is selected.
Please select a valid shape in the drop-down box first.</source>
      <translation>Geçerli bir şekil seçilmedi.
Önce açılır kutuda geçerli bir şekil seçin.</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="938"/>
      <source>No edge selected</source>
      <translation>Kenar seçilmedi</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="939"/>
      <source>No edge entity is checked to fillet.
Please check one or more edge entities first.</source>
      <translation>Kenar varlığı filet için kontrol edilmiyor.
Lütfen önce bir veya daha fazla kenarlı varlıkları kontrol edin.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgImportExportIges</name>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="14"/>
      <source>IGES</source>
      <translation>IGES</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="20"/>
      <source>Export</source>
      <translation type="unfinished">Export</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="26"/>
      <source>Units for export of IGES</source>
      <translation>IGES dışa aktarım birimleri</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="47"/>
      <source>Millimeter</source>
      <translation type="unfinished">Millimeter</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="52"/>
      <source>Meter</source>
      <translation type="unfinished">Meter</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="57"/>
      <source>Inch</source>
      <translation type="unfinished">Inch</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="65"/>
      <source>Write solids and shells as</source>
      <translation>Katı ve kabukları şu şekilde yaz</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="71"/>
      <source>Solids and shells will be exported as trimmed surface</source>
      <translation type="unfinished">Solids and shells will be exported as trimmed surface</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="74"/>
      <source>Groups of Trimmed Surfaces (type 144)</source>
      <translation>Kesilmiş Yüzeylerin Grupları (144 tipi)</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="84"/>
      <source>Solids will be exported as manifold solid B-Rep object, shells as shell</source>
      <translation type="unfinished">Solids will be exported as manifold solid B-Rep object, shells as shell</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="87"/>
      <source>Solids (type 186) and Shells (type 514) / B-REP mode</source>
      <translation>Katılar (tip 186) ve kabuklar (tür 514) / B-REP modu</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="100"/>
      <source>Import</source>
      <translation>İçe aktar</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="106"/>
      <source>Blank entities will not be imported</source>
      <translation type="unfinished">Blank entities will not be imported</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="109"/>
      <source>Skip blank entities</source>
      <translation>Boş varlıkları atla</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="119"/>
      <source>If not empty, field contents will be used in the IGES file header</source>
      <translation type="unfinished">If not empty, field contents will be used in the IGES file header</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="122"/>
      <source>Header</source>
      <translation>Başlık</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="128"/>
      <source>Company</source>
      <translation>Şirket</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="138"/>
      <source>Product</source>
      <translation>Ürün</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="151"/>
      <source>Author</source>
      <translation>Yazar</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgImportExportStep</name>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="14"/>
      <source>STEP</source>
      <translation>STEP</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="20"/>
      <source>Export</source>
      <translation type="unfinished">Export</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="26"/>
      <source>Scheme</source>
      <translation>Düzen</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="64"/>
      <source>Uncheck this to skip invisible object when exporting, which is useful for CADs that do not support invisibility STEP styling.</source>
      <translation type="unfinished">Uncheck this to skip invisible object when exporting, which is useful for CADs that do not support invisibility STEP styling.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="67"/>
      <source>Export invisible objects</source>
      <translation>Görünmez nesneleri dışa aktar</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="80"/>
      <source>Units for export of STEP</source>
      <translation>STEP dışa aktarım birimleri</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="87"/>
      <source>Write out curves in parametric space of surface</source>
      <translation>Parametrik alan yüzeyinde eğrileri yazma</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="95"/>
      <source>Millimeter</source>
      <translation type="unfinished">Millimeter</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="100"/>
      <source>Meter</source>
      <translation type="unfinished">Meter</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="105"/>
      <source>Inch</source>
      <translation type="unfinished">Inch</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="126"/>
      <source>Use legacy exporter</source>
      <translation type="unfinished">Use legacy exporter</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="139"/>
      <source>Check this option to keep the placement information when exporting
a single object. Please note that when import back the STEP file, the
placement will be encoded into the shape geometry, instead of keeping
it inside the Placement property.</source>
      <translation type="unfinished">Check this option to keep the placement information when exporting
a single object. Please note that when import back the STEP file, the
placement will be encoded into the shape geometry, instead of keeping
it inside the Placement property.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="145"/>
      <source>Export single object placement</source>
      <translation type="unfinished">Export single object placement</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="174"/>
      <source>If not empty, field contents will be used in the STEP file header.</source>
      <translation type="unfinished">If not empty, field contents will be used in the STEP file header.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="177"/>
      <source>Header</source>
      <translation>Başlık</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="189"/>
      <source>Author</source>
      <translation>Yazar</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="196"/>
      <source>Product</source>
      <translation>Ürün</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="203"/>
      <source>Company</source>
      <translation>Şirket</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="216"/>
      <source>Import</source>
      <translation>İçe aktar</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="222"/>
      <source>If checked, no Compound merge will be done
during file reading (slower but higher details).</source>
      <translation type="unfinished">If checked, no Compound merge will be done
during file reading (slower but higher details).</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="226"/>
      <source>Enable STEP Compound merge</source>
      <translation>STEP bileşeni birleşimine izin ver</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="242"/>
      <source>Select this to use App::LinkGroup as group container, or else use App::Part.</source>
      <translation type="unfinished">Select this to use App::LinkGroup as group container, or else use App::Part.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="245"/>
      <source>Use LinkGroup</source>
      <translation type="unfinished">Use LinkGroup</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="258"/>
      <source>Select this to not import any invisible objects.</source>
      <translation type="unfinished">Select this to not import any invisible objects.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="261"/>
      <source>Import invisible objects</source>
      <translation>Görünmez nesneleri içe aktar</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="274"/>
      <source>Reduce number of objects using Link array</source>
      <translation type="unfinished">Reduce number of objects using Link array</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="277"/>
      <source>Reduce number of objects</source>
      <translation type="unfinished">Reduce number of objects</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="290"/>
      <source>Expand compound shape with multiple solids</source>
      <translation type="unfinished">Expand compound shape with multiple solids</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="293"/>
      <source>Expand compound shape</source>
      <translation type="unfinished">Expand compound shape</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="306"/>
      <location filename="../../DlgImportExportStep.ui" line="309"/>
      <source>Show progress bar when importing</source>
      <translation type="unfinished">Show progress bar when importing</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="322"/>
      <source>Do not use instance name. Useful for some legacy STEP file with non-meaningful auto generated instance names.</source>
      <translation type="unfinished">Do not use instance name. Useful for some legacy STEP file with non-meaningful auto generated instance names.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="325"/>
      <source>Ignore instance names</source>
      <translation type="unfinished">Ignore instance names</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="340"/>
      <source>Mode</source>
      <translation>Mod</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="360"/>
      <source>Single document</source>
      <translation>Tek belge</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="365"/>
      <source>Assembly per document</source>
      <translation type="unfinished">Assembly per document</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="370"/>
      <source>Assembly per document in sub-directory</source>
      <translation type="unfinished">Assembly per document in sub-directory</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="375"/>
      <source>Object per document</source>
      <translation>Belge başına nesne</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="380"/>
      <source>Object per document in sub-directory</source>
      <translation type="unfinished">Object per document in sub-directory</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.cpp" line="207"/>
      <source>This parameter indicates whether parametric curves (curves in parametric space of surface)
should be written into the STEP file. This parameter can be set to off in order to minimize
the size of the resulting STEP file.</source>
      <translation type="unfinished">This parameter indicates whether parametric curves (curves in parametric space of surface)
should be written into the STEP file. This parameter can be set to off in order to minimize
the size of the resulting STEP file.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartBox</name>
    <message>
      <location filename="../../DlgPartBox.ui" line="14"/>
      <source>Box definition</source>
      <translation>Kutu tanımı</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="20"/>
      <source>Position:</source>
      <translation>Pozisyon:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="78"/>
      <source>Direction:</source>
      <translation type="unfinished">Direction:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="85"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="92"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="99"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="109"/>
      <source>Size:</source>
      <translation>Boyut:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="160"/>
      <source>Height:</source>
      <translation>Yükseklik:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="167"/>
      <source>Width:</source>
      <translation>Genişlik:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="174"/>
      <source>Length:</source>
      <translation>Uzunluk:</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartCylinder</name>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="14"/>
      <source>Cylinder definition</source>
      <translation>Silindir tanımı</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="20"/>
      <source>Position:</source>
      <translation>Pozisyon:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="39"/>
      <source>Direction:</source>
      <translation type="unfinished">Direction:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="46"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="53"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="60"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="109"/>
      <source>Parameter</source>
      <translation>Parametre</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="121"/>
      <source>Height:</source>
      <translation>Yükseklik:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="128"/>
      <source>Radius:</source>
      <translation>Yarıçap:</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartImportIges</name>
    <message>
      <location filename="../../DlgPartImportIges.ui" line="14"/>
      <source>IGES input file</source>
      <translation>IGES giriş dosyası</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportIges.ui" line="20"/>
      <source>File Name</source>
      <translation>Dosya adı</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportIges.ui" line="54"/>
      <source>...</source>
      <translation>...</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartImportIgesImp</name>
    <message>
      <location filename="../../DlgPartImportIgesImp.cpp" line="73"/>
      <source>IGES</source>
      <translation>IGES</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportIgesImp.cpp" line="74"/>
      <source>All Files</source>
      <translation>Tüm Dosyalar</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartImportStep</name>
    <message>
      <location filename="../../DlgPartImportStep.ui" line="14"/>
      <source>Step input file</source>
      <translation>Adım girdi dosyası</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportStep.ui" line="20"/>
      <source>File Name</source>
      <translation>Dosya adı</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportStep.ui" line="54"/>
      <source>...</source>
      <translation>...</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartImportStepImp</name>
    <message>
      <location filename="../../DlgPartImportStepImp.cpp" line="72"/>
      <source>STEP</source>
      <translation>STEP</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportStepImp.cpp" line="73"/>
      <source>All Files</source>
      <translation>Tüm Dosyalar</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPrimitives</name>
    <message>
      <location filename="../../DlgPrimitives.ui" line="14"/>
      <source>Geometric Primitives</source>
      <translation>Geometrik Primitifler</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="33"/>
      <location filename="../../DlgPrimitives.cpp" line="726"/>
      <source>Plane</source>
      <translation>Düzlem</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="42"/>
      <location filename="../../DlgPrimitives.cpp" line="743"/>
      <source>Box</source>
      <translation type="unfinished">Box</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="51"/>
      <location filename="../../DlgPrimitives.cpp" line="764"/>
      <source>Cylinder</source>
      <translation>Silindir</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="60"/>
      <location filename="../../DlgPrimitives.cpp" line="783"/>
      <source>Cone</source>
      <translation>Koni</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="69"/>
      <location filename="../../DlgPrimitives.cpp" line="802"/>
      <source>Sphere</source>
      <translation>Küre</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="78"/>
      <location filename="../../DlgPrimitives.cpp" line="825"/>
      <source>Ellipsoid</source>
      <translation>Elipsoit</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="87"/>
      <location filename="../../DlgPrimitives.cpp" line="846"/>
      <source>Torus</source>
      <translation>Halka</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="96"/>
      <location filename="../../DlgPrimitives.cpp" line="867"/>
      <source>Prism</source>
      <translation>Prizma</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="105"/>
      <location filename="../../DlgPrimitives.cpp" line="898"/>
      <source>Wedge</source>
      <translation>Kama</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="114"/>
      <location filename="../../DlgPrimitives.cpp" line="920"/>
      <source>Helix</source>
      <translation>Helis</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="123"/>
      <location filename="../../DlgPrimitives.cpp" line="937"/>
      <source>Spiral</source>
      <translation>Sarmal</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="132"/>
      <location filename="../../DlgPrimitives.cpp" line="954"/>
      <source>Circle</source>
      <translation>Daire</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="141"/>
      <location filename="../../DlgPrimitives.cpp" line="973"/>
      <source>Ellipse</source>
      <translation>Elips</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="150"/>
      <source>Point</source>
      <translation>Nokta</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="159"/>
      <location filename="../../DlgPrimitives.cpp" line="1013"/>
      <source>Line</source>
      <translation>Çizgi</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="168"/>
      <location filename="../../DlgPrimitives.cpp" line="1028"/>
      <source>Regular polygon</source>
      <translation>Düzenli poligon</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="180"/>
      <source>Parameter</source>
      <translation>Parametre</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="253"/>
      <location filename="../../DlgPrimitives.ui" line="387"/>
      <source>Width:</source>
      <translation>Genişlik:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="260"/>
      <location filename="../../DlgPrimitives.ui" line="380"/>
      <source>Length:</source>
      <translation>Uzunluk:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="373"/>
      <location filename="../../DlgPrimitives.ui" line="520"/>
      <location filename="../../DlgPrimitives.ui" line="731"/>
      <location filename="../../DlgPrimitives.ui" line="1419"/>
      <location filename="../../DlgPrimitives.ui" line="1752"/>
      <source>Height:</source>
      <translation>Yükseklik:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="448"/>
      <source>Rotation angle:</source>
      <translation>Dönme açısı:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="513"/>
      <location filename="../../DlgPrimitives.ui" line="917"/>
      <location filename="../../DlgPrimitives.ui" line="1738"/>
      <location filename="../../DlgPrimitives.ui" line="1887"/>
      <location filename="../../DlgPrimitives.ui" line="1970"/>
      <source>Radius:</source>
      <translation>Yarıçap:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="553"/>
      <location filename="../../DlgPrimitives.ui" line="1439"/>
      <source>Angle in first direction:</source>
      <translation>İlk yöndeki açı:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="560"/>
      <location filename="../../DlgPrimitives.ui" line="1446"/>
      <source>Angle in first direction</source>
      <translation>İlk yöndeki açı</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="579"/>
      <location filename="../../DlgPrimitives.ui" line="1465"/>
      <source>Angle in second direction:</source>
      <translation>İkinci yöndeki açı:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="586"/>
      <location filename="../../DlgPrimitives.ui" line="1472"/>
      <source>Angle in second direction</source>
      <translation>İkinci yöndeki açı</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="640"/>
      <location filename="../../DlgPrimitives.ui" line="1759"/>
      <source>Angle:</source>
      <translation>Açı:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="738"/>
      <location filename="../../DlgPrimitives.ui" line="998"/>
      <location filename="../../DlgPrimitives.ui" line="1318"/>
      <source>Radius 1:</source>
      <translation>Yarıçap 1:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="745"/>
      <location filename="../../DlgPrimitives.ui" line="1005"/>
      <location filename="../../DlgPrimitives.ui" line="1311"/>
      <source>Radius 2:</source>
      <translation>Yarıçap 2:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="829"/>
      <location filename="../../DlgPrimitives.ui" line="1077"/>
      <source>U parameter:</source>
      <translation>U parametresi:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="836"/>
      <source>V parameters:</source>
      <translation>V parametreleri:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1012"/>
      <source>Radius 3:</source>
      <translation>Radius 3:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1100"/>
      <location filename="../../DlgPrimitives.ui" line="1217"/>
      <source>V parameter:</source>
      <translation>V parametresi:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1194"/>
      <source>U Parameter:</source>
      <translation>U Parametresi:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1389"/>
      <location filename="../../DlgPrimitives.ui" line="2418"/>
      <source>Polygon:</source>
      <translation>Çokgen:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1412"/>
      <location filename="../../DlgPrimitives.ui" line="2441"/>
      <source>Circumradius:</source>
      <translation>Circumradius:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1518"/>
      <source>X min/max:</source>
      <translation>X minimum / maksimum:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1525"/>
      <source>Y min/max:</source>
      <translation>Y minimum / maksimum:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1532"/>
      <source>Z min/max:</source>
      <translation>Z minimum / maksimum:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1539"/>
      <source>X2 min/max:</source>
      <translation>X2 minimum/maksimum:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1546"/>
      <source>Z2 min/max:</source>
      <translation>Z2 minimum/maksimum:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1745"/>
      <source>Pitch:</source>
      <translation>Hatve (Aralık):</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1766"/>
      <source>Coordinate system:</source>
      <translation>Koordinat sistemi:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1774"/>
      <source>Right-handed</source>
      <translation>Sağ el kullanan</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1779"/>
      <source>Left-handed</source>
      <translation>Sol el kullanan</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1894"/>
      <source>Growth:</source>
      <translation>Büyüme:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1901"/>
      <source>Number of rotations:</source>
      <translation>Dönme sayısı:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1977"/>
      <location filename="../../DlgPrimitives.ui" line="2086"/>
      <source>Angle 1:</source>
      <translation>Açı 1:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1984"/>
      <location filename="../../DlgPrimitives.ui" line="2093"/>
      <source>Angle 2:</source>
      <translation>Açı 2:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2044"/>
      <source>From three points</source>
      <translation>Üç noktadan</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2072"/>
      <source>Major radius:</source>
      <translation>Büyük yarıçap:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2079"/>
      <source>Minor radius:</source>
      <translation>Minör yarıçap:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2170"/>
      <location filename="../../DlgPrimitives.ui" line="2268"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2180"/>
      <location filename="../../DlgPrimitives.ui" line="2301"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2190"/>
      <location filename="../../DlgPrimitives.ui" line="2334"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2251"/>
      <source>Start point</source>
      <translation>Başlangıç noktası</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2258"/>
      <source>End point</source>
      <translation>Son nokta</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.cpp" line="990"/>
      <source>Vertex</source>
      <translation type="unfinished">Vertex</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.cpp" line="1037"/>
      <location filename="../../DlgPrimitives.cpp" line="1107"/>
      <location filename="../../DlgPrimitives.cpp" line="1115"/>
      <source>Create %1</source>
      <translation>%1 Oluştur</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.cpp" line="1038"/>
      <source>No active document</source>
      <translation>Etkin belge yok</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.cpp" line="2036"/>
      <source>&amp;Create</source>
      <translation>&amp;Oluştur</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgProjectionOnSurface</name>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="14"/>
      <source>Projection on surface</source>
      <translation>Yüzeye yansıtma</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="20"/>
      <source>Select projection surface</source>
      <translation>Yansıtma yüzeyini seçin</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="31"/>
      <source>Add face</source>
      <translation>Yüzey ekle</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="38"/>
      <source>Add wire</source>
      <translation type="unfinished">Add wire</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="45"/>
      <source>Add edge</source>
      <translation type="unfinished">Add edge</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="56"/>
      <source>Show all</source>
      <translation>Tümünü göster</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="66"/>
      <source>Show faces</source>
      <translation>Yüzleri göster</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="76"/>
      <source>Show Edges</source>
      <translation>Kenarları Göster</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="92"/>
      <source>Extrude height</source>
      <translation type="unfinished">Extrude height</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="116"/>
      <source>Solid depth</source>
      <translation type="unfinished">Solid depth</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="141"/>
      <source>Direction</source>
      <translation>Yön</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="147"/>
      <source>Get current camera direction</source>
      <translation type="unfinished">Get current camera direction</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="156"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="186"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="213"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.cpp" line="134"/>
      <source>Projection Object</source>
      <translation>Nesne Yansıtma</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.cpp" line="162"/>
      <source>Have no active document!!!</source>
      <translation type="unfinished">Have no active document!!!</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.cpp" line="169"/>
      <source>Can not create a projection object!!!</source>
      <translation type="unfinished">Can not create a projection object!!!</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgRevolution</name>
    <message>
      <location filename="../../DlgRevolution.ui" line="20"/>
      <source>Revolve</source>
      <translation>Döndür</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="32"/>
      <source>If checked, revolving wires will produce solids. If not, revolving a wire yields a shell.</source>
      <translation>İşaretlenirse, dönen teller katı üretecektir. Değilse, bir telin döndürülmesi kabuk oluşturur.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="35"/>
      <source>Create Solid</source>
      <translation>Katı oluştur</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="52"/>
      <source>Shape</source>
      <translation>Şekil</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="71"/>
      <source>Angle:</source>
      <translation>Açı:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="111"/>
      <source>Revolution axis</source>
      <translation>Devir ekseni</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="119"/>
      <source>Center X:</source>
      <translation>X merkezi:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="139"/>
      <source>Center Y:</source>
      <translation>Y merkezi:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="159"/>
      <source>Center Z:</source>
      <translation>Z merkezi:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="201"/>
      <location filename="../../DlgRevolution.ui" line="242"/>
      <source>Click to set this as axis</source>
      <translation>Bunu eksen olarak ayarlamak için tıklayın</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="204"/>
      <source>Dir. X:</source>
      <translation>Dir. X:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="245"/>
      <source>Dir. Y:</source>
      <translation>Dir. Y:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="283"/>
      <source>Dir. Z:</source>
      <translation>Dir. Z:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="305"/>
      <location filename="../../DlgRevolution.cpp" line="447"/>
      <source>Select reference</source>
      <translation>Referans seç</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="325"/>
      <source>If checked, revolution will extend forwards and backwards by half the angle.</source>
      <translation>İşaretlenirse, devrim açının yarısına kadar ileriye ve geriye doğru uzar.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="328"/>
      <source>Symmetric angle</source>
      <translation>Simetrik açı</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="172"/>
      <source>Object not found: %1</source>
      <translation>Nesne bulunamadı: %1</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="253"/>
      <source>Select a shape for revolution, first.</source>
      <translation type="unfinished">Select a shape for revolution, first.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="269"/>
      <location filename="../../DlgRevolution.cpp" line="274"/>
      <location filename="../../DlgRevolution.cpp" line="279"/>
      <source>Revolution axis link is invalid.

%1</source>
      <translation>Devir ekseni bağlantısı geçersiz.

%1</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="288"/>
      <source>Revolution axis direction is zero-length. It must be non-zero.</source>
      <translation>Devir ekseni yönü sıfır uzunluktadır. Sıfır olmamalıdır.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="298"/>
      <source>Revolution angle span is zero. It must be non-zero.</source>
      <translation>Devir açısı aralığı sıfır. Sıfır olmamalıdır.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="427"/>
      <location filename="../../DlgRevolution.cpp" line="431"/>
      <source>Creating Revolve failed.

%1</source>
      <translation>Döndürerek katılama başarısız oldu.

%1</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="443"/>
      <source>Selecting... (line or arc)</source>
      <translation>Seçiliyor... (çizgi veya ark)</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgSettings3DViewPart</name>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="14"/>
      <source>Shape view</source>
      <translation>Şekil görünümü</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="39"/>
      <source>Tessellation</source>
      <translation>Mozaikleme</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="59"/>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="87"/>
      <source>Defines the deviation of tessellation to the actual surface</source>
      <translation>Mozaenin gerçek yüzeye sapmasını tanımlar</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="90"/>
      <source>&lt;html&gt;&lt;head&gt;&lt;meta name="qrichtext" content="1" /&gt;&lt;/head&gt;&lt;body style=" white-space: pre-wrap; font-family:MS Shell Dlg 2; font-size:7.8pt; font-weight:400; font-style:normal; text-decoration:none;"&gt;&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-weight:600;"&gt;Tessellation&lt;/span&gt;&lt;/p&gt;&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;"&gt;&lt;/p&gt;&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;"&gt;&lt;span style=" font-weight:400;"&gt;Defines the maximum deviation of the tessellated mesh to the surface. The smaller the value is the slower the render speed which results in increased detail/resolution.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head&gt;&lt;meta name="qrichtext" content="1" /&gt;&lt;/head&gt;&lt;body style=" white-space: pre-wrap; font-family:MS Shell Dlg 2; font-size:7.8pt; font-weight:400; font-style:normal; text-decoration:none;"&gt;&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-weight:600;"&gt;Tessellation&lt;/span&gt;&lt;/p&gt;&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;"&gt;&lt;/p&gt;&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;"&gt;&lt;span style=" font-weight:400;"&gt;Mozaikli ağın, yüzeye olan en fazla sapmasını tanımlar. Değer ne kadar küçük olursa, ayrıntı / çözünürlük artışıyla sonuçlanan oluşturma hızı o kadar yavaş olur.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="93"/>
      <source>Maximum deviation depending on the model bounding box</source>
      <translation>Model sınırlama kutusuna bağlı olarak maksimum sapma</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="100"/>
      <source>Maximum angular deflection</source>
      <translation>Maksimum açısal sapma</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="107"/>
      <source> °</source>
      <translation> °</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPartImp.cpp" line="69"/>
      <source>Deviation</source>
      <translation type="unfinished">Deviation</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPartImp.cpp" line="70"/>
      <source>Setting a too small deviation causes the tessellation to take longerand thus freezes or slows down the GUI.</source>
      <translation type="unfinished">Setting a too small deviation causes the tessellation to take longerand thus freezes or slows down the GUI.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgSettingsGeneral</name>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="14"/>
      <source>General</source>
      <translation>Genel</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="20"/>
      <source>Model settings</source>
      <translation>Model ayarları</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="26"/>
      <source>Automatically check model after boolean operation</source>
      <translation>Mantıksal işlem sonrası, model otomatik kontrolü</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="39"/>
      <source>Automatically refine model after boolean operation</source>
      <translation>Mantıksal işlemden sonra modeli otomatik olarak iyileştir</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="52"/>
      <source>Automatically refine model after sketch-based operation</source>
      <translation>Eskiz temelli işlem sonrasında modeli otomatik olarak düzelt</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="68"/>
      <source>Object naming</source>
      <translation>Nesnenin adlandırılması</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="77"/>
      <source>Add name of base object</source>
      <translation>Temel nesnenin adını ekle</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgSettingsObjectColor</name>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="14"/>
      <source>Shape appearance</source>
      <translation type="unfinished">Shape appearance</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="20"/>
      <source>Default Shape view properties</source>
      <translation type="unfinished">Default Shape view properties</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="34"/>
      <source>Shape color</source>
      <translation>Şekil rengi</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="41"/>
      <source>The default color for new shapes</source>
      <translation>Yeni şekiller için varsayılan renk</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="61"/>
      <source>Use random color instead</source>
      <translation type="unfinished">Use random color instead</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="64"/>
      <source>Random</source>
      <translation type="unfinished">Random</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="83"/>
      <source>Line color</source>
      <translation>Çizgi rengi</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="90"/>
      <source>The default line color for new shapes</source>
      <translation>Yeni şekiller için varsayılan çizgi rengi</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="116"/>
      <source>Line width</source>
      <translation>Çizgi Kalınlığı</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="123"/>
      <source>The default line thickness for new shapes</source>
      <translation>Yeni şekiller için varsayılan çizgi kalınlığı</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="126"/>
      <location filename="../../DlgSettingsObjectColor.ui" line="194"/>
      <source>px</source>
      <translation>px</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="151"/>
      <source>Vertex color</source>
      <translation type="unfinished">Vertex color</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="158"/>
      <source>The default color for new vertices</source>
      <translation type="unfinished">The default color for new vertices</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="184"/>
      <source>Vertex size</source>
      <translation type="unfinished">Vertex size</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="191"/>
      <source>The default size for new vertices</source>
      <translation type="unfinished">The default size for new vertices</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="219"/>
      <source>Bounding box color</source>
      <translation>Sınırlandırma kutusu rengi</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="226"/>
      <source>The color of bounding boxes in the 3D view</source>
      <translation>Sınırlayıcı kutuların renkleri 3D görünümde</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="252"/>
      <source>Bounding box font size</source>
      <translation type="unfinished">Bounding box font size</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="259"/>
      <source>The font size of bounding boxes in the 3D view</source>
      <translation type="unfinished">The font size of bounding boxes in the 3D view</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="293"/>
      <source>Bottom side of surface will be rendered the same way than top.
If not checked, it depends on the option "Backlight color"
(preferences section Display -&gt; 3D View); either the backlight color
will be used or black.</source>
      <translation type="unfinished">Bottom side of surface will be rendered the same way than top.
If not checked, it depends on the option "Backlight color"
(preferences section Display -&gt; 3D View); either the backlight color
will be used or black.</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="299"/>
      <source>Two-side rendering</source>
      <translation>İki taraflı işle (render)</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="333"/>
      <source>Default Annotation color</source>
      <translation type="unfinished">Default Annotation color</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="347"/>
      <source>Text color</source>
      <translation>Metin rengi</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="354"/>
      <source>Text color for document annotations</source>
      <translation type="unfinished">Text color for document annotations</translation>
    </message>
  </context>
  <context>
    <name>PartGui::Location</name>
    <message>
      <location filename="../../Location.ui" line="14"/>
      <source>Location</source>
      <translation>Yer</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="29"/>
      <source>Position</source>
      <translation type="unfinished">Position</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="37"/>
      <source>X</source>
      <translation>X</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="54"/>
      <source>Y</source>
      <translation>Y</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="71"/>
      <source>Z</source>
      <translation>Z</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="90"/>
      <source>3D view</source>
      <translation>3B</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="106"/>
      <source>Use custom vector for pad direction otherwise
the sketch plane's normal vector will be used</source>
      <translation>Katılaştırıcı yönü için özel vektör kullanın
yoksa eskiz düzlemine dik vektör kullanılacak</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="110"/>
      <source>Rotation axis</source>
      <translation type="unfinished">Rotation axis</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="118"/>
      <source>x</source>
      <translation>x</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="125"/>
      <source>x-component of direction vector</source>
      <translation>yön vektörünün x bileşeni</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="147"/>
      <source>y</source>
      <translation>y</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="154"/>
      <source>y-component of direction vector</source>
      <translation>yön vektörünün y bileşeni</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="176"/>
      <source>z</source>
      <translation>z</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="183"/>
      <source>z-component of direction vector</source>
      <translation>yön vektörünün z bileşeni</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="208"/>
      <source>Angle</source>
      <translation>Açı</translation>
    </message>
  </context>
  <context>
    <name>PartGui::LoftWidget</name>
    <message>
      <location filename="../../TaskLoft.cpp" line="80"/>
      <source>Available profiles</source>
      <translation>Kullanılabilir profiller</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="81"/>
      <source>Selected profiles</source>
      <translation>Seçilen profiller</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="180"/>
      <source>Too few elements</source>
      <translation>Çok az öğe</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="180"/>
      <source>At least two vertices, edges, wires or faces are required.</source>
      <translation>En az iki köşe, kenar, tel veya yüz gereklidir.</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="214"/>
      <source>Input error</source>
      <translation>Girdi hatası</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="243"/>
      <source>Vertex/Edge/Wire/Face</source>
      <translation>Köşe/Kenar/Tel/Yüzey</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="244"/>
      <source>Loft</source>
      <translation>Çatıla</translation>
    </message>
  </context>
  <context>
    <name>PartGui::Mirroring</name>
    <message>
      <location filename="../../Mirroring.ui" line="14"/>
      <source>Mirroring</source>
      <translation>Yansıtma</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="33"/>
      <source>Shapes</source>
      <translation>Şekiller</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="41"/>
      <source>Mirror plane:</source>
      <translation>Ayna düzlemi:</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="49"/>
      <source>XY plane</source>
      <translation>XY Düzlemi</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="54"/>
      <source>XZ plane</source>
      <translation>XZ Düzlemi</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="59"/>
      <source>YZ plane</source>
      <translation>YZ Düzlemi</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="67"/>
      <source>Base point</source>
      <translation>Taban noktası</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="73"/>
      <source>x</source>
      <translation>x</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="96"/>
      <source>y</source>
      <translation>y</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="119"/>
      <source>z</source>
      <translation>z</translation>
    </message>
    <message>
      <location filename="../../Mirroring.cpp" line="122"/>
      <source>Select a shape for mirroring, first.</source>
      <translation>Önce yansıtma için bir şekil seçin.</translation>
    </message>
    <message>
      <location filename="../../Mirroring.cpp" line="129"/>
      <source>No such document '%1'.</source>
      <translation>'%1' adlı belge bulunamadı.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::OffsetWidget</name>
    <message>
      <location filename="../../TaskOffset.cpp" line="198"/>
      <source>Input error</source>
      <translation>Girdi hatası</translation>
    </message>
  </context>
  <context>
    <name>PartGui::ResultModel</name>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="348"/>
      <source>Name</source>
      <translation>Isim</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="350"/>
      <source>Type</source>
      <translation>Türü</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="352"/>
      <source>Error</source>
      <translation>Hata</translation>
    </message>
  </context>
  <context>
    <name>PartGui::ShapeBuilderWidget</name>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="208"/>
      <location filename="../../TaskShapeBuilder.cpp" line="227"/>
      <location filename="../../TaskShapeBuilder.cpp" line="255"/>
      <location filename="../../TaskShapeBuilder.cpp" line="296"/>
      <location filename="../../TaskShapeBuilder.cpp" line="348"/>
      <location filename="../../TaskShapeBuilder.cpp" line="400"/>
      <location filename="../../TaskShapeBuilder.cpp" line="463"/>
      <source>Wrong selection</source>
      <translation>Yanlış seçim</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="208"/>
      <location filename="../../TaskShapeBuilder.cpp" line="227"/>
      <source>Select two vertices</source>
      <translation>İki köşe noktasını seçin</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="255"/>
      <location filename="../../TaskShapeBuilder.cpp" line="348"/>
      <source>Select one or more edges</source>
      <translation>Bir veya daha fazla kenar seçin</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="296"/>
      <source>Select three or more vertices</source>
      <translation>Üç veya daha fazla köşe seç</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="400"/>
      <source>Select two or more faces</source>
      <translation>İki veya daha fazla yüz seçin</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="463"/>
      <source>Select only one part object</source>
      <translation>Sadece bir parça nesnesini seçin</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="515"/>
      <source>Select two vertices to create an edge</source>
      <translation>Bir kenar oluşturmak için iki köşeyi seçin</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="522"/>
      <source>Select adjacent edges</source>
      <translation>Bitişik kenarları seç</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="529"/>
      <source>Select a list of vertices</source>
      <translation>Noktaların bir listesini seçin</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="536"/>
      <source>Select a closed set of edges</source>
      <translation>Kapalı bir kenar kümesi seçin</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="543"/>
      <source>Select adjacent faces</source>
      <translation>Bitişik yüzleri seç</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="550"/>
      <source>All shape types can be selected</source>
      <translation>Tüm şekil türleri seçilebilir</translation>
    </message>
  </context>
  <context>
    <name>PartGui::SweepWidget</name>
    <message>
      <location filename="../../TaskSweep.cpp" line="134"/>
      <source>Available profiles</source>
      <translation>Kullanılabilir profiller</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="135"/>
      <source>Selected profiles</source>
      <translation>Seçilen profiller</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="281"/>
      <location filename="../../TaskSweep.cpp" line="411"/>
      <location filename="../../TaskSweep.cpp" line="419"/>
      <source>Sweep path</source>
      <translation>Yolu süpür</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="281"/>
      <source>Select one or more connected edges you want to sweep along.</source>
      <translation>Süpürmek istediğiniz bir veya daha fazla bağlı kenarı seçin.</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="309"/>
      <source>Too few elements</source>
      <translation>Çok az öğe</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="309"/>
      <source>At least one edge or wire is required.</source>
      <translation>En az bir kenar veya tel gereklidir.</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="316"/>
      <source>Wrong selection</source>
      <translation>Yanlış seçim</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="316"/>
      <source>'%1' cannot be used as profile and path.</source>
      <translation>'%1', profil ve yol olarak kullanılamaz.</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="354"/>
      <source>Input error</source>
      <translation>Girdi hatası</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="387"/>
      <source>Done</source>
      <translation>Bitti</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="389"/>
      <source>Select one or more connected edges in the 3d view and press 'Done'</source>
      <translation>3d görünümünde bir veya daha fazla bağlı kenarı seçin ve 'Bitti' tuşuna basın</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="411"/>
      <location filename="../../TaskSweep.cpp" line="419"/>
      <source>The selected sweep path is invalid.</source>
      <translation>Seçilen süpürme yolu geçersiz.</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="431"/>
      <source>Vertex/Wire</source>
      <translation type="unfinished">Vertex/Wire</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="432"/>
      <source>Sweep</source>
      <translation>Süpür</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskAttacher</name>
    <message>
      <location filename="../../TaskAttacher.ui" line="14"/>
      <source>Form</source>
      <translation>Şekil:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="20"/>
      <source>Selection accepted</source>
      <translation>Seçim kabul edildi</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="35"/>
      <source>Reference 1</source>
      <translation>Referans 1</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="52"/>
      <source>Reference 2</source>
      <translation>Referans 2</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="69"/>
      <source>Reference 3</source>
      <translation>Referans 3</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="86"/>
      <source>Reference 4</source>
      <translation>Referans 4</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="101"/>
      <source>Attachment mode:</source>
      <translation>Ek modu:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="124"/>
      <location filename="../../TaskAttacher.cpp" line="335"/>
      <source>Attachment Offset (in local coordinates):</source>
      <translation>Ek Ofseti (yerel koordinatlarda):</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="136"/>
      <source>In x-direction:</source>
      <translation>X yönünde:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="152"/>
      <source>In y-direction:</source>
      <translation>Y yönünde:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="171"/>
      <location filename="../../TaskAttacher.ui" line="207"/>
      <location filename="../../TaskAttacher.ui" line="269"/>
      <source>Note: The placement is expressed in local coordinate system
of object being attached.</source>
      <translation type="unfinished">Note: The placement is expressed in local coordinate system
of object being attached.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="188"/>
      <source>In z-direction:</source>
      <translation>Z yönünde:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="224"/>
      <source>Around x-axis:</source>
      <translation>X ekseni etrafında:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="237"/>
      <source>Around y-axis:</source>
      <translation>Y ekseni etrafında:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="250"/>
      <source>Around z-axis:</source>
      <translation>Z ekseni etrafında:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="286"/>
      <source>Rotation around the x-axis
Note: The placement is expressed in local coordinate system
of object being attached.</source>
      <translation type="unfinished">Rotation around the x-axis
Note: The placement is expressed in local coordinate system
of object being attached.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="313"/>
      <source>Rotation around the y-axis
Note: The placement is expressed in local coordinate system
of object being attached.</source>
      <translation type="unfinished">Rotation around the y-axis
Note: The placement is expressed in local coordinate system
of object being attached.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="340"/>
      <source>Rotation around the z-axis
Note: The placement is expressed in local coordinate system
of object being attached.</source>
      <translation type="unfinished">Rotation around the z-axis
Note: The placement is expressed in local coordinate system
of object being attached.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="364"/>
      <source>Flip side of attachment and offset</source>
      <translation type="unfinished">Flip side of attachment and offset</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="367"/>
      <source>Flip sides</source>
      <translation>Yönlerini çevirin</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="318"/>
      <source>OCC error: %1</source>
      <translation>OCC hatası: %1</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="320"/>
      <source>unknown error</source>
      <translation>bilinmeyen hata</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="323"/>
      <source>Attachment mode failed: %1</source>
      <translation>Ek modu başarısız: %1</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="327"/>
      <source>Not attached</source>
      <translation>Ekli değil</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="331"/>
      <source>Attached with mode %1</source>
      <translation>%1 modu ile ekli</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="335"/>
      <source>Attachment Offset (inactive - not attached):</source>
      <translation>Ek dosya uzantısı (pasif - ekli değil):</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="627"/>
      <source>Face</source>
      <translation>Yüz</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="632"/>
      <source>Edge</source>
      <translation>Kenar</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="637"/>
      <source>Vertex</source>
      <translation type="unfinished">Vertex</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="699"/>
      <source>Selecting...</source>
      <translation>Seçiliyor...</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="703"/>
      <source>Reference%1</source>
      <translation>Referans%1</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="750"/>
      <source>Not editable because rotation of AttachmentOffset is bound by expressions.</source>
      <translation type="unfinished">Not editable because rotation of AttachmentOffset is bound by expressions.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="816"/>
      <source>Reference combinations:</source>
      <translation>Referans kombinasyonları:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="833"/>
      <source>%1 (add %2)</source>
      <translation>%1 (%2 ekle)</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="838"/>
      <source>%1 (add more references)</source>
      <translation>%1 (daha fazla referans ekleyin)</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskCheckGeometryDialog</name>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1068"/>
      <source>Shape Content</source>
      <translation>Şekil İçeriği</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1076"/>
      <location filename="../../TaskCheckGeometry.cpp" line="1270"/>
      <source>Settings</source>
      <translation>Ayarlar</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1080"/>
      <source>Skip settings page</source>
      <translation type="unfinished">Skip settings page</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1081"/>
      <source>Skip this settings page and run the geometry check automatically.
Default: false</source>
      <translation type="unfinished">Skip this settings page and run the geometry check automatically.
Default: false</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1090"/>
      <source>Run BOP check</source>
      <translation type="unfinished">Run BOP check</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1091"/>
      <source>Extra boolean operations check that can sometimes find errors that
the standard BRep geometry check misses. These errors do not always 
mean the checked object is unusable.  Default: false</source>
      <translation type="unfinished">Extra boolean operations check that can sometimes find errors that
the standard BRep geometry check misses. These errors do not always 
mean the checked object is unusable.  Default: false</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1101"/>
      <source>Single-threaded</source>
      <translation type="unfinished">Single-threaded</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1102"/>
      <source>Run the geometry check in a single thread.  This is slower,
but more stable.  Default: false</source>
      <translation type="unfinished">Run the geometry check in a single thread.  This is slower,
but more stable.  Default: false</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1111"/>
      <source>Log errors</source>
      <translation type="unfinished">Log errors</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1112"/>
      <source>Log errors to report view.  Default: true</source>
      <translation type="unfinished">Log errors to report view.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1119"/>
      <source>Expand shape content</source>
      <translation type="unfinished">Expand shape content</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1120"/>
      <source>Expand shape content.  Changes will take effect next time you use 
the check geometry tool.  Default: false</source>
      <translation type="unfinished">Expand shape content.  Changes will take effect next time you use 
the check geometry tool.  Default: false</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1129"/>
      <source>Advanced shape content</source>
      <translation type="unfinished">Advanced shape content</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1130"/>
      <source>Show advanced shape content.  Changes will take effect next time you use 
the check geometry tool.  Default: false</source>
      <translation type="unfinished">Show advanced shape content.  Changes will take effect next time you use 
the check geometry tool.  Default: false</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1138"/>
      <source>
Individual BOP Checks:</source>
      <translation type="unfinished">
Individual BOP Checks:</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1141"/>
      <source>  Bad type</source>
      <translation type="unfinished">  Bad type</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1142"/>
      <source>Check for bad argument types.  Default: true</source>
      <translation type="unfinished">Check for bad argument types.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1149"/>
      <source>  Self-intersect</source>
      <translation>  Kendiyle kesişen</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1150"/>
      <source>Check for self-intersections.  Default: true</source>
      <translation type="unfinished">Check for self-intersections.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1157"/>
      <source>  Too small edge</source>
      <translation type="unfinished">  Too small edge</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1158"/>
      <source>Check for edges that are too small.  Default: true</source>
      <translation type="unfinished">Check for edges that are too small.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1165"/>
      <source>  Nonrecoverable face</source>
      <translation type="unfinished">  Nonrecoverable face</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1166"/>
      <source>Check for nonrecoverable faces.  Default: true</source>
      <translation type="unfinished">Check for nonrecoverable faces.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1173"/>
      <source>  Continuity</source>
      <translation type="unfinished">  Continuity</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1174"/>
      <source>Check for continuity.  Default: true</source>
      <translation type="unfinished">Check for continuity.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1181"/>
      <source>  Incompatibility of face</source>
      <translation type="unfinished">  Incompatibility of face</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1182"/>
      <source>Check for incompatible faces.  Default: true</source>
      <translation type="unfinished">Check for incompatible faces.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1189"/>
      <source>  Incompatibility of vertex</source>
      <translation type="unfinished">  Incompatibility of vertex</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1190"/>
      <source>Check for incompatible vertices.  Default: true</source>
      <translation type="unfinished">Check for incompatible vertices.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1197"/>
      <source>  Incompatibility of edge</source>
      <translation type="unfinished">  Incompatibility of edge</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1198"/>
      <source>Check for incompatible edges.  Default: true</source>
      <translation type="unfinished">Check for incompatible edges.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1205"/>
      <source>  Invalid curve on surface</source>
      <translation type="unfinished">  Invalid curve on surface</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1206"/>
      <source>Check for invalid curves on surfaces.  Default: true</source>
      <translation type="unfinished">Check for invalid curves on surfaces.  Default: true</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1269"/>
      <source>Run check</source>
      <translation type="unfinished">Run check</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1275"/>
      <source>Results</source>
      <translation>Sonuçlar</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskCheckGeometryResults</name>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="383"/>
      <source>Check Geometry Results</source>
      <translation type="unfinished">Check Geometry Results</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="402"/>
      <source>Check is running...</source>
      <translation type="unfinished">Check is running...</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="426"/>
      <location filename="../../TaskCheckGeometry.cpp" line="432"/>
      <source>Check geometry</source>
      <translation>Geometriyi kontrol et</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskDlgAttacher</name>
    <message>
      <location filename="../../TaskAttacher.cpp" line="1104"/>
      <source>Datum dialog: Input error</source>
      <translation>Veri iletişim kutusu: Giriş hatası</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskFaceColors</name>
    <message>
      <location filename="../../TaskFaceColors.ui" line="14"/>
      <source>Set color per face</source>
      <translation>Yüzey rengini ayarla</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="20"/>
      <source>Click on the faces in the 3D view to select them</source>
      <translation type="unfinished">Click on the faces in the 3D view to select them</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="39"/>
      <source>Faces:</source>
      <translation>Yüzler:</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="87"/>
      <source>Resets color for all faces of the part</source>
      <translation type="unfinished">Resets color for all faces of the part</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="90"/>
      <source>Set to default</source>
      <translation>Varsayılan olarak ayarla</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="97"/>
      <source>When checked, the you can select multiple faces
by dragging a selection rectangle in the 3D view</source>
      <translation type="unfinished">When checked, the you can select multiple faces
by dragging a selection rectangle in the 3D view</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="101"/>
      <source>Box selection</source>
      <translation>Seçim kutusu</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskLoft</name>
    <message>
      <location filename="../../TaskLoft.ui" line="14"/>
      <source>Loft</source>
      <translation>Çatıla</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.ui" line="23"/>
      <source>Create solid</source>
      <translation>Katı oluştur</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.ui" line="30"/>
      <source>Ruled surface</source>
      <translation>Hükümlü yüzey</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.ui" line="50"/>
      <source>Closed</source>
      <translation>Kapalı</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskOffset</name>
    <message>
      <location filename="../../TaskOffset.ui" line="14"/>
      <location filename="../../TaskOffset.ui" line="20"/>
      <source>Offset</source>
      <translation>Uzaklaşma</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="34"/>
      <source>Mode</source>
      <translation>Mod</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="42"/>
      <source>Skin</source>
      <translation>Cilt</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="47"/>
      <source>Pipe</source>
      <translation>Boru</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="52"/>
      <source>RectoVerso</source>
      <translation>RectoVerso</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="60"/>
      <source>Join type</source>
      <translation>Katılma türü</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="68"/>
      <source>Arc</source>
      <translation>Yay</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="73"/>
      <source>Tangent</source>
      <translation>Teğet</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="78"/>
      <location filename="../../TaskOffset.ui" line="86"/>
      <source>Intersection</source>
      <translation>Kesişim</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="93"/>
      <source>Self-intersection</source>
      <translation>Kendinden kesişim</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="100"/>
      <source>Fill offset</source>
      <translation>Dolgu ofseti</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="114"/>
      <source>Faces</source>
      <translation>Yüzler</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="144"/>
      <source>Update view</source>
      <translation>Görünümü güncelle</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskShapeBuilder</name>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="14"/>
      <location filename="../../TaskShapeBuilder.ui" line="20"/>
      <source>Create shape</source>
      <translation>Şekil oluştur</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="26"/>
      <source>Face from vertices</source>
      <translation>Köşelerden yüz</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="33"/>
      <source>Shell from faces</source>
      <translation>Yüzlerden kabuk</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="40"/>
      <source>Edge from vertices</source>
      <translation>Köşelerden kenar</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="47"/>
      <source>Face from edges</source>
      <translation>Kenarlarından yüz</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="54"/>
      <source>Solid from shell</source>
      <translation>Kabuktan katı</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="68"/>
      <source>Planar</source>
      <translation>Düzlemsel</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="75"/>
      <source>Refine shape</source>
      <translation>Şekli arıt (incelt)</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="85"/>
      <source>All faces</source>
      <translation>Tüm yüzler</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="107"/>
      <source>Create</source>
      <translation>Oluştur</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="116"/>
      <source>Wire from edges</source>
      <translation>Kenarlardan Tel'e</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskSweep</name>
    <message>
      <location filename="../../TaskSweep.ui" line="14"/>
      <source>Sweep</source>
      <translation>Süpür</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.ui" line="23"/>
      <source>Sweep Path</source>
      <translation>Yolu süpür</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.ui" line="53"/>
      <source>Create solid</source>
      <translation>Katı oluştur</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.ui" line="60"/>
      <source>Frenet</source>
      <translation>Frenet</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="461"/>
      <source>Select one or more profiles and select an edge or wire
in the 3D view for the sweep path.</source>
      <translation>3B görünümü içinde Süpürme yolu
bir veya daha fazla profil seçin ilave kenar veya tel seçin.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskTube</name>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="14"/>
      <source>Tube</source>
      <translation type="unfinished">Tube</translation>
    </message>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="23"/>
      <source>Parameter</source>
      <translation>Parametre</translation>
    </message>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="78"/>
      <source>Height:</source>
      <translation>Yükseklik:</translation>
    </message>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="85"/>
      <source>Outer radius</source>
      <translation>Dış yarıçap</translation>
    </message>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="92"/>
      <source>Inner radius</source>
      <translation>İç yarıçap</translation>
    </message>
  </context>
  <context>
    <name>PartGui::ThicknessWidget</name>
    <message>
      <location filename="../../TaskThickness.cpp" line="99"/>
      <location filename="../../TaskThickness.cpp" line="279"/>
      <location filename="../../TaskThickness.cpp" line="289"/>
      <source>Thickness</source>
      <translation>Kalınlık</translation>
    </message>
    <message>
      <location filename="../../TaskThickness.cpp" line="177"/>
      <source>Select faces of the source object and press 'Done'</source>
      <translation>Kaynak nesnenin yüzlerini seçin ve 'Tamamlandı' tuşuna basın</translation>
    </message>
    <message>
      <location filename="../../TaskThickness.cpp" line="180"/>
      <source>Done</source>
      <translation>Bitti</translation>
    </message>
    <message>
      <location filename="../../TaskThickness.cpp" line="244"/>
      <source>Input error</source>
      <translation>Girdi hatası</translation>
    </message>
  </context>
  <context>
    <name>Part_FaceMaker</name>
    <message>
      <location filename="../../../App/FaceMaker.cpp" line="172"/>
      <source>Simple</source>
      <translation>Basit</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMaker.cpp" line="177"/>
      <source>Makes separate plane face from every wire independently. No support for holes; wires can be on different planes.</source>
      <translation>Ayrı düzlemi yüzünü her telden bağımsız olarak yapar. Delikler için destek yok; teller farklı düzlemlerde olabilir.</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMakerBullseye.cpp" line="72"/>
      <source>Bull's-eye facemaker</source>
      <translation>Bull'ın göz fasiyesi</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMakerBullseye.cpp" line="77"/>
      <source>Supports making planar faces with holes with islands.</source>
      <translation>Adalı delikli düzlemsel yüzlerin oluşturulmasını destekler.</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMakerCheese.cpp" line="249"/>
      <source>Cheese facemaker</source>
      <translation>Peynir makyajcısı</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMakerCheese.cpp" line="254"/>
      <source>Supports making planar faces with holes, but no islands inside holes.</source>
      <translation>Delikli düzlemsel yüzeyler oluşturmayı destekler, ancak deliklerin içinde adalar yoktur.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrusion.cpp" line="504"/>
      <source>Part Extrude facemaker</source>
      <translation>Parça ekstrüzyon yüz ölçümü</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrusion.cpp" line="509"/>
      <source>Supports making faces with holes, does not support nesting.</source>
      <translation>Yüzleri deliklerle destekleme desteği, iç içe yerleştirmeyi desteklemez.</translation>
    </message>
  </context>
  <context>
    <name>Workbench</name>
    <message>
      <location filename="../../Workbench.cpp" line="37"/>
      <source>&amp;Part</source>
      <translation>&amp;Parça</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="38"/>
      <source>&amp;Simple</source>
      <translation>&amp;Basit</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="39"/>
      <source>&amp;Parametric</source>
      <translation>&amp;Değişken tabanlı</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="40"/>
      <source>Solids</source>
      <translation>Katı maddeler</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="41"/>
      <source>Part tools</source>
      <translation>Bölüm araçları</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="42"/>
      <source>Boolean</source>
      <translation>Mantıksal</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="43"/>
      <source>Primitives</source>
      <translation>Temel öğeler</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="44"/>
      <source>Join</source>
      <translation>Birleştir</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="45"/>
      <source>Split</source>
      <translation>Ayır</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="46"/>
      <source>Compound</source>
      <translation>Bileşik</translation>
    </message>
  </context>
</TS>
