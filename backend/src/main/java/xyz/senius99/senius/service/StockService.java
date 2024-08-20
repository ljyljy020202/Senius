package xyz.senius99.senius.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.senius99.senius.dto.ItemDTO;
import xyz.senius99.senius.dto.PurchaseDTO;
import xyz.senius99.senius.entity.Item;
import xyz.senius99.senius.repository.ItemRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StockService {
    private final ItemRepository itemRepository;

    @Transactional
    public List<ItemDTO> getStockList() {
        List<ItemDTO> dtoList = new ArrayList<>();
        List<Item> itemList = itemRepository.findAll();
        for (Item item : itemList) {
            if (item.getStockQuantity() > 0)
                dtoList.add(item.toDTO());
        }
        return dtoList;
    }

    @Transactional
    public void decreaseStock(PurchaseDTO purchaseDTO) {
        Item item = itemRepository.findByName(purchaseDTO.getItem());
        int currStock = item.getStockQuantity();
        item.setStockQuantity(currStock - 1);
        //결제 시 재고 부족에 대한 예외처리는 따로 하지 않음, 재고가 1개이상인 상품만 노출시키도록 했기 때문
        itemRepository.save(item);
    }
}
