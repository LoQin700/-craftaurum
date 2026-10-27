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

## 2026-10-22 珠宝系列图片展示 + 全局字号调整
- 新增 `sections/image-collection-grid.liquid`，后台名称「珠宝系列图片展示」。根据参考源码呈现桌面首行两张大图、次行三张卡片；卡片居中标题、蒙层、hover 蒙层加深、内部线框显现与缩放动画。图片未上传时为 Horizon SVG 占位。
- 每张卡片支持独立标题、上传图片、系列绑定或自定义 URL；无 URL 不生成空链接。默认图片由用户在 Theme Editor 填写，未引入外部站图片。
- 手机端标准：**默认**独立开放「每行 1–4 张」（range）与「网格/轮播」（select）；默认 2 列/网格。以后类似列表、图片卡片模块按此实施，除非有特别指示。轮播支持触摸横滑与箭头导航。
- 蒙层默认透明度 25%，hover 50%；边框动画为缩放淡入，作用域限本 Section；低动态偏好时关闭动画。
- 首页只追加一个 `image_collection_grid_craftaurum`，顺序在现有两个图文介绍之后；保留原 Hero、轮播与两组图文实例、全部已配置字段。
- 全局 Typography 目标桌面：正文16、H1 40、H2 32、H3 24、H4 18、H5 16、H6 14（px）；手机：正文14、H1 32、H2 26、H3 20、H4 16、H5 15、H6 14（px）。同时修改 schema 新建默认值与 `settings_data.json` 当前配置。
- GitHub 已提交，相关 Section Schema、settings JSON、首页 JSON 可解析。Shopify Theme Check、Theme Editor 保存和真实浏览器视觉/交互未执行；需要独立核实同步。

## 2026-10-23 全局 Typography 与按钮字号精调

本次改动仅基于当前 `main` 分支完成，不改版式、模板实例或媒体绑定。

### 字号预设与步进
| 类型 | 桌面默认 (px) | 手机默认 (px) |
| --- | ---: | ---: |
| 正文 | 16 | 14 |
| H1 | 40 | 32 |
| H2 | 32 | 26 |
| H3 | 24 | 20 |
| H4 | 18 | 16 |
| H5 | 16 | 14 |
| H6 | 14 | 12 |
| 一级按钮 | 16 | 14 |
| 二级按钮 | 16 | 14 |

- 全局文字的桌面/手机设置项全部改为每项间隔 **2px**，无不连续档位。标题桌面候选 12–96px、手机候选 12–64px；正文桌面 12–32px、手机 12–28px。
- 移动端字号控件移除 `inherit` / 跟随桌面选项，并写入明确的移动端默认字号。Liquid 同时覆盖 `--font-size--*` 和 `--font-*--size` CSS tokens。
- 主、次按钮各增加桌面与手机独立字号（每 2px 一档，12–28px）；接入 `snippets/theme-styles-variables.liquid` 和 `assets/base.css` 原生按钮选择器。
- 一级、二级按钮 Hover 背景和边框默认 `#E1E3E6`，Hover 文字默认 `#1B1B1B`（浅色背景上保持对比），均可在 Theme Settings 单独调整。Custom 按钮仍保留自定义样式的回退路径。
- `config/settings_schema.json`、`config/settings_data.json` 的 current 与 Horizon 主题 preset 同步为这套默认值；其余配置保留。
- 已读取 GitHub 最新代码并进行静态核查：全部字号选项为 2px 等差、当前值/预设值合法、按钮颜色与变量绑定存在、JSON 可解析。
- **未执行 Shopify 线上同步确认、Shopify CLI theme check 或真实三端前台 QA**；需分别验证，不能将 GitHub 提交等同于已上线。

## 2026-10-23 Horizon 原生化统一重构（单批次）

### 目标与保留原则
- 保留原有首页现存 Section IDs、`brand-partners` / `image-text-feature` / `image-collection-grid` 类型、原 Block Type、图片选择器和业务内容字段，防止 Theme Editor 绑定丢失。
- 视觉参照 Sunrise-jewel：Logo 三列图片轮播；银饰/黄金双列交错图文；2+3 系列图片展示和 Hover 蒙层/线框动画。
- 组件原则：CTA 使用一个公共 `craftaurum-cta`；轮播使用 Horizon 原生 `slideshow`、`slideshow-slide`、`slideshow-controls`；卡片由公共 `craftaurum-collection-card` 输出。
- 功能性控件（轮播箭头、购物车、搜索等）继续使用 Horizon 原生按钮机制，**不**向其强加 CTA 前缀。

### 修改文件
- `snippets/craftaurum-cta.liquid`：新增共用 CTA。主/次/文字/自定义样式、链接、block 属性、尺寸、默认 “»” 标识均由同一个组件渲染。
- `snippets/button.liquid`、`blocks/button.liquid`：Horizon 原有 Button Theme Block 委派到上述 CTA，保留 block 宽度、目标地址、新窗口与自定义颜色。
- `assets/base.css`：移除之前全局 `::before` 插入 “»” 的粗放规则，修复对导航/功能按钮布局的干扰。
- `sections/image-text-feature.liquid`：保留已配置的两个实例，接入 Horizon page-width / spacing-style / H1-H6 预设及公共 CTA；精简设置，并保留左右图文、原图片及链接字段；新加可选纯文本副标题以匹配独立副标题预设，不强迫顶部 CTA 使用副标题字号。
- `sections/brand-partners.liquid`：改用 Horizon Slideshow 代替自写 setInterval/ResizeObserver/scrollTo；原 Logo Block 图片与文字保持；PC 三列，Mobile 1-4 项/轮播或真正的独立网格；轮播使用原生箭头、圆点、自动播放逻辑。
- `snippets/craftaurum-collection-card.liquid`：新增共用图片卡片，支持 image_picker，缺图时回退到绑定的 collection.image；标题和链接也支持独立设置或 collection 回退。
- `sections/image-collection-grid.liquid`：保留 PC 2+3 布局、默认蒙层25%/Hover50%与边框动画，使用公共卡片与 Horizon 原生手机轮播；Mobile 1-4 列/网格或轮播。增加 Horizon 背景色/对比度机制，默认背景#F4F4F4。
- `templates/index.json`：核对后发现用户当前索引丢失系列图片展示，按之前明确要求恢复在银饰与黄金图文之后；其他四个已有实例及内容不重建。

### 静态核查
- 自定义 Section Schema 可解析；字段和 Block Type 与当前 index.json 保持兼容。
- 三个 Section 均不再有自写 `<script>`；Section CSS 改为 `{% stylesheet %}` 与实例根节点 CSS 变量。
- CTA 箭头只在公共 CTA 组件渲染；全局 CSS 的粗放伪元素方案已移除。
- 当前模板次序：Hero → 图片轮播 → 银饰图文 → 黄金图文 → 珠宝系列图片展示。
- 仍需 Shopify CLI Theme Check、Theme Editor 添加/排序/图片保存与真机桌面/平板/手机验证；**目前仅能确认 GitHub 源码提交和静态一致性，不可宣称前台已验收。**

