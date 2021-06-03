import {MigrationInterface, QueryRunner} from "typeorm";

export class noNotifications1623164855464 implements MigrationInterface {
    name = 'noNotifications1623164855464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "draft_order" DROP CONSTRAINT "FK_5bd11d0e2a9628128e2c26fd0a6"`);
        await queryRunner.query(`ALTER TABLE "region_payment_providers" DROP CONSTRAINT "FK_3a6947180aeec283cd92c59ebb0"`);
        await queryRunner.query(`ALTER TABLE "region_payment_providers" DROP CONSTRAINT "FK_8aaa78ba90d3802edac317df869"`);
        await queryRunner.query(`ALTER TABLE "region_fulfillment_providers" DROP CONSTRAINT "FK_37f361c38a18d12a3fa3158d0cf"`);
        await queryRunner.query(`ALTER TABLE "region_fulfillment_providers" DROP CONSTRAINT "FK_c556e14eff4d6f03db593df955e"`);
        await queryRunner.query(`ALTER TABLE "product_images" DROP CONSTRAINT "FK_2212515ba306c79f42c46a99db7"`);
        await queryRunner.query(`ALTER TABLE "product_images" DROP CONSTRAINT "FK_4f166bb8c2bfcef2498d97b4068"`);
        await queryRunner.query(`ALTER TABLE "product_tags" DROP CONSTRAINT "FK_21683a063fe82dafdf681ecc9c4"`);
        await queryRunner.query(`ALTER TABLE "product_tags" DROP CONSTRAINT "FK_5b0c6fc53c574299ecc7f9ee22e"`);
        await queryRunner.query(`ALTER TABLE "claim_item_tags" DROP CONSTRAINT "FK_dc9bbf9fcb9ba458d25d512811b"`);
        await queryRunner.query(`ALTER TABLE "claim_item_tags" DROP CONSTRAINT "FK_c2c0f3edf39515bd15432afe6e5"`);
        await queryRunner.query(`ALTER TABLE "discount_rule_products" DROP CONSTRAINT "FK_be66106a673b88a81c603abe7eb"`);
        await queryRunner.query(`ALTER TABLE "discount_rule_products" DROP CONSTRAINT "FK_4e0739e5f0244c08d41174ca08a"`);
        await queryRunner.query(`ALTER TABLE "discount_regions" DROP CONSTRAINT "FK_a21a7ffbe420d492eb46c305fec"`);
        await queryRunner.query(`ALTER TABLE "discount_regions" DROP CONSTRAINT "FK_f4194aa81073f3fab8aa86906ff"`);
        await queryRunner.query(`ALTER TABLE "cart_discounts" DROP CONSTRAINT "FK_8df75ef4f35f217768dc1135458"`);
        await queryRunner.query(`ALTER TABLE "cart_discounts" DROP CONSTRAINT "FK_6680319ebe1f46d18f106191d59"`);
        await queryRunner.query(`ALTER TABLE "cart_gift_cards" DROP CONSTRAINT "FK_0fb38b6d167793192bc126d835e"`);
        await queryRunner.query(`ALTER TABLE "cart_gift_cards" DROP CONSTRAINT "FK_d38047a90f3d42f0be7909e8aea"`);
        await queryRunner.query(`ALTER TABLE "order_discounts" DROP CONSTRAINT "FK_0fc1ec4e3db9001ad60c19daf16"`);
        await queryRunner.query(`ALTER TABLE "order_discounts" DROP CONSTRAINT "FK_e7b488cebe333f449398769b2cc"`);
        await queryRunner.query(`ALTER TABLE "order_gift_cards" DROP CONSTRAINT "FK_f2bb9f71e95b315eb24b2b84cb3"`);
        await queryRunner.query(`ALTER TABLE "order_gift_cards" DROP CONSTRAINT "FK_e62ff11e4730bb3adfead979ee2"`);
        await queryRunner.query(`ALTER TABLE "store_currencies" DROP CONSTRAINT "FK_82a6bbb0b527c20a0002ddcbd60"`);
        await queryRunner.query(`ALTER TABLE "store_currencies" DROP CONSTRAINT "FK_b4f4b63d1736689b7008980394c"`);
        await queryRunner.query(`ALTER TABLE "return" ADD "no_notification" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "claim_order" ADD "no_notification" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "swap" ADD "no_notification" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "no_notification" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_option" DROP CONSTRAINT "FK_e634fca34f6b594b87fdbee95f6"`);
        await queryRunner.query(`ALTER TABLE "product_option" ALTER COLUMN "product_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "discount" ALTER COLUMN "starts_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "fulfillment" DROP CONSTRAINT "FK_beb35a6de60a6c4f91d5ae57e44"`);
        await queryRunner.query(`ALTER TABLE "fulfillment" ALTER COLUMN "provider_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_option" ADD CONSTRAINT "FK_e634fca34f6b594b87fdbee95f6" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD CONSTRAINT "FK_beb35a6de60a6c4f91d5ae57e44" FOREIGN KEY ("provider_id") REFERENCES "fulfillment_provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "draft_order" ADD CONSTRAINT "FK_5bd11d0e2a9628128e2c26fd0a6" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "region_payment_providers" ADD CONSTRAINT "FK_8aaa78ba90d3802edac317df869" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "region_payment_providers" ADD CONSTRAINT "FK_3a6947180aeec283cd92c59ebb0" FOREIGN KEY ("provider_id") REFERENCES "payment_provider"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "region_fulfillment_providers" ADD CONSTRAINT "FK_c556e14eff4d6f03db593df955e" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "region_fulfillment_providers" ADD CONSTRAINT "FK_37f361c38a18d12a3fa3158d0cf" FOREIGN KEY ("provider_id") REFERENCES "fulfillment_provider"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_images" ADD CONSTRAINT "FK_4f166bb8c2bfcef2498d97b4068" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_images" ADD CONSTRAINT "FK_2212515ba306c79f42c46a99db7" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_tags" ADD CONSTRAINT "FK_5b0c6fc53c574299ecc7f9ee22e" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_tags" ADD CONSTRAINT "FK_21683a063fe82dafdf681ecc9c4" FOREIGN KEY ("product_tag_id") REFERENCES "product_tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "claim_item_tags" ADD CONSTRAINT "FK_c2c0f3edf39515bd15432afe6e5" FOREIGN KEY ("item_id") REFERENCES "claim_item"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "claim_item_tags" ADD CONSTRAINT "FK_dc9bbf9fcb9ba458d25d512811b" FOREIGN KEY ("tag_id") REFERENCES "claim_tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "discount_rule_products" ADD CONSTRAINT "FK_4e0739e5f0244c08d41174ca08a" FOREIGN KEY ("discount_rule_id") REFERENCES "discount_rule"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "discount_rule_products" ADD CONSTRAINT "FK_be66106a673b88a81c603abe7eb" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "discount_regions" ADD CONSTRAINT "FK_f4194aa81073f3fab8aa86906ff" FOREIGN KEY ("discount_id") REFERENCES "discount"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "discount_regions" ADD CONSTRAINT "FK_a21a7ffbe420d492eb46c305fec" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_discounts" ADD CONSTRAINT "FK_6680319ebe1f46d18f106191d59" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_discounts" ADD CONSTRAINT "FK_8df75ef4f35f217768dc1135458" FOREIGN KEY ("discount_id") REFERENCES "discount"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_gift_cards" ADD CONSTRAINT "FK_d38047a90f3d42f0be7909e8aea" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_gift_cards" ADD CONSTRAINT "FK_0fb38b6d167793192bc126d835e" FOREIGN KEY ("gift_card_id") REFERENCES "gift_card"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "order_discounts" ADD CONSTRAINT "FK_e7b488cebe333f449398769b2cc" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "order_discounts" ADD CONSTRAINT "FK_0fc1ec4e3db9001ad60c19daf16" FOREIGN KEY ("discount_id") REFERENCES "discount"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "order_gift_cards" ADD CONSTRAINT "FK_e62ff11e4730bb3adfead979ee2" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "order_gift_cards" ADD CONSTRAINT "FK_f2bb9f71e95b315eb24b2b84cb3" FOREIGN KEY ("gift_card_id") REFERENCES "gift_card"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "store_currencies" ADD CONSTRAINT "FK_b4f4b63d1736689b7008980394c" FOREIGN KEY ("store_id") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "store_currencies" ADD CONSTRAINT "FK_82a6bbb0b527c20a0002ddcbd60" FOREIGN KEY ("currency_code") REFERENCES "currency"("code") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store_currencies" DROP CONSTRAINT "FK_82a6bbb0b527c20a0002ddcbd60"`);
        await queryRunner.query(`ALTER TABLE "store_currencies" DROP CONSTRAINT "FK_b4f4b63d1736689b7008980394c"`);
        await queryRunner.query(`ALTER TABLE "order_gift_cards" DROP CONSTRAINT "FK_f2bb9f71e95b315eb24b2b84cb3"`);
        await queryRunner.query(`ALTER TABLE "order_gift_cards" DROP CONSTRAINT "FK_e62ff11e4730bb3adfead979ee2"`);
        await queryRunner.query(`ALTER TABLE "order_discounts" DROP CONSTRAINT "FK_0fc1ec4e3db9001ad60c19daf16"`);
        await queryRunner.query(`ALTER TABLE "order_discounts" DROP CONSTRAINT "FK_e7b488cebe333f449398769b2cc"`);
        await queryRunner.query(`ALTER TABLE "cart_gift_cards" DROP CONSTRAINT "FK_0fb38b6d167793192bc126d835e"`);
        await queryRunner.query(`ALTER TABLE "cart_gift_cards" DROP CONSTRAINT "FK_d38047a90f3d42f0be7909e8aea"`);
        await queryRunner.query(`ALTER TABLE "cart_discounts" DROP CONSTRAINT "FK_8df75ef4f35f217768dc1135458"`);
        await queryRunner.query(`ALTER TABLE "cart_discounts" DROP CONSTRAINT "FK_6680319ebe1f46d18f106191d59"`);
        await queryRunner.query(`ALTER TABLE "discount_regions" DROP CONSTRAINT "FK_a21a7ffbe420d492eb46c305fec"`);
        await queryRunner.query(`ALTER TABLE "discount_regions" DROP CONSTRAINT "FK_f4194aa81073f3fab8aa86906ff"`);
        await queryRunner.query(`ALTER TABLE "discount_rule_products" DROP CONSTRAINT "FK_be66106a673b88a81c603abe7eb"`);
        await queryRunner.query(`ALTER TABLE "discount_rule_products" DROP CONSTRAINT "FK_4e0739e5f0244c08d41174ca08a"`);
        await queryRunner.query(`ALTER TABLE "claim_item_tags" DROP CONSTRAINT "FK_dc9bbf9fcb9ba458d25d512811b"`);
        await queryRunner.query(`ALTER TABLE "claim_item_tags" DROP CONSTRAINT "FK_c2c0f3edf39515bd15432afe6e5"`);
        await queryRunner.query(`ALTER TABLE "product_tags" DROP CONSTRAINT "FK_21683a063fe82dafdf681ecc9c4"`);
        await queryRunner.query(`ALTER TABLE "product_tags" DROP CONSTRAINT "FK_5b0c6fc53c574299ecc7f9ee22e"`);
        await queryRunner.query(`ALTER TABLE "product_images" DROP CONSTRAINT "FK_2212515ba306c79f42c46a99db7"`);
        await queryRunner.query(`ALTER TABLE "product_images" DROP CONSTRAINT "FK_4f166bb8c2bfcef2498d97b4068"`);
        await queryRunner.query(`ALTER TABLE "region_fulfillment_providers" DROP CONSTRAINT "FK_37f361c38a18d12a3fa3158d0cf"`);
        await queryRunner.query(`ALTER TABLE "region_fulfillment_providers" DROP CONSTRAINT "FK_c556e14eff4d6f03db593df955e"`);
        await queryRunner.query(`ALTER TABLE "region_payment_providers" DROP CONSTRAINT "FK_3a6947180aeec283cd92c59ebb0"`);
        await queryRunner.query(`ALTER TABLE "region_payment_providers" DROP CONSTRAINT "FK_8aaa78ba90d3802edac317df869"`);
        await queryRunner.query(`ALTER TABLE "draft_order" DROP CONSTRAINT "FK_5bd11d0e2a9628128e2c26fd0a6"`);
        await queryRunner.query(`ALTER TABLE "fulfillment" DROP CONSTRAINT "FK_beb35a6de60a6c4f91d5ae57e44"`);
        await queryRunner.query(`ALTER TABLE "product_option" DROP CONSTRAINT "FK_e634fca34f6b594b87fdbee95f6"`);
        await queryRunner.query(`ALTER TABLE "fulfillment" ALTER COLUMN "provider_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD CONSTRAINT "FK_beb35a6de60a6c4f91d5ae57e44" FOREIGN KEY ("provider_id") REFERENCES "fulfillment_provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "discount" ALTER COLUMN "starts_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "product_option" ALTER COLUMN "product_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_option" ADD CONSTRAINT "FK_e634fca34f6b594b87fdbee95f6" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "no_notification"`);
        await queryRunner.query(`ALTER TABLE "swap" DROP COLUMN "no_notification"`);
        await queryRunner.query(`ALTER TABLE "claim_order" DROP COLUMN "no_notification"`);
        await queryRunner.query(`ALTER TABLE "return" DROP COLUMN "no_notification"`);
        await queryRunner.query(`ALTER TABLE "store_currencies" ADD CONSTRAINT "FK_b4f4b63d1736689b7008980394c" FOREIGN KEY ("store_id") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "store_currencies" ADD CONSTRAINT "FK_82a6bbb0b527c20a0002ddcbd60" FOREIGN KEY ("currency_code") REFERENCES "currency"("code") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_gift_cards" ADD CONSTRAINT "FK_e62ff11e4730bb3adfead979ee2" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_gift_cards" ADD CONSTRAINT "FK_f2bb9f71e95b315eb24b2b84cb3" FOREIGN KEY ("gift_card_id") REFERENCES "gift_card"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_discounts" ADD CONSTRAINT "FK_e7b488cebe333f449398769b2cc" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_discounts" ADD CONSTRAINT "FK_0fc1ec4e3db9001ad60c19daf16" FOREIGN KEY ("discount_id") REFERENCES "discount"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_gift_cards" ADD CONSTRAINT "FK_d38047a90f3d42f0be7909e8aea" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_gift_cards" ADD CONSTRAINT "FK_0fb38b6d167793192bc126d835e" FOREIGN KEY ("gift_card_id") REFERENCES "gift_card"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_discounts" ADD CONSTRAINT "FK_6680319ebe1f46d18f106191d59" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_discounts" ADD CONSTRAINT "FK_8df75ef4f35f217768dc1135458" FOREIGN KEY ("discount_id") REFERENCES "discount"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "discount_regions" ADD CONSTRAINT "FK_f4194aa81073f3fab8aa86906ff" FOREIGN KEY ("discount_id") REFERENCES "discount"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "discount_regions" ADD CONSTRAINT "FK_a21a7ffbe420d492eb46c305fec" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "discount_rule_products" ADD CONSTRAINT "FK_4e0739e5f0244c08d41174ca08a" FOREIGN KEY ("discount_rule_id") REFERENCES "discount_rule"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "discount_rule_products" ADD CONSTRAINT "FK_be66106a673b88a81c603abe7eb" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "claim_item_tags" ADD CONSTRAINT "FK_c2c0f3edf39515bd15432afe6e5" FOREIGN KEY ("item_id") REFERENCES "claim_item"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "claim_item_tags" ADD CONSTRAINT "FK_dc9bbf9fcb9ba458d25d512811b" FOREIGN KEY ("tag_id") REFERENCES "claim_tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_tags" ADD CONSTRAINT "FK_5b0c6fc53c574299ecc7f9ee22e" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_tags" ADD CONSTRAINT "FK_21683a063fe82dafdf681ecc9c4" FOREIGN KEY ("product_tag_id") REFERENCES "product_tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_images" ADD CONSTRAINT "FK_4f166bb8c2bfcef2498d97b4068" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_images" ADD CONSTRAINT "FK_2212515ba306c79f42c46a99db7" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "region_fulfillment_providers" ADD CONSTRAINT "FK_c556e14eff4d6f03db593df955e" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "region_fulfillment_providers" ADD CONSTRAINT "FK_37f361c38a18d12a3fa3158d0cf" FOREIGN KEY ("provider_id") REFERENCES "fulfillment_provider"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "region_payment_providers" ADD CONSTRAINT "FK_8aaa78ba90d3802edac317df869" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "region_payment_providers" ADD CONSTRAINT "FK_3a6947180aeec283cd92c59ebb0" FOREIGN KEY ("provider_id") REFERENCES "payment_provider"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "draft_order" ADD CONSTRAINT "FK_5bd11d0e2a9628128e2c26fd0a6" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}