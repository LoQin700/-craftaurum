# Craftaurum — 项目进度

## 基准
- GitHub: `LoQin700/-craftaurum`
- Branch: `main`
- Theme: Shopify Horizon 4.1.3（依据 `config/settings_schema.json`）
- General rules: `SHOPIFY-HORIZON-DEVELOPMENT-GUIDE.md`

## 2026-10-22 全局第一步（代码实施记录）
| 项目 | GitHub 代码状态 | Shopify Sync / Theme Editor / 三端实测 |
| --- | --- | --- |
| PC/Mobile 段落及 H1–H6 | 已增加全局 Mobile 可选字号，默认 inherit；PC 保持 Horizon 原生 | 待验证 |
| 购物车覆盖式抽屉 | 已对购物车单独启用 overlay-only / no-persist，修改原生 drawer 及 squeeze 协调；其他 drawer 保持现状 | 待验证 |
| 一级/二级按钮 Hover | 已增加可选的全局背景、文本、边框 Hover 配置，保持原生智能回退；自定义按钮复用原有 resolve-custom-hover | 待验证 |
| 手机端多级菜单 | Horizon 原有逐级进入子菜单；已修改返回时的子菜单状态保持，尚需实机确认各菜单样式/模式 | 待验证 |
| 手机端一级菜单字号 | 已优先继承全局移动端 H5 变量，未配置移动端字号时跟随 Horizon 默认 | 待验证 |
| 产品卡及徽章 | 已检查文件路径存在：`blocks/_product-card.liquid`、`snippets/product-card.liquid`、`snippets/product-badges-styles.liquid`，未更改商品卡设计 | 待功能检查 |
| 页面宽度 / 断点 | 保留 Horizon 原有 page width 和 749 / 990 断点，不改变商店配置 | 待实测 |

## 当前限制
- GitHub 修改已提交到 main；**未直接确认 Shopify 店铺同步、在线渲染、Theme Editor 保存状态或真实三端 QA**。
- 本次没有修改 `config/settings_data.json`、首页 JSON、商品数据或店铺内容。
- 后续应验证购物车蒙层 / 外部点击 / Escape / 滚动锁定 / 折扣 / 数量 / 结账；PC、Tablet、Mobile 字号；主次按钮 Hover；多级菜单前进/返回和原位置恢复。
- 若 Shopify Theme Check 报错，先以仓库当前文件和 CLI 结果定位问题，不应通过堆叠全局 CSS 修补。

## 2026-10-22 合作品牌展示 Section
- 新增 `sections/brand-partners.liquid`（通用命名），保留参考布局：居中标题、描述、桌面三列/手机单列图片轮播、左右箭头、圆点、底部 NDA。
- 默认 Craftaurum 英文文案；图片均通过 Theme Editor block `image_picker` 上传，未上传采用 Shopify `image` 占位图；不引用原站图片或 URL。
- 已提交至 GitHub main：`685b15ea`。未改首页 `templates/index.json`，请在主题编辑器按需添加并上传图片。
- 代码已提交；Shopify Sync、Theme Check 与三端真实测试尚待确认。

## 2026-10-22 首页新增图片轮播及图文介绍
- `sections/brand-partners.liquid` 的后台 Section / Preset 名称改为 **图片轮播**（原 `brand-partners` 文件路径不变以保留兼容）；图片 Block 使用通用名称。
- 新增 `sections/image-text-feature.liquid`，后台名 **图文介绍**。居中标题、顶部黑色引导条、左右图文双列、可选底部 CTA；PC 图片左右可切换，Mobile 单列；Image Picker 未设置则使用 Shopify 原生占位图。
- `templates/index.json` 已挂载：原有 hero 后依次是图片轮播、S925 银饰图文介绍（文左图右）、黄金珠宝图文介绍（图左文右），后面保留原产品列表。
- 两个实例写入 Craftaurum 专属英文内容，没有引用 Sunrise-jewel 的文案或素材；图片全部留给 Theme Editor 后台上传。
- 按钮链接未设置：顶部引导条渲染静态标签、第一组底部 CTA 禁用，避免虚假跳转；上线前在编辑器设置真实链接。
- GitHub 已提交；Shopify 主题同步、Theme Check 和三端实际 UI 仍未现场验证。

## 2026-10-22 后续全局设置与首页文案调整
- 以 main 当前文件为基准检查；当前首页已由用户在编辑器建立 2 个 `image-text-feature` 实例，直接复用 `image_text_feature_NWRYeQ` 和 `image_text_feature_YzURpA`，未创建重复实例、未重置图片字段。
- Theme Settings 按钮：去掉「胶囊标签」说明及半径编辑控件；原生胶囊标签 CSS 保留并设置 40px 兜底，以免影响筛选/搜索。一级、二级 Hover 设置移回对应按钮分组。
- Typography：移动端段落与 H1–H6 设置分别紧邻对应桌面字号设置。移动端未指定时仍继承 Horizon。
- 通用图文介绍新增 Section 后台全局 H1–H6 字号预设选择（标题 H2、副标题 H3、正文 H4）和上/下按钮主、次、文字链接样式选择。通用图片轮播增加标题 H2、正文 H4、底部说明 H5 字号预设。
- 全局文本 CTA 按钮链接样式增加 » 前缀（排除 SVG/图标操作控件），顶部静态标签也增加 »；其余原生操作按钮避免添加不合适的符号。
- 首页银饰内容更新：Sterling Silver 制造、设计、铸造、抛光、镀层、定制范围；左文右图；底部 Start Your Project 链接复用当前接洽页地址。黄金内容更新：定制黄金、金属选择与镀层、工艺及品牌合作；左图右文；无底部 CTA。
- 已静态验证两份 Section schema、全局设置 JSON、当前 index JSON 均可解析，首页实例次序和左右位置正确。
- GitHub 已提交；Shopify 同步 / Theme Editor / 三端可视化 / Theme Check 仍待确认。以上全局 CTA 前缀只覆盖符合选择器的文本链接，不涵盖第三方 App 与纯图标按钮。
