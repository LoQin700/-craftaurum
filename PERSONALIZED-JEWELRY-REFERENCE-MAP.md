# Craftaurum — Personalized Jewelry 页面与图片对照

对标页面：https://www.sunrise-jewel.com/custom-personalized-jewelry-manufacturer/

**媒体规范（2026-10-27 更新）**：自建 Section 只使用 Shopify 后台 `image_picker` 上传 / 选择图片，**不提供临时参考图片 URL 输入项或外链回退**。模板图片配置统一为 `shopify://shop_images/文件名`。以下引用的“已在其他模板使用”仅表明该路径确实存在于本仓库的页面 JSON 中，不代表已对 Shopify 媒体库做实时可用性测试。对标来源文件名只作为人工选图依据，不直接写入 URL 设置。

## 页面顺序
1. Hero：Custom Personalized Jewelry Manufacturer
2. Custom Special Jewelry
3. Custom Enamel Jewelry
4. Unlock Custom Personalized Jewelry：Birthstone / Initial / Zodiac / Number 概览
5. Initial Jewelry Wholesale Manufacturer：图文介绍 + 3 图画廊
6. Custom Birthstone Jewelry Manufacturer：图文介绍 + 4 图画廊
7. Zodiac Jewelry Custom：图文介绍 + 3 图画廊
8. Full Custom Jewelry Service / Using High-end Materials / Casting Jewelry & 3D Printed
9. Editorial Contact

原站的 Number 只属于四类概览，没有完整独立详细章节。本项目不额外增加 Number 专题，以保持参考内容逻辑。

## 图片绑定 / 待补媒体

| 位置 | 当前 Shopify image_picker 绑定 | 对标素材或备注 |
| --- | --- | --- |
| Hero | `custom-letters-jewelry.jpg` | 本仓库其他页面已使用 |
| Custom Special Jewelry | 尚无 | 待上传匹配的珠宝套装图，参考文件 `custom-personalized-jewelry-set-600x300.webp` |
| Custom Enamel Jewelry | 尚无 | 待上传匹配的彩色珐琅图，参考文件 `2024-10-25-600x450.webp` |
| 四类概览 — Birthstone | `Custom-birthstone-jewelry.jpg` | 已有模板使用 |
| 四类概览 — Initial | `custom-inital-necklace.jpg` | 已有模板使用 |
| 四类概览 — Zodiac | `custom-zodiac-jewelry.jpg` | 已有模板使用 |
| 四类概览 — Number | `number-jewelry-1.jpg` | 已有模板使用 |
| Initial 介绍图 | `custom-inital-necklace.jpg` | 现有同类别图；如要求对标构图一致，上传替换，原站参考 `2024-08-28-1-600x452.webp` |
| Initial 画廊 1 | `custom-inital-necklace.jpg` | 初始字母项链 |
| Initial 画廊 2 | `nameplate-necklace.jpg` | 姓名链 |
| Initial 画廊 3 | `custom-letters-jewelry.jpg` | 字母珠宝 |
| Birthstone 介绍图 | `Custom-birthstone-jewelry.jpg` | 已有模板使用 |
| Birthstone 画廊 1 | 尚无 | April，参考 `April-birthstone-pendants-1.webp` |
| Birthstone 画廊 2 | 尚无 | August，参考 `August-birthstone-rings.webp` |
| Birthstone 画廊 3 | 尚无 | September，参考 `September-birthstone-rings-1.webp` |
| Birthstone 画廊 4 | `November-birthstone-rings-1.jpg` | November，现有模板引用 |
| Zodiac 介绍图 | `custom-zodiac-jewelry.jpg` | 已有模板使用 |
| Zodiac 画廊 1 | `Aries-jewelry.jpg` | Aries |
| Zodiac 画廊 2 | 尚无 | Cancer，参考 `Cancer-Jewelry.webp` |
| Zodiac 画廊 3 | 尚无 | Taurus，参考 `Taurus-Jewelry.webp` |
| Full Custom Service | `custom-design-jewelry.jpg` | 已有模板使用 |
| High-end Materials | `pearl-materials.jpg` | 已有模板使用 |
| Casting / 3D Printed | `3d-render-1.jpg` | 已有模板使用 |

**状态**：目前 7 个对标专属图片槽位（Special、Enamel、Birthstone 3 张、Zodiac 2 张）尚未有可确认的 Shopify 托管图片。保持 image_picker 空白，待用户上传匹配素材；不以错品类图片或重复图片冒充对标内容。Initial 介绍图采用已存在的相近类别图，暂非原站同构图。

## Section Showcase
- 测试页 17 个 Section 使用独立实例，媒体设置一律由 image_picker 管理。
- 所有 Section 不提供 `external_image_url` 字段；特定页面的空媒体位在 Theme Editor 上传，不在源码中拼接远程 URL。
- Section 后台名称用专业的通用功能名，Preset 名称可按业务场景命名；Showcase 实例名称与后台功能名一致。

## 验收
- GitHub JSON/Schema 静态解析与相关 setting 字段一致性需要核查。
- Shopify Sync、Theme Editor 保存、桌面/平板/手机实际显示仍需在线验收。