## 2026-10-23 CTA 重复箭头修复
- 现象：首页图文介绍的顶部 S925 Jewelry Custom 按钮出现 `» »`。
- 代码检查：当前 `index.json` 的 `top_label` 为纯文本（无符号），公共 `craftaurum-cta.liquid` 自带一次内联箭头。截图中的额外符号来源尚未通过前台 DOM 验证。
- 源头修复：仅修改共用 `snippets/craftaurum-cta.liquid`，先清理可能存在于按钮文本开头的旧 `»` / `›`，统一由共用 CTA 输出单一标记；用高针对性的 `.ca-cta.ca-cta::before` 阻止旧 CSS 伪元素再额外输出箭头；顺便修复 `show_indicator: false` 被 `default` 覆盖的问题。
- 影响范围：沿用公共 CTA 的图文介绍与 Horizon 导航型 Button Block；**不改变**轮播控件、购物车按钮和首页内容/图片绑定。
- GitHub 修复提交：`b03337104bb02152e54bc124c03f0aed99fad484`。Shopify Theme Editor 和前台 DOM 未实测，需确认最新代码已同步。

## 2026-10-23 Jewelry Collections 独立展示页面

### 对标依据
- 参考：https://www.sunrise-jewel.com/our-jewelry/custom-fashion-jewelry/
- 页面实际逻辑：顶部珠宝定制介绍 + B2B Quote/Catalog → Rings（标题、简介、跳转、3图）→ Earrings（同）→ Bracelets（同）→ Necklaces（同）→ 询盘表单。
- 本站使用 Craftaurum 原创英文文案，不移植对标站产品图片、产能数字、价格或无法证实的认证承诺。

### 实施与文件
- 新增 `sections/jewelry-collections-overview.liquid`，后台名称「珠宝系列总览」；Hero 主图与文本可后台编辑，四大类别用可增删/排序 Block，每个支持自定义图1/2/3、标题、富文本、关联 Shopify Collection 与自定义 URL（自定义优先）。
- 所有导航 CTA 统一 `render 'craftaurum-cta'`；初始 B2B Quote / Catalog 跳至本页原生询盘表单位置，分别可配置外部链接。
- 手机端类别图片支持每行1–4张、网格/原生 Horizon Slideshow 轮播切换；桌面保留3图一排。
- 新增 `templates/page.jewelry-collections.json`，预设 Rings / Earrings / Bracelets / Necklaces 四个完整英文内容实例，末尾复用现有 `page.contact.json` 的 Horizon `contact-form` Theme Block。
- 未修改 `templates/index.json`、`templates/collection.json` 或 `templates/product.json`。分类页面的商品网格与单品详情继续原生 Horizon：main-collection 和 product-information。
- 新模板不能代替 Shopify Admin 中的 Page 数据或导航菜单：需要新建 `Jewelry Collections` 页面、选择 `jewelry-collections` 主题模板，然后把四个 Block 的 Collection 绑定到真实 Shopify 系列，上传图片，最后将菜单项链接到实际页面。
- 静态验收：Section schema、页面 JSON、Block IDs、默认值/range、Horizon 内建联系表单及产品模板结构均已检查；本次未运行 Shopify CLI Theme Check，未验证 Theme Editor 及前台浏览器实际显示。

## 2026-10-23 15:02 · Jewelry Collections 第二轮统一重构

用户反馈八项整改集中完成：
1. **Contact Form 视觉**：仍复用原生 `blocks/contact-form.liquid`（不碰提交事件、验证、表单字段）；新增 `assets/craftaurum-contact.css`（宽度、边框、留白、输入框、响应式双列/单列、Focus、提交按钮），由 `layout/theme.liquid` 仅在 `page.jewelry-collections` 模板加载，避免污染其它页面。
2. **页面宽度/全宽**：所有本轮涉及的自定义 Section 包括 `jewelry-collections-overview`、`image-gallery`、`text-heading` 以及已开发的 `brand-partners`、`image-text-feature`、`image-collection-grid`，统一添加 `section_width` 选择页面宽度/全宽，并接入 Horizon `section--page-width / section--full-width`。
3. **正文默认字号 H5**：上述自定义 Section 的正文字号预设统一默认 H5，首页既有三类 Section 实例也将原 H4 正文预设更新至 H5；标题等仍允许选 H1–H6。
4. **通用命名**：旧 `jewelry-collections-overview.liquid` 文件因保留模板兼容和设置 ID 不改文件路径，Theme Editor 改名为「图文横幅」，去掉内置分类 Block，仅保留横幅内容及双 CTA。
5. **分类图集彻底拆分**：新建 `sections/image-gallery.liquid`，后台「图片画廊」，图像为独立 image Block，可持续增删/排序，不写死 3 张；Shopify 平台自身的 Section Block 上限仍适用。PC 独立 1–6 列 / 网格或 Horizon 原生轮播；Mobile 独立 1–4 列 / 网格或轮播。
6. **首页其它命名**：`image-collection-grid.liquid` 后台名称从「珠宝系列图片展示」改为「分类图片展示」，现有实例类型不变。
7. **文字链接箭头与下划线**：`snippets/craftaurum-cta.liquid` 中把 “» 文字” 作为一个内联 `ca-cta__content` 输出，文字链接的下划线作用于整个内联组；彻底移除 `assets/base.css` 中旧版全局伪元素箭头，避免重复和断开的下划线。购物车和表单提交等功能控件保持原生按钮行为。
8. **后台文案精简**：图片画廊的 Collection 字段只标记「产品系列」，自定义跳转仅「链接」，没有多余的括号解释。
9. **模板迁移**：`templates/page.jewelry-collections.json` 从原 `jewelry_overview` 下的 Rings/Earrings/Bracelets/Necklaces 四个 category Block，分别迁移为四个独立 `image-gallery` Section，原分类标题、正文、链接、collection、原三个图片槽位已按原字段值迁移到 Gallery Image Block。旧 Hero 实例继续复用其 ID 及设置。末尾新增通用 `text-heading` 锚点段并紧接 Horizon 原生 Contact Form。页面顺序：图文横幅 → 四个图片画廊 → 标题说明 → 原生表单。
10. 不改 `templates/collection.json` 或 `templates/product.json`。

静态校验通过：全部六个自定义 Section 的 Schema JSON、Range、宽度绑定、页面实例字段映射、四个 Gallery 的 Block 数据和 CTA/Contact 资源引用。**Shopify CLI Theme Check / Shopify 同步 / Theme Editor 保存 / Desktop、Tablet、Mobile 前台视觉尚未在真实商店验证。**

## 2026-10-23 · 通用品类展示模板 + 三色体系

### 模板结构
新增 `templates/page.jewelry-showcase.json`，作为 Rings / Earrings / Bracelets / Necklaces 等品类的通用工厂展示页面。默认顺序：
1. `图文横幅`：左右图文，新增图片左右位置与 16:9 / 4:3 / 1:1 比例；本模板预设左文右横图 16:9。
2. `横向 CTA`：深色横条，用共用 `craftaurum-cta`。
3. `图文卡片`：原 `image-gallery` 升级；每个 Block 有主图、Hover 图、标题、H5 正文、按钮文字 / 主次/文字链接 / URL。桌面 2–5 列网格或轮播；手机严格 1–2 列，默认 1 列 Horizon 原生轮播并保留左右切换。
4. `交互图文`：产品/品类的细分能力。桌面左侧纵向项目，Hover / Focus / Click 联动右侧图片；手机点击项目切换下方图片。交互脚本为 `assets/craftaurum-interactive-feature.js`，使用 Custom Element 并保护重复注册。
5. `图文介绍`：扩展 `heading_position`，模板预设左图右文、标题放正文列，用于工厂 / About 简介。
6. `图标文字`：工厂通用能力，支持上传自定义图标或使用轻量线性 SVG，桌面 2–6 列、手机 1–2 列。
7. 复用既有 `标题说明 + Horizon Contact Form`，没有重写 Contact Form。
- `layout/theme.liquid` 已将已优化的 `craftaurum-contact.css` 同时加载到 `page.jewelry-showcase`、`page.jewelry-collections` 和 `page.contact`。

