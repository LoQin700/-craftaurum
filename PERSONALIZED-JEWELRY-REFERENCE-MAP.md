# Craftaurum — Personalized Jewelry 对标内容与图片清单

对标页面：https://www.sunrise-jewel.com/custom-personalized-jewelry-manufacturer/

说明：对标站图片用于页面结构和视觉核查。当前仓库已有、名称明确对应的图片使用 Shopify 的 `shopify://shop_images/xxx.jpg`（与现有模板实际存储格式一致）。尚未确认 Shopify 媒体库有对应文件的 8 个图片槽位，以原站公开 HTTPS 图片作为**临时预览回退**，后台仍保留 image_picker。上线前应使用已授权的 Shopify 托管图片替换临时 URL。不要把 WP 图片扩展名直接当成已经存在于 Shopify 的文件。

## 页面与参考站对应（2026-10-27 修正版）
1. Hero — Custom Personalized Jewelry Manufacturer：独立图文横幅，B2B 品牌定制介绍，不采用 Festival 导航式顶部引导。
2. Custom Special Jewelry：订婚、纪念日、毕业、新生儿等重要时刻；银色戒指/耳钉套装图。
3. Custom Enamel Jewelry：彩色珐琅首饰；五个彩色珐琅戒指图。
4. Unlock Custom Personalized Jewelry / Unlock Custom Meaningful Jewelry Elements for Your Brand：Birthstone / Initial / Zodiac / Number 四类概览。
5. Initial Jewelry Wholesale Manufacturer：个性化字母、姓名链、刻字与字母吊坠；1 张介绍主图 + 3 张画廊图。
6. Custom Birthstone Jewelry Manufacturer：诞生石意义与集合开发；主图 + 4 张产品画廊图。
7. Zodiac Jewelry Custom：十二星座与象征意义；主图 + Aries / Cancer / Taurus 三张产品画廊图。
8. Full Custom Jewelry Service / Using High-end Materials / Casting Jewelry & 3D Printed：三个制造服务卡片。
9. Editorial Contact：沿用 Craftaurum 统一下划线表单，Phone 默认非必填。

**注意：对标站没有独立 Number Jewelry 详细章节，仅在四大元素简介中包含 Number。** 之前添加的 Number 详细图文+画廊已撤回。

## 逐图对应

| 位置 | 本地 Shopify 媒体路径 / 临时来源 | 状态 |
| --- | --- | --- |
| Hero | `shopify://shop_images/custom-letters-jewelry.jpg` | 已在其他模板使用 |
| Custom Special Jewelry | `https://www.sunrise-jewel.com/wp-content/uploads/2024/10/custom-personalized-jewelry-set-600x300.webp` | 临时外部预览 |
| Custom Enamel Jewelry | `https://www.sunrise-jewel.com/wp-content/uploads/2024/10/2024-10-25-600x450.webp` | 临时外部预览 |
| 初始四分类 Birthstone | `shopify://shop_images/Custom-birthstone-jewelry.jpg` | 已在其他模板使用 |
| 初始四分类 Initial | `shopify://shop_images/custom-inital-necklace.jpg` | 已在其他模板使用 |
| 初始四分类 Zodiac | `shopify://shop_images/custom-zodiac-jewelry.jpg` | 已在其他模板使用 |
| 初始四分类 Number | `shopify://shop_images/number-jewelry-1.jpg` | 已在其他模板使用 |
| Initial 介绍主图 | `https://www.sunrise-jewel.com/wp-content/uploads/2024/09/2024-08-28-1-600x452.webp` | 临时外部预览 |
| Initial 图 1 | `shopify://shop_images/custom-inital-necklace.jpg` | 已在其他模板使用 |
| Initial 图 2 | `shopify://shop_images/nameplate-necklace.jpg` | 已在其他模板使用 |
| Initial 图 3 | `shopify://shop_images/custom-letters-jewelry.jpg` | 已在其他模板使用 |
| Birthstone 介绍主图 | `shopify://shop_images/Custom-birthstone-jewelry.jpg` | 已在其他模板使用 |
| Birthstone 图 1 — April | `https://www.sunrise-jewel.com/wp-content/uploads/2024/08/April-birthstone-pendants-1.webp` | 临时外部预览 |
| Birthstone 图 2 — August | `https://www.sunrise-jewel.com/wp-content/uploads/2024/08/August-birthstone-rings.webp` | 临时外部预览 |
| Birthstone 图 3 — September | `https://www.sunrise-jewel.com/wp-content/uploads/2024/08/September-birthstone-rings-1.webp` | 临时外部预览 |
| Birthstone 图 4 — November | `shopify://shop_images/November-birthstone-rings-1.jpg` | 已在其他模板使用 |
| Zodiac 介绍主图 | `shopify://shop_images/custom-zodiac-jewelry.jpg` | 已在其他模板使用 |
| Zodiac 图 1 — Aries | `shopify://shop_images/Aries-jewelry.jpg` | 已在其他模板使用 |
| Zodiac 图 2 — Cancer | `https://www.sunrise-jewel.com/wp-content/uploads/2024/08/Cancer-Jewelry.webp` | 临时外部预览 |
| Zodiac 图 3 — Taurus | `https://www.sunrise-jewel.com/wp-content/uploads/2024/08/Taurus-Jewelry.webp` | 临时外部预览 |
| Services: Full Custom | `shopify://shop_images/custom-design-jewelry.jpg` | 已在其他模板使用 |
| Services: Materials | `shopify://shop_images/pearl-materials.jpg` | 已在其他模板使用 |
| Services: Casting/3D | `shopify://shop_images/3d-render-1.jpg` | 已在其他模板使用 |

旧版本错误：
- 误删 Special Jewelry 与 Enamel Jewelry。
- 误将 Number Jewelry 扩展为独立完整章节。
- 忽略 Birthstone 四张差异化产品图与 Zodiac 三星座差异化图。
- 将原站三项制造服务替换为泛泛的 Why Choose。
- 部分图集为满足数量而重复使用相同品类图。

当前修复方法：
- 保持可编辑的现有 Section 体系：图文横幅、图文介绍、标题说明、图片卡片、图片画廊、图文卡片、Editorial Contact。
- 图文介绍和图片画廊新增**可选的临时参考图 URL 回退字段**：先用已选择的 Shopify 图片，否则使用参考 URL，均没有时继续占位。该字段是兼容性扩展，未设置的正式页面仍使用原来图片。
- 图片画廊新增可选 caption 与 alt；对标样例对应每一张图单独填写，其他画廊留空不显示 caption。
- 变更涉及 `templates/page.personalized-jewelry.json`、`templates/page.section-showcase.json`、`sections/image-text-feature.liquid`、`sections/image-gallery.liquid`。
- 已静态核查新模板所有类型、Setting ID、Block ID、select/range 值合法；仍需 Shopify Theme Check、Theme Editor 保存与 PC/Tablet/Mobile 前台验证。
