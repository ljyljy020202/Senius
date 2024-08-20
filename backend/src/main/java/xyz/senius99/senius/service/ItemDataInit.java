package xyz.senius99.senius.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import xyz.senius99.senius.entity.Item;
import xyz.senius99.senius.repository.ItemRepository;

@Component
public class ItemDataInit implements CommandLineRunner {
    @Autowired
    private ItemRepository itemRepository;
    @Override
    public void run(String... args) throws Exception {
        Item item1 = new Item();
        item1.setName("황금손지압기");
        item1.setImgpath("/images/item1.png");
        item1.setPrice(3000);
        item1.setDescription("동양의학의 수지침과 같은 원리로 손과 발을 자극해 질병예방과 뇌기능을 강화시켜줍니다.");
        item1.setStockQuantity(10);

        Item item2 = new Item();
        item2.setName("원목 지압봉 3P 세트");
        item2.setImgpath("/images/item2.png");
        item2.setPrice(2000);
        item2.setDescription("각각 다른 모양으로 제작된 3종의 원목 지압봉으로 손과 발 및 신체 다양한 부위에 사용하여 문지르거나 지압할 수 있습니다.");
        item2.setStockQuantity(10);

        Item item3 = new Item();
        item3.setName("[한국고려홍삼] 굿데이즈 홍삼스틱 12g 30포 / 30일분");
        item3.setImgpath("/images/item3.png");
        item3.setPrice(21000);
        item3.setDescription("진하게 섭취하는 국산 6년근 홍삼\n언제 어디서나 간편하게 하루 한포로 섭취가능합니다.");
        item3.setStockQuantity(10);

        Item item4 = new Item();
        item4.setName("BBQ 황금올리브 치킨 + 콜라 1.25L");
        item4.setImgpath("/images/item4.png");
        item4.setPrice(24000);
        item4.setDescription("BBQ의 시그니처 메뉴 후라이드의 대명사 황금올리브치킨 + 콜라 1.25L\n손자, 손녀에게 치킨 한 마리 선물하세요~");
        item4.setStockQuantity(10);

        Item item5 = new Item();
        item5.setName("콜크 미니다육화분 (3인용 세트)");
        item5.setImgpath("/images/item5.png");
        item5.setPrice(12000);
        item5.setDescription("종이컵에 콜크클레이를 붙여서 예쁘게 화분을 만들고 다 만든 화분에 미니다육화분을 넣어서 키워보세요~\n세상에 단 하나뿐인 나만의 화분입니다.");
        item5.setStockQuantity(10);

        Item item6 = new Item();
        item6.setName("[아임제주] 제주 구좌 당근즙 120g");
        item6.setImgpath("/images/item5.png");
        item6.setPrice(36000);
        item6.setDescription("신선한 제주산 당근을 제철에 수확하여 착즙 및 비가열 살균한 뒤 급속냉동하여 맛과 영양, 향이 살아있습니다.");
        item6.setStockQuantity(10);

        itemRepository.save(item1);
        itemRepository.save(item2);
        itemRepository.save(item3);
        itemRepository.save(item4);
        itemRepository.save(item5);
        itemRepository.save(item6);
    }
}