### 全站色调
- Background：`#F8F7F4`
- Accent / Logo Gold：`#C7A85E`
- Dark / Text：`#17191A`
- `config/settings_schema.json`、`config/settings_data.json` 的 Current + Horizon Preset 已同步。
- 主/次按钮 Hover 背景与边框为 Gold，Hover 文字为 Dark；文字链接低优先级 Hover 改为 Gold。
- `snippets/color-palette.liquid` 输出 `--color-accent` / `--color-accent-rgb` 供所有通用 Section 使用。
- Contact Form、分类图片展示等此前遗留的旧灰白色已按新体系调整；Settings Data 中旧 `#E1E3E6 / #F4F4F4 / #EEF1EA` 已清除。

### 兼容与验证
- `page.jewelry-collections.json` 已兼容升级后的图文卡片 Block：旧图片保留，新增标题/正文/按钮字段明确为空，不会因 schema default 自动出现重复文案；手机列数限制在 1–2。
- 静态检查结果 PASS：新旧页面模板无 orphan settings / block settings；所有 Section Schema 可解析；Range 默认值合法；全局色板与按钮 Hover 值匹配；`page.jewelry-showcase` Section 顺序完整。
- 未运行 Shopify CLI Theme Check，也未在 Shopify Theme Editor / 实际浏览器完成桌面、平板、手机 QA，因此 GitHub 静态通过不等于已上线验收。

## 2026-10-23 · jewelry-rings 页面实例已填充
- Shopify 后台新建的 `jewelry-rings` 已同步出 `templates/page.jewelry-rings.json`；原模板仅含 `main-page`。
- 直接在现有模板上填充 Rings 工厂展示结构：图文横幅 → 横向 CTA → 图文卡片 → 交互图文 → 图文介绍 → 图标文字 → 标题说明 → Horizon 原生 Contact Form。
- Rings 默认文案：
  - Hero：`Custom Rings Manufacturing.`
  - 图文卡片：Gemstone Rings / Metal & Minimal Rings / Pearl Rings / Signature Ring Designs。
  - 交互能力：Material Selection / Ring Craftsmanship / Brand-Led Design Development / Production Review。
  - 工厂简介、通用制造能力和 Contact 文案均改为 Rings 场景，正文继续默认 H5。
- 图片字段均保持空白，由 Theme Editor 上传真实素材；Hero 默认 16:9 左文右图；图文卡片桌面4列，手机1列原生轮播。
- `layout/theme.liquid` 已让 `page.jewelry-rings` 复用此前优化好的 `craftaurum-contact.css`。
- 静态模板检查 PASS；当前页面模板与 Section 类型映射完整。Shopify 主题编辑器视觉仍需实测。

## 2026-10-23 · jewelry-rings 模板按 Shopify 实际回写结构修正
- 用户在 Theme Editor 手动向 `jewelry-rings` 添加了一个测试 `interactive-feature`。GitHub 最新模板因此被 Shopify 回写为：默认 `main-page` + `interactive_feature_cFYGmj`，证明之前整份替换 JSON 会被后台保存覆盖。
- 本次改法改为：以 Shopify 最新回写文件为底稿，完整保留 `main` 和手动生成的 `interactive_feature_cFYGmj` ID；直接把该测试 Section 填成 Rings 的 Why Choose 内容。
- 其余 Section 使用 Shopify 编辑器风格的唯一 ID 逐个追加：图文横幅、横向 CTA、图文卡片、图文介绍、图标文字、标题说明和原生 Contact Form。
- 当前 `page.jewelry-rings.json` order 已确认包含 9 个 Section：main + 8 个展示/联系 Section；GitHub 二次读取仍保持该结构。
- 这次不再依赖 `page.jewelry-showcase` 模板；实际页面以用户后台创建的 `jewelry-rings` 为准。

## 2026-10-23 · Section Picker 缺项复核
- 用户截图确认 Theme Editor 当前可见：交互图文、分类图片展示、图文介绍、图文横幅、图片画廊、图片轮播、标题说明、横向 CTA。
- 复核后确认应补的通用能力为：图文卡片、图标文字；旧“图片画廊”为历史 Section，不应继续作为新页面的主卡片模块。
- `sections/jewelry-collections-overview.liquid` 补充 `presets`，确保“图文横幅”进入添加分区列表。
- 新建干净版 `sections/content-cards.liquid`（图文卡片）：主图/Hover图、标题、H5正文、每卡CTA；手机1–2列，支持网格/轮播。
- 新建干净版 `sections/icon-with-text.liquid`（图标文字）：工厂通用能力展示，桌面多列、手机1–2列。
- 旧 `image-gallery.liquid` 与 `icon-text-list.liquid` 已移除 presets，仅用于保留旧实例兼容。
- `sections/image-text-feature.liquid` 桌面双列由 `align-items:start` 改为 `align-items:center`，文字与图片垂直居中；左右图片布局均适用。

## 2026-10-23 · Section Picker 缺项根因修正（最终结构）
- 进一步代码复核确认：之前同时存在两组重复 schema 名称（旧/new 图文卡片、旧/new 图标文字），且新建独立 Section 文件并未稳定进入 Shopify Add section picker。
- 改为只依赖已被 Shopify Theme Editor 实际识别的 Section 文件：
  - `image-gallery.liquid` 恢复为「图文卡片」并恢复 preset；继续承载主图/Hover图/标题/H5正文/每卡 CTA、手机1–2列网格/轮播。
  - `interactive-feature.liquid` 改为通用「能力展示」，同一文件提供两个 preset：`交互图文` 与 `图标文字`；通过 `layout_mode` 切换。已有交互图文实例没有 `layout_mode` 时默认继续按 interactive 渲染。
  - 备用 `content-cards.liquid` / `icon-with-text.liquid` 与旧 `icon-text-list.liquid` 均移除 presets，仅保留兼容，不进入 picker。
  - 旧 `image-gallery.liquid` / `icon-text-list.liquid` 重名已清理，避免 schema 名冲突。
- `page.jewelry-showcase.json` 也统一回到 `image-gallery` + `interactive-feature`（icons mode），不再依赖备用 Section。
- `image-text-feature.liquid` 已改为桌面双列 `align-items:center`，图片与文字垂直居中。
- 当前预期 Picker 通用项：图文卡片、交互图文、图标文字、图文介绍、图文横幅、分类图片展示、图片轮播、标题说明、横向 CTA。

## 2026-10-23 · Rings 最终确认版（按 HTML 预览落地）

### 最终页面顺序
`page.jewelry-rings.json`：
1. 图文横幅：白底、左文右横图、16:9、Rings OEM/ODM 文案。
2. 横向 CTA：默认全宽，真实黑色背景容器 `#17191A`，文字 `#F8F7F4`，Hover `#C7A85E`。
3. 图文卡片：白底；桌面 4 列；手机 1 列轮播（设置范围 1–2）；每卡主图/Hover 图/标题/H5 正文/CTA。
4. 交互图文：白底；Why Choose Our Rings，左侧能力列表，Hover/Focus/Click 联动右图。
5. 图文介绍：白底；默认左图右文，4:3，图片与文字垂直居中。
6. 图标文字：默认 `#F8F7F4` 背景，黑字 + 金色重点；桌面 4 列、手机 2 列。
7. Horizon 原生 Contact Form：不重写表单、不加载 Rings 自定义表单 CSS；继续使用原生 `section.liquid` 的 `section_width`（页面宽度/全宽），Rings 默认页面宽度。
- 默认 main-page 保持 disabled。

### Section 结构
- `image-gallery.liquid` 现为「图片展示」通用 Section，提供两个清晰 preset：
  - 「图片画廊」= 纯图片，手机 1–4 列，网格/轮播。
  - 「图文卡片」= 图片+Hover图+标题+H5正文+按钮，手机严格 1–2 列，网格/轮播。
- `interactive-feature.liquid` 现为「能力展示」，两个 preset：
  - 「交互图文」= 产品细分能力，默认白底。
  - 「图标文字」= 工厂通用能力，默认 `#F8F7F4`。
- `horizontal-cta.liquid` 改为内部 surface 真正承担背景，避免 Horizon `.section` 强制 transparent 导致背景色失效。
- `jewelry-collections-overview.liquid`、`image-text-feature.liquid`、`image-gallery.liquid`、`interactive-feature.liquid` 均补充背景色 / 文字色 / 重点色设置，默认按 Craftaurum 色系。

### 全局视觉
- 页面背景：`#FFFFFF`
- 深色 / 主文字：`#17191A`
- Logo / Accent / Hover：`#C7A85E`
- Icon with Text 背景：`#F8F7F4`
- H1–H6 默认桌面：24 / 22 / 20 / 18 / 16 / 14 px
- H1–H6 默认手机：22 / 20 / 18 / 16 / 14 / 12 px
- Paragraph：桌面 16 / 手机 14
- Primary / Secondary Button：桌面 16 / 手机 14
- 正文型自定义 Section 默认选择 H5。

### 验证
静态验证 PASS：
- Rings 模板所有 Section setting / block setting 均与对应 schema 匹配，无 orphan 字段。
- Hero 白、CTA 黑、Cards 白、Why Choose 白、Factory Intro 白、Icons `#F8F7F4`、Contact 原生。
- Contact 使用 Horizon 原生 `section + contact-form`，Rings 不再加载 `craftaurum-contact.css`。
- 全局颜色和连续字号值均与最终要求匹配。

## 2026-10-23 · Rings 四项代码修正
- 横向 CTA：上下 padding 现在明确应用在黑色 `.ca-horizontal-cta__surface` 内部；Rings 实例默认上下至少 40px，避免黑色区域内部无留白。
- 图片画廊 / 图文卡片彻底拆分：
  - `image-gallery.liquid` = 纯「图片画廊」，仅图片、网格/轮播、PC/Mobile 列数、比例。
  - `content-cards.liquid` = 独立「图文卡片」，主图 + Hover 图 + 标题 + H5 正文 + CTA；PC 2–5列，Mobile 1–2列，网格/Scroll Snap 轮播。
- 交互图文 / 图标文字彻底拆分：
  - `interactive-feature.liquid` = 仅「交互图文」。
  - `icon-with-text.liquid` = 独立「图标文字」，默认背景 `#F8F7F4`。
- Contact：保留 Horizon 原生 `section.liquid + contact-form`。在原生 Contact Form Block 增加 `follow_section_width`（默认开启）。开启后 Block 宽度固定 100% 跟随 Section：页面宽度 = 页面内容区 100%；全宽 = 全宽内容区 100%。不再被原来的 custom_width 50% 抵消。
- `page.jewelry-rings.json` 已补齐：Hero → CTA → 图文卡片 → 交互图文 → 图文介绍 → 图标文字 → 原生 Contact。
- 静态检查 PASS：CTA surface padding、五个独立 Section preset、Contact 跟随宽度、Rings 完整顺序均通过。

## 2026-10-23 · 图标文字视觉与原生 Icon 重构
- `sections/icon-with-text.liquid` 已从规则四宫格样式改为更轻量的 editorial icon row，默认取消强制顶线与自绘菱形 fallback，减少“AI 模板感”。
- 直接复用 Horizon 原生 `snippets/icon-or-image.liquid` + `snippets/icon.liquid`：
  - Block 支持 59 个 Horizon 原生 Icon 预设；
  - 支持上传自定义 Icon 图片，上传图片时沿用 Horizon 原生优先逻辑；
  - 支持每个 Block 单独 Icon 颜色。
- 新增 Section 设置：
  - 样式预设：编辑型 / 极简 / 居中；
  - Icon 位置：上方 / 左侧；
  - Icon 大小：16–96px；
  - Icon 与文字间距；
  - 列间距 / 行间距；
  - PC 2–6 列、Mobile 1–2 列；
  - 背景色 / 文字色 / 重点色、H1–H6 字号和上下留白。
- 默认背景继续为 `#F8F7F4`，主文字 `#17191A`，Accent `#C7A85E`。
- Shopify schema 级校验 PASS：所有 range 步数合法、select 默认值合法、preset block/icon 合法，原生 icon 选项与 Horizon 当前 `blocks/icon.liquid` 完整一致（59 个）。

## 2026-10-23 · Jewelry category pages completed from Rings structure
- Kept `page.jewelry-rings.json` unchanged as the structural reference.
- Added 5 category templates using the same section order as Rings:
  - `page.jewelry-fashion.json`
  - `page.jewelry-earrings.json`
  - `page.jewelry-necklace.json`
  - `page.jewelry-bracelets.json`
  - `page.jewelry-artisanal.json`
- Shared structure: disabled main-page → 图文横幅 → 横向 CTA → 图文卡片 → 交互图文 → 图文介绍 → 图标文字 → Horizon native Contact Form.
- Images remain empty / Theme Editor replaceable; only category copy and block content were changed.
- Content direction was adapted from Sunrise Jewel's category pages:
  - Fashion Jewelry: rings / earrings / bracelets / necklaces, multi-category customization.
  - Earrings: pearl / stud / hoop / gemstone earrings and custom earring development.
  - Necklace: pendant / pearl / choker / fashion & logo necklaces and B2B customization.
  - Bracelets: chain / bead / bangle / statement bracelets, materials/plating/fit.
  - Artisanal: large pendants / brooches / waist chains / corporate jewelry gifts.
- Avoided carrying Sunrise-specific claims such as decades of experience, CA65/REACH compliance, low MOQ or other unverified facts into Craftaurum copy.
- Custom-section schema/template cross-check PASS for all 5 new templates: no unknown custom setting IDs or block setting IDs.

## 2026-10-24 · OEM Jewellery page completed
- Added `templates/page.oem-jewellery.json`.
- Structure follows the approved Sunrise OEM Jewellery framework using existing reusable sections only:
  1. Hero / 图文横幅
  2. What We Can Produce / 分类图片展示
  3. Why Choose Our OEM Jewellery Manufacturing Services? / 图文横幅
  4. Six alternating 图文介绍 process sections:
     - Consultation & Conceptualization
     - Design & Prototyping
     - Material Selection
     - Precision Manufacturing
     - Quality Assurance
     - Customization & Branding
  5. Icon With Text / OEM advantages:
     - Unparalleled Craftsmanship
     - Tailored Solutions
     - Strict Quality Standards
     - Clear Collaboration
  6. Horizon native Contact Form
- Process image positions alternate left/right across all six sections.
- Classification area includes 6 categories: Custom Fashion Jewelry, Custom Rings, Custom Earrings, Custom Necklace, Custom Bracelets, Artisanal Jewelry.
- Copy direction was adapted from Sunrise OEM Jewellery page while avoiding unverified Craftaurum-specific claims such as owning a plating factory.
- Category images and process images remain empty for Theme Editor upload; links remain unset rather than guessing page handles.
- Custom section/template cross-check PASS with 0 unknown setting IDs or block setting IDs.

## 2026-10-24 · 分类图片展示布局升级
- `sections/image-collection-grid.liquid` 从原来写死的桌面端 2+3 布局改为通用配置：
  - PC 每行 1–6 个（range）；
  - PC 支持网格 / 横向轮播；
  - Mobile 保留 1–4 个 / 网格 / 轮播；
  - 移除旧的 `nth-child(-n+2)` 2+3 写死逻辑。
- 首页原 5 个分类卡片拆成两个 Section：
  - 第一段：2 个卡片，PC 2 列 Grid；
  - 第二段：3 个卡片，PC 3 列 Grid；
  - 第二段不重复标题和介绍，视觉上连续衔接。
- OEM Jewellery 的 What We Can Produce 保持一个 Section，6 个卡片设置为 PC 3 列 Grid，即上下两排各 3 个。
- 静态验证 PASS：Schema range 合法、首页 2+3 拆分正确、OEM 6 / 3 列正确、旧写死 CSS 已移除。

## 2026-10-24 · Customization page completed
- Added `templates/page.customization.json`.
- Structure:
  1. Hero / 图文横幅
  2. Customization Capabilities / 图文卡片 (6 items: Plating & Surface Finish, 3D Rendering, Stone Setting, Casting, Polishing, Private Label)
  3. Customize Every Detail Around Your Brand / 图文横幅
  4. What Can Be Customized / 图标文字 (Design & Shape, Metal, Stone & Pearl, Plating & Finish, Logo & Branding, Private Label)
  5. Six alternating 图文介绍 process sections: Communication, Design, 3D Rendering, Sampling, Production, Delivery
  6. Why Customize with Craftaurum / 图标文字
  7. What We Need From You / 图标文字 (Sketches, Reference Images, Dimensions, Preferred Materials, Target Quantity, Target Market, Timeline)
  8. Horizon native Contact Form
- Copy direction was adapted from Sunrise Customization page while avoiding unverified factory/turnaround/logistics claims.
- Images remain empty for Theme Editor upload.
- Strict template/schema validation PASS: all custom setting IDs, select values, range values and Horizon icon values are valid.

## 2026-10-24 · Contact Form 全站统一
- 根因确认：同一个 Horizon 原生 Contact Section 在不同页面模板中保存了不同实例参数，且 `craftaurum-contact.css` 原先只在 `jewelry-collections` / `contact` 两个模板加载。
- 旧 Jewelry 页面 Contact desktop `custom_width=50`，OEM / Customization 为 100%；Section padding / background 也不同。
- 部分旧实例未显式保存新增的 `follow_section_width`，因此 Liquid 中被视为 false，继续走旧的 size-style 宽度。
- 已统一以下模板：contact、jewelry-collections、jewelry-rings、jewelry-fashion、jewelry-earrings、jewelry-necklace、jewelry-bracelets、jewelry-artisanal、oem-jewellery、customization。
- 统一值：section_width=page-width、background=#fff、padding 56/84、follow_section_width=true、desktop/mobile width=100%、input_style=default。
- `layout/theme.liquid` 已让上述所有页面加载同一份 `craftaurum-contact.css`。
- `craftaurum-contact.css` 移除固定 max-width:900px，表单宽度现在真正跟随 Section 的页面宽度 / 全宽设置。
- 页面标题文案仍可各自不同，但 Contact 的视觉与宽度逻辑统一。

## 2026-10-24 · Customization process section corrected to reference layout
- Replaced the previous six alternating image-text process sections with one reference-style process cards section.
- Updated reusable `sections/content-cards.liquid` with a new isolated `process` card style and optional intro CTA. Existing standard card instances remain unchanged.
- Process style: centered intro, top CTA, 6 image cards, rounded light-gray image border, centered title/body, PC 3 columns x 2 rows, Mobile 1-column carousel.
- Customization process cards: Communication, Design, 3D Rendering, Sampling, Production, Delivery.
- Removed old `process_1`–`process_6` sections from `page.customization.json` to avoid duplicated workflow content.
- Validation PASS: new process settings are schema-valid, 6 cards present, PC 3 columns, mobile carousel, old alternating process instances removed.

## 2026-10-24 · Customization page full visual rebuild
- Rebuilt `page.customization.json` around the approved Sunrise-inspired structure:
  1. Horizon native Slideshow hero (full-width, dark editorial treatment)
  2. New reusable `图片卡片` section for capability showcase
  3. Three alternating `图文介绍` sections for Casting / Polishing / Private Label
  4. Existing 6-step Process cards
  5. Native Contact Form
- Added `sections/image-cards.liquid`:
  - image + title + body + optional link
  - no eyebrow / no button
  - per-card horizontal alignment: left / center / right
  - per-card vertical position: top / center / bottom
  - gradient overlay, hover overlay increase, hover image zoom
  - desktop equal-grid or showcase 3+2 layout
  - showcase 5-card mode uses first row 3 cards and second row 2 wider 16:9 cards
  - mobile 1–2 columns, grid or carousel
- Process card visual changed from thick gray outer border to subtle inner outline:
  - no heavy outer frame
  - inset 1px warm-gold outline
  - hover outline becomes accent gold and tightens
  - image softly scales on hover
- Removed previous Customization Options / What We Need From You presentation blocks from the page flow to reduce copy density.
- Strict schema validation PASS across slideshow nested blocks, image cards, alternating image-text blocks, and process cards.

## 2026-10-24 · Customization code-error correction
- Reworked the newly added `sections/image-cards.liquid` after identifying parser-risky conditional opening/closing tags.
- Image cards now use one fixed `<article>` structure with an optional absolute-position link layer; no conditional tag switching.
- Simplified Customization Hero Slideshow to mirror Horizon's own slideshow preset structure more closely:
  - one `_slide`
  - nested `text` / `text` / `button`
  - removed nonessential nested settings from the prior version.
- Current schema/template cross-check PASS for:
  - slideshow section settings
  - _slide nested settings
  - text/button child blocks
  - image-cards section settings and blocks
- This correction is specifically to remove code/parser issues before further visual tuning.


## 2026-10-27 · Craftaurum V2 视觉系统 / Pearl / Festival / Contact 最新状态

### 全局自定义 Section 规范
- Craftaurum 自定义 Section 已统一向 V2 规范收口：主标题默认 **35px**（Banner / Hero 除外），字号统一使用 Range，不再以 H1/H2/H3 预设作为主要控制方式。
- 共用入场动画体系已建立：`Fade Up` / `Fade In` / `Soft Zoom`，默认使用轻量动画；兼容 `prefers-reduced-motion`。
- Horizon 全局动态已开启：`page_transition_enabled=true`、`transition_to_main_product=true`。
- 自定义 Section 动画使用独立 reveal 脚本，支持首次刷新、滚动进入视口、Theme Editor section reload / select 时播放。
- 动画默认不再全部使用同一种，Pearl 页面已按区块穿插 Fade In / Fade Up / Soft Zoom。
- 图片展示规则更新：**除“图片画廊”外，其它展示型 Section 不再做 Hover 图片切换 / Hover 放大**；图文卡片已删除 Hover 图片字段与切换逻辑。

### 图文横幅 / 图文卡片 / 叠层图文 / 交互图文
- 图文横幅支持背景颜色开启 / 关闭；Banner 主标题保持大字号，不受 35px 全局 Section 标题标准限制。
- 图文卡片支持 `Style 1 / Style 2`：
  - Style 1：原居中标题 + 居中说明。
  - Style 2：左标题 / 右说明。
  - 可开启顶部 1px 细分隔线。
- 图文卡片新增独立“上下行间距” Range，默认 36px；左右间距与上下行距分开控制。
- 叠层图文桌面布局精简为：**重叠 / 不重叠**；重叠时提供“图片交叉程度” Range；每张图片保留独立 Rotation Range；删除 Hover 放大与 X/Y 工程化偏移设置。
- 交互图文：
  - 去掉小标题。
  - 标题区支持 `Style 1 / Style 2`。
  - Style 2 已修正为与下方文字列表 / 图片区使用同一套列比例与 gap，保证上下垂直对齐。
  - 图片支持“跟随文字高度”或“固定高度并与文字居中”。

### Pearl Jewelry Manufacturer 页面
- 独立模板：`templates/page.pearl-jewelry.json`。
- 内容顺序保持 Sunrise Pearl 页信息结构：Hero → Pearl Types → Business / Editorial Visual → Product Showcase → Manufacturing Process → Why Choose → Editorial Contact。
- Pearl Types 默认 Style 2：左标题 / 右说明，顶部细线，桌面 4 列。
- Product Showcase 使用 3 列大图 Grid，文字左对齐，不做 Hover 图片切换。
- Process 使用 Style 2 + 图片跟随文字高度。
- Why Choose 使用独立 `why-choose-craftaurum.liquid`，桌面默认 4 列细线结构，不再使用卡片盒子。
- Contact 使用独立 `editorial-contact.liquid`。

### Festival Jewelry Wholesale 页面
- 独立模板：`templates/page.festival-jewelry.json`。
- 页面按 Sunrise Festival Jewelry Wholesale 结构重做；曾因 Shopify GitHub 集成 schema 校验失败而无法保存，已修正：
  - `gap` 值必须符合 Range step。
  - `padding_bottom` 不得超过 Section schema 最大值。
- 当前最终结构：
  1. Festival Intro
  2. Christmas 图文介绍
  3. Christmas 图片画廊（同白色背景）
  4. Halloween 图文介绍
  5. Halloween 图片画廊（同 `#F8F7F4`）
  6. Thanksgiving 图文介绍
  7. Thanksgiving 图片画廊（同白色背景）
  8. Black Friday 图文介绍
  9. Black Friday 图片画廊（同 `#17191A`）
  10. Why Choose Craftaurum
  11. Seasonal Jewelry Customization / 内容指南
  12. Editorial Contact
- Festival 页已经移除全部图文卡片，改成“每个节日一个完整章节 + 同背景图片画廊”的连续结构。
- Customization Options 已从卡片改为内容指南，避免页面重复出现卡片结构。

### 内容指南
- `sections/content-guide.liquid` 已收口为**单一最终结构**，不再保留 Style 1 / Style 2。
- 顶部固定为纵向：小标题 → 主标题 → 简介。
- 下方使用连续 Editorial 行：编号 + 标题 + 正文；可开启 / 关闭 01 / 02 / 03 编号。
- 右侧保持大图 + 标题 + 说明；不做 Hover 图片放大。
- Festival 页面默认使用编号 01–06。

### Editorial Contact
- 新增 / 统一使用 `sections/editorial-contact.liquid`，视觉为左侧项目说明 + 右侧下划线表单。
- 后台只开放必要设置：背景色、文字色、左侧文字字号、上下边距、入场动画、Phone 是否必填。
- 表单字段固定：Name / Email / Company / Phone / Message。
- 当前必填规则：
  - Name：必填
  - Email：必填
  - Company：必填
  - Message：必填
  - Phone：默认非必填；仅在后台开启 `Phone 必填` 后才变为必填。
- 所有必填字段标签后显示一个很小的标准星号 `*`；非必填字段不显示。
- Contact 左侧标题原有 `max-width:13ch` 会导致长标题被压成多行，已改为使用完整左侧列宽，标题与说明的阅读宽度更自然。

### 当前待继续核查
- 仍需全局检查所有页面底部 Contact：部分旧模板可能仍保留 Horizon 原生 Contact Form，尚未全部替换为 `editorial-contact.liquid`。
- 需要按页面逐一核对并迁移：Jewelry category pages、OEM、Customization、Gold / Material pages、Collections 等；替换时保留各页面自己的标题 / 说明文案。
- “历史自定义 Section 全局审计”仍在继续：目标是进一步清理旧字号预设、旧 Hover 图像逻辑，并统一动画 / 35px 标题规则。

## 2026-10-27 · Personalized Jewelry 页面新增
- 新增 `templates/page.personalized-jewelry.json`，参照现有 Festival Jewelry V3 页面结构，但不复用节日引导或内容指南。
- 页面顺序：简洁 Hero（图文介绍）→ Personalization Possibilities 四分类图片卡片 → Initial / Birthstone / Zodiac / Number 四组「图文介绍 + 图片画廊」→ Why Choose Craftaurum → Editorial Contact。
- 四组图文和画廊均在同一章节内共享背景：白 / 米色 / 白 / 深黑；图片位置交替右 / 左 / 右 / 左，动画交替 Fade In / Fade Up / Soft Zoom。
- 新页面全部使用已有 Section：`image-text-feature`、`image-cards`、`image-gallery`、`why-choose-craftaurum`、`editorial-contact`；未新增 Liquid Section 或改动 Festival 模板。
- 文案为 Craftaurum 原创 B2B 英文内容；新页面图片字段保持空白供 Theme Editor 上传，不引用 Festival 现存的节日素材。
- 保留全局 V2/V3 标题 35px、主题颜色、共享入场动画及 Editorial Contact 的 Phone 默认非必填设置。
- 已验证输出 JSON 基本解析及 Section 顺序；尚未独立执行 Shopify CLI Theme Check、Theme Editor 加载保存及三端实测。需在 Shopify 后台新建 Page 并选择 `personalized-jewelry` 模板、上传各区块素材后验收。
- 对应 GitHub 提交：`be136793c5fa32df1a3dc4cbc8f6b3353d519b37`。

## 2026-10-27 · 自建 Section 集中测试页 + Personalized Jewelry 配图
- 新增 `templates/page.section-showcase.json`，集中放置当前已确认的 **17 类自建 Section**，每类保留独立、可在 Theme Editor 直接调整的实例，不改正式模板实例。
- 17 类依次为：品牌图片轮播、图文介绍、分类图片展示、图文横幅、横向 CTA、图文卡片、交互图文、图标文字、图片卡片、流程卡片、图片画廊、叠层图文、Why Choose、内容指南、Festival Intro、标题说明、Editorial Contact。
- 测试区块的文字、Block 顺序和图片采用现有首页、OEM、Customization、Pearl、Festival、Personalized 的当前真实模板实例作为初始样本；图片保持已有 Shopify `shopify://shop_images/...` 地址，未引入外部随机图。没有图片的文本功能 Section 按其设计不强行插图。
- Personalized Jewelry 的 Hero / 四分类概览 / 四大产品章节和各画廊已补进对应品类的 Shopify 图片路径：Initial（custom-inital-necklace、nameplate、custom-letters）、Birthstone（Custom-birthstone、November-birthstone-rings）、Zodiac（custom-zodiac、Aries）、Number（number-jewelry-1）。由于仓库模板中未核实更多数字和星座不同实拍，目前个别画廊重复使用同品类图片，后续应换成新素材，不拿不相关的图片充数。
- 与参考站的语义对应已进行文件名和现有页面用途匹配；尚未通过真实 Shopify 媒体库预览逐张核验图像视觉内容、图像是否仍有效。
- 页面创建方式：Online Store → Pages 建立测试页，Theme template 选择 `section-showcase`；如模板尚未出现在后台，先核查 GitHub theme sync。
- 每个 Section 在测试页修改后，只有确认定稿才回写公用源码或目标正式模板，避免误改原有页面素材。
- 已检查新模板 JSON 可解析、实例块顺序引用有效；未独立执行 Shopify CLI Theme Check / Theme Editor 保存及真实三端 QA。

## 2026-10-27 · Personalized Jewelry 对标纠偏（以最新为准）
- 用户指出页面内容与参考站不符，重新逐段核对原始页面，发现早期版本误删 Special/Enamel、误加 Number 独立章节、漏掉 Birthstone/Zodiac 差异化图，以及将三项服务泛化为 Why Choose。
- 已更新 `templates/page.personalized-jewelry.json`：Hero → Special Jewelry → Enamel Jewelry → Unlock 两段导入与四大元素 → Initial（3 图）→ Birthstone（4 图）→ Zodiac（3 图）→ 三项制造服务 → Editorial Contact。Number 仅保留四分类概览，符合对标站。
- 部分已有图片采用仓库其他模板所用的 `shopify://shop_images/*.jpg` 绑定；未能确认的 8 个匹配图片采用对标站精确图片 URL 临时回退，正式上线前改为经授权的 Shopify 图片。
- `sections/image-text-feature.liquid` 与 `sections/image-gallery.liquid` 分别增加可选的 external_image_url 回退，不会覆盖用户 image_picker；图片画廊另外增加可选独立图片标题与 alt。测试页对应图文介绍和图片画廊实例已经同步。
- 新增精确对应清单 `PERSONALIZED-JEWELRY-REFERENCE-MAP.md`，提供章节、文件名、图片来源与状态，后续不再按主观猜测更换类别。
- 新模板已完成类型与 schema/range/select/blocks 静态检查（零未知字段），但还未完成 Shopify Theme Check、Theme Editor 实际保存与三端在线视觉验收。

## 2026-10-27 · Section Showcase 实例命名对齐 Preset
- 用户要求测试页 Section 标题与 Shopify Add Section 面板的 Preset 名称完全一致，以便准确定位。
- 已读取当前 17 个自建 Section 的 `{% schema %}.presets[0].name`，逐一更新 `templates/page.section-showcase.json` 对应实例的 `name`，移除自定义数字前缀和括号说明。
- 例如 `brand-partners` → `品牌合作`、`image-text-feature` → `图文介绍`、`image-gallery` → `图片画廊`、`editorial-contact` → `联系表单 - Editorial`。
- 已重新读取 GitHub 文件，逐项验证全部 17 个实例名称与 Preset 完全一致；Section type/blocks/settings/排序均未改变，正式页面未修改。
- 尚未实测 Shopify Theme Editor 的左侧名称显示和同步状态。

## 2026-10-27 · Showcase 自建 Section 专业命名规范（最新）
- 用户澄清：**后台 Section 的 schema.name 用专业、通用的组件功能名称**；**Preset name 可以代表具体用途或预设内容**；Section Showcase 中的实例 name 应与 schema.name 一致，便于准确定位对应源码。
- 本次修正四个 Section 后台名称（均仅改 schema.name，不修改 Preset、设置 ID、Block、Liquid 渲染或媒体绑定）：
  - `brand-partners.liquid`：Section **图片轮播**，Preset 仍为 **品牌合作**。
  - `why-choose-craftaurum.liquid`：Section **优势展示**，Preset 仍为 **Why Choose Craftaurum**。
  - `festival-intro.liquid`：Section **专题导航介绍**，Preset 仍为 **Festival Intro**。
  - `editorial-contact.liquid`：Section **分栏联系表单**，Preset 仍为 **联系表单 - Editorial**。
- `templates/page.section-showcase.json` 同步使用通用后台名称，取消“强行与 Preset 相同”的旧规则。
- 已重新拉取当前 17 类 Section 的 Schema 与测试模板：**17/17 实例名 = 对应 schema.name**，而 Preset 可以与 Section 名称不同，这是有意设计。
- 早前“测试页实例名应与 presets.name 完全一致”的记录已被本条规范覆盖；以后新增 Section 按此标准统一。
- 本次只是命名，未改任何正式页面模板实例的已有业务命名；仍需 Shopify GitHub Sync / Theme Editor 现场确认显示是否刷新。

## 2026-10-27 · 自建 Section 字段语义审计 + 取消临时图片 URL（最新规则）
- 用户反馈：`图文介绍` 的“重点颜色”实际只控制副标题，应更名“副标题颜色”，同时核查其它自建 Section。
- 已逐一检查 Section Showcase 的 **17 种自建 Section**，按 Liquid/CSS 的真实用途修订后台标签（**仅改 label，保留已有 setting ID `accent_color`、颜色值和渲染规则**）：
  1. `image-text-feature`：重点颜色 → **副标题颜色**。
  2. `jewelry-collections-overview`：重点颜色 → **顶部小标题颜色**。
  3. `content-cards`：重点颜色 → **小标题颜色**。
  4. `interactive-feature`：重点颜色 → **编号、图标及交互高亮颜色**。
  5. `icon-with-text`：重点颜色 → **小标题及默认图标颜色**（单个 Block 独立图标色仍优先）。
  6. `image-cards`：重点颜色 → **卡片键盘焦点描边颜色**。
  7. `process-cards`：重点颜色 → **小标题及卡片内描边颜色**。
  8. `overlap-image-text`：重点颜色 → **小标题颜色**。
- `festival-intro` 的 `accent_color` 仅曾声明 CSS 变量、未有 CSS 使用，已移除无效后台控件和变量，并从 Festival / Showcase 模板删除遗留实例值。
- `content-guide` 的 `feature_heading` 原标签“标题”含糊，已按实际位置改为 **右侧图片标题**；setting ID 不变。
- 用户明确要求：**所有自建 Section 不要“临时参考图片 URL”字段。** 已从 `image-text-feature` / `image-gallery` 源码同时移除 `external_image_url` 后台字段及前端 HTML 图片回退分支；其余 15 种自建 Section 核查未发现该字段。
- 已从 `page.personalized-jewelry.json` 和 `page.section-showcase.json` 清除旧 `external_image_url` 设置值，其他已检查模板无残留。全部只保留 Shopify `image_picker` 上传/绑定方式。
- Personalized Jewelry 的 Initial 介绍主图改用本仓库已有的 `shopify://shop_images/custom-inital-necklace.jpg`；Special、Enamel 及 Birthstone/Zodiac 部分对标专属图片目前没有已确认的 Shopify 媒体绑定，保持空图片槽位，需上传真实匹配图片，不使用随机/不匹配图与外链。
- 已改写 `PERSONALIZED-JEWELRY-REFERENCE-MAP.md`，逐图标明当前 Shopify 绑定和待上传文件名，不再建议在 Section 输入参考图片 URL。
- 代码检查：17/17 自建 Section Schema 可解析、均无 `external_image_url`；三个相关页面 JSON 可解析、无临时 URL 字段；未发现仍使用笼统“重点颜色”的 `accent_color` 标签。
- **仍需** Shopify GitHub Sync、Theme Check CLI、Theme Editor 字段显示/保存及 PC/Tablet/Mobile 实际浏览器检查。此前文档中的“临时外链图片回退”方案已被本条正式废止。

## 2026-10-27 · 自建 Section PC/Mobile 布局分组 + 入场动画位置统一
- 用户提供 Shopify 设置截图，要求电脑端和移动端布局参数以各自独立的 Header 分区，顺序优先「每行显示数量」→「展示方式」，后台中文标签统一；又补充要求 **所有自建 Section 的「入场动画」统一放在设置列表底部，位于「上边距」「下边距」之前**。
- 已直接修改 Showcase 当前包含的 **17 个自建 `sections/*.liquid` 的 Schema**，没有修改模板实例 `settings` 或任何 Liquid、CSS、JS 前端布局逻辑。
- 其中 **9 个**有双端专属布局参数，已统一为「电脑端布局」 / 「移动端布局」：
  - `image-collection-grid.liquid`（分类图片展示）
  - `content-cards.liquid`（图文卡片）
  - `interactive-feature.liquid`（交互图文，仅图标文字模式使用列数）
  - `icon-with-text.liquid`（图标文字）
  - `image-cards.liquid`（图片卡片，电脑端可选常规/展示型排列；常规模式才由列数控制）
  - `process-cards.liquid`（流程卡片）
  - `image-gallery.liquid`（图片画廊）
  - `overlap-image-text.liquid`（叠层图文，双端独立图片展示模式）
  - `why-choose-craftaurum.liquid`（优势展示）
- `brand-partners.liquid`（图片轮播）原本只提供移动端列数和网格/轮播设置，因此**只新增「移动端布局」分组**，不伪造电脑端设置。
- 另外 7 个没有双端专属布局的 Section，不新增无效 PC/Mobile 设置，但同样调整入场动画的后台顺序。
- 后台列数字段统一显示「每行显示数量」；已有显示模式统一显示「展示方式」，并保留各组件自己的选项值与真实行为；没有对应展示方式的组件不新增该设置。
- 对修改前后逐项比对，原有 Setting ID、Schema type、select 选项、range min/max/step、默认值与 `visible_if` 条件不变；为交互图文、图片卡片的条件生效列数增加简短提示。
- 提交后重新拉取仓库 17 个 Schema 检查：**17/17 通过 JSON 解析、后台动画尾部顺序以及有设备参数的分组顺序检查**。原有模板 JSON 未修改。
- **尚未独立完成** Shopify CLI Theme Check、Shopify GitHub 同步核验、Theme Editor 实际显示/保存与 PC/Tablet/Mobile 浏览器验收。

## 2026-10-27 · 全局按钮 Hover 配色说明精简
- 用户要求删除 Theme Settings → Buttons 里「不设置则继承 Horizon 智能 Hover 配色」这句多余的 `info`。
- 已在 `config/settings_schema.json` 的一级/二级按钮 Hover 背景、文字、边框这 6 项设置中删除对应 `info` 字段，保留所有 Setting ID、默认颜色和 Hover 实际逻辑。
- 已读回 GitHub 文件，核实六项均无对应说明且 JSON 解析通过。Shopify Theme Editor 实际显示待同步确认。

## 2026-10-27 · 自建 Section 字号全局分组及移动端字号独立控制
- 用户决定将自建 Section 的字号设置**统一集中在后台设置列表底部**，采用两个分组「电脑端字号」与「移动端字号」，后面依次为「入场动画 → 上边距 → 下边距」；相比在每个文案设置旁散落字号，这种结构更适合在 Section Showcase 中逐项验收。
- 已修改 Section Showcase 当前涉及的 **17 个自建 Section Liquid 源文件**。将所有已有的 61 个桌面字号 Range 项移动至「电脑端字号」，并新增 **61 个对应移动端 Range**，ID 以 `mobile_` + 原 `id` 组成，原 desktop ID、默认值、range、CSS 绑定保留不变。新增移动端 CSS 自定义变量和 `max-width:749px` 下的实际文字字号覆盖，确保不是只新增后台空设置。
- 手机端新字号默认通常与原桌面默认字号保持一致，避免无故改变既有基础视觉；图文横幅原 58px 大标题依据旧手机端 48px 上限将移动端默认设为 48px。用户可以在各 Section 中独立修改手机字号。
- 发现 `icon-with-text.liquid` 的原有 `heading_size` 没有给标题前端 CSS 使用：现已给 `.ca-icon-text__heading` 接上原字号变量和移动端变量。
- `image-collection-grid.liquid`（分类图片展示）的卡片 Block 已删除「产品系列」collection picker，并同步修改 `snippets/craftaurum-collection-card.liquid`，取消根据 Collection 自动取图、取标题及链接的逻辑，只保留卡片自己的**标题 / 图片 / 手动链接**。已清理 `templates/index.json`、`templates/page.oem-jewellery.json` 和 `templates/page.section-showcase.json` 中共 17 个空的旧 `collection` Block 配置值。无需修改已有卡片图片或标题。
- 已逐个重新读取并检查：17/17 自建 Section Schema 可解析、**61/61** 移动字号设置 ID 对应原桌面字号、具有绑定的移动端 CSS 变量、两组字号位于后台底部且在动画/Padding 之前；相关模板 JSON 可解析。
- 设置分组只针对已有 Typography 字号参数，不额外新增移动端字体家族或字重设置。桌面端现有数字/颜色/链接/区块顺序不变。
- 此次尚未运行 Shopify CLI Theme Check；Shopify GitHub Sync、Theme Editor 实际保存与 Desktop/Mobile 前台预览仍需检查。

## 2026-10-27 · 横向 CTA 按钮颜色统一继承全局
- 用户发现“横向 CTA”按钮颜色和全局不一致，要求移除该 Section 独立按钮颜色体系，与其他自建 Section 一样继承 Horizon 的一级/二级按钮及对应 Hover 配色。
- 根因：`sections/horizontal-cta.liquid` 虽然使用共享 `craftaurum-cta` snippet 和全局 `.button/.button-secondary/.button-unstyled` 样式，却在自身 Section CSS 中覆盖 `--button-color`、`--button-background-color`、`--button-border-color` 的正常态、Hover 态，还为文字链接写了局部颜色，屏蔽了全局配色。
- 已从 `sections/horizontal-cta.liquid` 移除六个按钮颜色设置 ID：`button_background_color`、`button_text_color`、`button_border_color`、`button_hover_background_color`、`button_hover_text_color`、`button_hover_border_color`；同时移除六个对应 inline CSS 变量及局部 CSS override。保留 Section `background_color` 与 `text_color`、按钮类型 `button_style`、文案和链接；共享 `craftaurum-cta` 不改。
- 已同步清理 `templates/page.jewelry-rings.json` 与 `templates/page.section-showcase.json` 中 12 个过时的局部按钮颜色配置值，不改页面其余内容。
- 额外读取 Showcase 所列 17 类自建 Section：**17/17 均不再含有局部按钮 `--button-*` 配色覆盖，也没有 Section 专属的按钮色配置字段**。全局按钮实际来源可见 `assets/base.css` 的一级/二级按钮颜色与 Hover 样式。
- 当前已验证 JSON Schema 可解析、Section 实例旧字段已清理、GitHub 提交成功；尚未运行 Shopify CLI Theme Check 或 Shopify 真实前台的不同背景/正常/Hover/文字链接视觉验收。
