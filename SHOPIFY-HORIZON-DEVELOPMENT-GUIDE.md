# Shopify Horizon 通用二次开发规范

> 文档版本：2026-10-10 · 适用：Shopify Horizon 系列主题及其 OS 2.0 二次开发。  
> 本文是跨站点、跨品类、跨版本的通用规范，不包含任何店铺、品牌、商品、联系方式、仓库地址、经营规则或项目进度。  
> **总原则：读取当前代码 → 识别实际主题版本 → 复用原生架构 → 最小改动 → 三端 QA → 验证同步 → 记录变更。**

## 00｜全局第一步：每次新项目/模板修改必须核对（强制确认）
- **不论用户是否主动提起，每当准备进行 Horizon 模板开发或修改时，必须主动询问是否先执行或检查“全局第一步”。** 这条规则对模板仓库与基于模板创建的新站均适用。
- “全局第一步”优先核对主题版本与全局基础能力：PC/Mobile 全局字号（段落、H1–H6）、字体继承、颜色变量、按钮与文字链接、产品卡统一入口及徽章系统、页面宽度与响应式断点。
- 已实施过的不重复修改；逐项检查已有功能，缺什么补什么，避免覆盖用户当前 Theme Editor 数据或把另一项目的值硬编码进去。
- 全局能力缺失时，优先在 Theme Settings / 原生 helper 中统一解决，而不是各 Section 各自补丁。
- 具体落地操作需要根据当前仓库版本与用户选定的 UI 确定，**不是不经确认就统一修改所有模板**。
- 在通用模板中，新增控制项默认选“跟随主题/保持原样”，避免未配置时改动现有视觉。
- 记录状态时明确区分“已在某仓库实施”“待项目确认”“尚未实施”，不能因为某个模板已经完成，就认定所有版本均已完成。

## 00A｜全局第一版基础修改清单（每个 Horizon 新项目开始前必须确认）
> 此清单是所有 Horizon 站点的**默认第一阶段检查/改造项**，并非宣称所有仓库已经部署。收到任何新的 Horizon 模板开发任务，即使用户没有主动提及，也须先提醒并确认该阶段是否已完成。不同版本先读取现有代码再移植；已实现的不要重复修改。

| 顺序 | 全局项 | 预期行为和实现边界 |
|---|---|---|
| 1 | 全局 Typography | PC/Mobile 段落与 H1–H6 独立控制；默认继承 Horizon，不强制改变现有主题字号 |
| 2 | 购物车覆盖式抽屉 | 参照已验证过的 overlay-only 机制：购物车从右侧盖住页面、遮罩背景，**桌面不压缩 page-wrapper**；保持原生 cart/discount/quantity/checkout、Escape、外点关闭与滚动锁定 |
| 3 | Button Hover | 一级/二级按钮 Hover 背景、文字、边框由主题全局设置集中管理；自定义按钮支持独立默认态与 Hover 态及智能回退；文字链接的 Hover 不污染实体按钮；兼顾 focus-visible、touch 和 disabled |
| 4 | 手机端多级菜单 | 参照已开发过的手机端 drill-down 导航：点击有子级的一级菜单**向内进入下一页**，而不是向下展开；二级、三级按层级推进；返回上一级保持原位置且不闪动下滑动画 |
| 5 | 手机端一级菜单字号 | 以当前主题的全局移动端段落/标题字号为优先来源（具体映射按对标站确定）；不得固定写死 px，不能把桌面导航字号误带到手机端；保留触控热区和可读性 |

### 第一版复用依据及迁移注意
- 购物车参考：Kiki 风格的 Horizon 原生 `theme-drawer` 上 `overlay-only` / `no-persist`，以及非挤压型协调逻辑。目标模块是购物车，不是所有导航抽屉；不能盲目全局覆盖所有 `theme-drawer`。
- Button Hover 参考：已完成的全局 primary/secondary hover background、text、border，搭配 `resolve-custom-hover` 智能回退与 `button-custom-styles`；实现前先确认该 Horizon 版本实际按钮变量、Theme Settings、原生按钮入口，避免只新增后台设置却无前端效果。
- 手机端菜单参考：已完成的 mobile drill-down 独立 snippet 与 `header-drawer` / `header-drawer.js` 原生 open/submenu/back/close 事件；仅移动端启用，PC 下拉或 Mega Menu 保持当前主题结构。
- 一级菜单文字在移动端优先继承全局合适 Typography preset（已参考实现使用 `--font-h5--size`），如果目标项目要求跟随段落手机字号，应改为相应主题变量；不要将参考实现的字号写死为所有项目的统一视觉值。
- 分隔线取主题颜色体系中的淡色/低透明度，不写死店铺色；箭头简洁，返回过程中禁用与返回动画冲突的 stagger animation。
- 对标站只决定外观：颜色、间距、线条、图标、排版细节；第一版交互原则及全局复用机制保持一致。
- 迁移前读取目标仓库实际实现并检查版本差异，不将其它项目特有类名前缀、资源文件、菜单或 UI 文案原样复制为通用模板。
- 提交后逐项记录：GitHub 代码状态 / Shopify Sync / Theme Editor 保存 / Desktop、Tablet、Mobile 实际验证。**本文仅规定默认检查项，不等于执行完成。**

## 01｜开始之前：确定事实来源
1. 以目标仓库**目标分支最新提交**为源代码事实来源，不能从聊天记录或其他项目拷贝旧版文件直接覆盖。
2. 依次检查：本规范、该项目独立进度文档（如有）、目标 Section/Block/Snippet、对应 templates/*.json、关联的 settings_schema.json 与 settings_data.json。
3. 明确当前主题版本、相关文件最后修改状态、Section 实例是否已经挂载真实页面；不得从仓库名称推断主题版本。
4. 修改前核查 Shopify Theme Editor 当前绑定的图片、视频、产品、集合、文案、Block 顺序及配置，避免丢失数据。
5. 不明确的功能或变量必须从当前版本实际文件确认；不得猜测字段名、helper 名称、模板结构。

## 02｜Horizon 版本兼容
- 每个仓库独立核对 layout、sections、blocks、snippets、config 与 locales 的实现。
- 查明 Theme Blocks / local blocks 调用方式、Section wrapper、breakpoints、color system、typography preset、button、spacing、layout、product card 入口。
- Horizon 3.x、4.x 及其他版本可能使用不同颜色变量、Schema 和 helper。**跨版本只迁移设计思路，不直接生搬代码**。
- 新增 Setting 前确认是否已有原生可复用能力。修改全局 API 时必须同时搜索引用处。
- 建议先小范围验证单个 Section，再复用到其他页面或项目。

## 03｜开发优先级与范围
1. 主题原生 Section / Theme Block / snippet / helper；
2. Liquid + HTML；
3. CSS；
4. 少量原生 JavaScript；
5. 只有明确必要时使用外部脚本或 App。
- 能用 CSS 做的布局和状态，不新增 JS；简单 Tab、Accordion、Carousel 优先轻量实现。
- 不为局部样式重写 Header、Footer、Product Card、Typography、Button 或整套 Color System。
- **修复和优化必须优先直接修改问题的源文件与原有实现。** 第一次处理就定位产生问题的 Liquid / HTML / CSS / JS / Schema、原生组件或配置，并在正确的源头修正；不要把“最后再追加一段 CSS 覆盖”当成默认修复方法。

### 原代码优先、禁止机械叠加补丁（强制执行）
- **先查根因，再修改原代码。** 对已有 Header、Footer、Section、Block、商品卡、抽屉、菜单等进行修复时，先查当前模板版本、原始文件、调用链、关联脚本和配置，找到实际生效的样式与逻辑；优先在其原有选择器、Liquid 模板、原生 JS 或 Schema 设置处修改。
- **不允许默认靠末尾追加覆盖 CSS“压住”旧实现。** 不反复加相同选择器、叠加更高优先级、`!important`、无意义的媒体查询或额外 JS 强制覆写。正常 CSS 编写是必要的，但应放在应有模块的源码位置，不得形成多套相互冲突的规则。
- **需要结构变化就修改结构。** 布局/DOM 错误改对应标记与网格结构；交互状态错误改相应事件或状态逻辑；主题后台设置错误改 Schema 与真实变量绑定。不能把不同类型的问题全部用 CSS 补丁解决。
- **移除旧逻辑，避免永久累积。** 重构同一区域时合并重复声明并清理失效样式、JS 监听器、历史补丁与无用配置；不要只是追加新代码而保留旧问题。
- **例外必须说明。** 仅当原始源码不可改（如外部 App、受控第三方模块），或直接修改会破坏上游更新时，可采用最小、作用域隔离的兼容覆盖，并记录为什么不能改源、影响范围及回收条件；不能把例外变成常规做法。
- **提交前核查差异。** 检查是否修改了正确源文件、是否残留重复 CSS / `!important` / 死代码、是否影响其它 Section 或移动端、是否保留 Theme Editor 已配置数据。对现有功能的小范围修复应提交最小必要 diff，不得顺手整体覆盖旧配置。

## 04｜Section 与 Block 的职责
- 完整独立的内容区域优先 Section；可重排、可复用的小组件优先 Theme Block。
- 支持 Theme Blocks 的版本优先遵守其原生 content_for / render 架构，不混用互相冲突的 block 机制。
- Section 文件必须包含完整可运行的 Liquid、HTML、CSS、必要 JS 与 {% raw %}{% schema %}{% endraw %}。
- 首页自定义 Section 文件建议 `home-功能名.liquid`；其他页面使用专业、可识别的功能名，避免使用特定站点或“参考站”前缀。
- 后台 Section、Block、Setting 名称使用清晰的中文业务术语；代码 class、变量、注释统一英文。
- Block 应允许合理的添加、删除、排序；不应把可修改文案写死在 Liquid 或 CSS 中。

## 05｜后台编辑与设置精简
- 仅开放用户明确需要的设置，通常优先为内容、媒体上传、链接、商品/变体绑定及必要的功能开关。视觉细节优先由代码按对标站实现，不把后台做成操作面板。
- 优先继承主题全局 Typography、Button、Colors、Page Width、Spacing，不重复建立一套无关的控制系统。
- PC/Mobile 优先通过响应式 CSS 自动适配。只有用户明确提出某项需独立调节，才为该项增加设备独立设置；禁止机械重复所有控件。
- 图片使用 Shopify image_picker；产品使用 product picker；集合使用 collection picker；视频优先 video 类型。
- 链接/资源未配置时，隐藏相应元素，不显示错误链接、假图、测试文案和无意义占位。
- Schema 的 range、step、default、select options、unique id、presets、block types 必须合法；控制项应有合理默认值。

## 06｜排版与字体
- 一律继承当前主题字体，不引入外部字体，不写死 font-family。
- Heading 与 Body 必须优先使用主题全局 H1–H6/段落预设及其字体、字号与字重；普通 Section 不新增单独字号 Range/Select 面板。
- 手机端若全局有独立字号变量，必须正确继承；全局缺少所需设置时，应在主题层一次性规范扩展，避免每个模块自行填补。
- 避免强制固定高度导致文字裁切；长标题、多语言与文本换行必须正常。
- 文本颜色优先级：用户明确设定 > Section/Theme 默认 > 原生 contrast 机制。

### 后台精简与字体继承：强制规则（2026-10-10）
- **禁止把 Section 后台做成 CSS 操作面板。** 只开放用户明确提出、或业务使用时必不可少的内容及功能设置。不是所有可改的 CSS 都要有对应的 Shopify Setting。
- **字体只跟随全局体系。** 标题、商品/角色名称、介绍等根据需要选择全局 H1–H6 或段落预设；字体家族、字重、字号、行高、字距与大小写风格都从主题全局继承。**不在每个 Section 中额外提供 PC/Mobile 字号 Range、字体大小选项、字重等独立面板。**
- **微观排版间距不开放后台。** 例如标题到卡片、图片到文字、角色名称到介绍、行间的细节空隙，默认应由开发者依据对标站通过 CSS 合理实现。**不得主动新增“标题与内容距离”“名称与描述距离”等多组 PC/Mobile 滑块**；仅在用户明确要求可调整某项间距时再开放那一项。
- **优先给真正要填的内容，而不是给一堆装饰选项。** 例如角色卡片以图片、文案、商品/变体绑定为主；只有用户要求，才增加额外的外观、边距、缩放、动画等控制。
- **不同端默认用响应式 CSS 适配。** PC/Mobile 独立设置不是强制为每个字段重复创建两份；只有用户明确提出某项需要独立控制，或者功能确实必须独立时才增加。
- **原生组件能力优先。** 可直接复用主题颜色、按钮、字体、内容容器的情况，不增加同用途的 Section 专属控件。
- **提交前执行“删减检查”。** 逐个问：用户是否需要在日常运营中调整？是否在需求或 MD 中明确要求？是否可直接继承主题或用 CSS 固定？若没有充分理由，则删除此后台控件。Schema 不出现废弃、不生效及纯调试设置。
- **用户提出“按照 MD”时按此最小面板标准执行**，不能擅自把可编辑性理解为“设置越多越好”。

## 07｜按钮与链接
- CTA 使用主题原生按钮组件及样式设置，可根据需求选择主按钮、次按钮或文字链接。
- “View all”、Shop now 等使用真实 URL；未填 URL 时不得跳到不相关页面。
- 功能性按钮（轮播箭头、Tab、分页、筛选）与 CTA 区分，避免不必要的主题主按钮样式。
- 文字链接颜色独立设置仅影响文字链接，不得意外修改其它按钮。
- 确保 hover、focus-visible、disabled、active、touch 状态均可用。

## 08｜图片、视频和响应式媒体
- 图片走 Shopify image_url / image_tag 响应式管线；合理 sizes/srcset，非首屏 lazy load。
- 用户若设置 Desktop 与 Mobile 两份图片，Mobile 未设时自动回退 Desktop。
- 图片比例应由媒体容器控制，结合 aspect-ratio、overflow、object-fit；不让原图反向撑破卡片。
- 未绑定元字段图片时，不生成无意的占位图；允许保留已设置的背景色。
- 视频优先 Shopify Hosted Video；自动播放一般使用 muted、playsinline、loop；避免浏览器自动播放限制影响体验。
- 视频 Banner 应支持实际需要的文本对齐与九宫格位置（左上/中/下、居上/中/下、右上/中/下），颜色配置不以 CSS 写死。
- 不为单独视频区增加多余视频库；后台编辑与图片/视频资源替换后能正常更新。

## 09｜产品、集合、商品卡
- 使用 Shopify product / collection / variant 真实对象，禁止将模拟商品数据作为生产数据源。
- 默认情况下，Product Card、价格、划线价、Badge、Quick Add、图片比例和商品链接优先复用同一原生入口。
- Featured Collection、搜索、集合页和相关推荐应尽可能保持全站商品卡设计一致。
- 必须处理无库存、无图、多变体、货币格式、折扣价、Sale Badge、快速加购及变体选择。
- **明确提出“自建产品卡 / 自定义产品卡 / 替代产品卡”时，含义为全站统一替换原生产品卡，而不是仅在某个 Section 内另造一份。** 设计必须根据本次对标站的实际 UI 调整，而非固定照抄旧项目。
- 全局自定义产品卡应在主题统一调用入口实现，并检查首页商品区、Featured Collection、集合列表、搜索、推荐商品及其它真实共用入口；不得遗漏某些位置造成新旧两套卡混用。
- 必须同步提供并统一控制：图片比例/第二张 Hover 图、标题/价格/原价、Badge、Quick Add / 选择规格、位置与对齐、PC/Mobile 布局；支持开关和真实商品数据。
- **徽章系统必须一起纳入全局自定义产品卡：** Sale（文字或折扣百分比）、Sold out、New 等是否显示、文字、位置、颜色、背景、圆角与布局，按具体站点需求开放。不同徽章优先级、多个徽章并存及无折扣/无库存边界情况须验证。
- 全局 UI 设置可按需要集中于 Theme Settings → 自定义产品卡，而不在各个 Section 重复造同名设置。单个 Section 仅允许必要的布局级覆盖。
- 保留 Shopify 商品对象、价格货币、变体和购物车事件行为；谨慎兼容 Theme Block 编辑、App Block、评价插件和原主题交互。
- 进行全局替换前应告知影响页面及现有产品卡数据，并确认对标站要求；不擅自只在局部上线却宣称已经全站替换。
- 系列页筛选、排序、分页优先使用 Shopify 原生机制；不要仅靠前端隐藏商品伪造分页。

## 10｜PC / Tablet / Mobile
- 任何新模块均检查 Desktop、Tablet、Mobile，以及手机横屏与超长文本。
- 不得出现横向溢出、图片裁切异常、文案与按钮覆盖、字号过小或点击热区不足。
- Mobile 可单独设置列数、图像、间距与排版；轮播只在哪端启用，就在哪端显示对应箭头及可用状态。
- 搜索框、菜单与抽屉布局遵守当前主题移动端交互体系；返回上一级导航不得闪现错误滚动动画。
- 需要蒙层的抽屉或弹窗，必须支持点击关闭、Escape、焦点与滚动锁定等合理行为。

## 11｜Carousel、Tab、Accordion
- 简单横滑优先使用 flex + overflow-x: auto + scroll-snap，箭头按当前容器 scrollBy。
- 无足够内容滚动时隐藏或禁用箭头；首尾状态、Resize、移动端 Touch、键盘操作均要检查。
- Tab 切换不应意外使其它 Section 重新渲染，当前选中态清晰可辨。
- Accordion 必须使用可访问的 button、aria-expanded 与正确的展开逻辑；无关功能不加载大型第三方库。
- 每个 Section 实例独立初始化，避免同页面多实例相互操作。

## 12｜CSS 与 JS 隔离
- 所有自定义样式必须有 Section 级作用域（例如 `#shopify-section-{{ section.id }}`）或独立的组件命名空间。
- 禁止在普通 Section 中全局覆盖裸 `h2`、`.button`、`img`、`.card`。
- 复制或改造 Section 时重新规划 namespace，避免两个版本共享 class 导致互相污染。
- JS 只能操作当前组件根节点；提供初始化保护，避免重复事件监听与重复创建轮播。
- Shopify Theme Editor 动态 reload、block reorder、section load 后行为应正常。
- 动画优先 transform/opacity，支持 prefers-reduced-motion；避免高频 scroll 监听造成卡顿。
- {% raw %}{% stylesheet %}{% endraw %} 内不允许插入 Liquid 输出；需要动态 CSS 时使用根元素 inline CSS variables 或当前版本支持的安全方式。

## 13｜主题编辑器数据保护
- Schema default **不等于** 已挂载 Section 的真实设置值。
- 修改已有区域时，必须核对 `templates/*.json` 和 `sections/*-group.json` 的真实实例数据。
- 不得用旧版 JSON 覆盖用户在 Theme Editor 中保存的更新。
- 修改已有 setting id、block type 或结构时，必须考虑数据迁移以及原配置兼容。
- 新 Section 建议先创建文件、通过 Schema QA、确认 Shopify 同步且可在 Add Section 找到，再决定是否挂到真实模板。
- 不应为了看到一个新模块而盲目重写整个首页 JSON。

## 14｜高风险区域
- Header / Footer：先检查 section、group JSON、menu、search、localization、social、JS；只做局部扩展。
- Cart / Drawer：确认原生 Ajax Cart、事件与数据同步，不要私自替换整套购物车；校验 overlay、total、数量、折扣与更新行为。
- Product Form：需要遵守真实 variant selection、selling plan、库存和 add-to-cart 流程。
- Global settings：全局改动前查找所有引用，明确影响范围，避免修一个页面破坏其它页面。
- App 嵌入与第三方评价星级：先核对主题已有 app blocks / hooks，再判断是否需要自定义适配。

## 15｜性能、可访问性及 SEO
- 非首屏图片/视频延迟加载，首屏重要视觉避免不必要的懒加载。
- 避免引入冗余 JavaScript、重复脚本、过大尺寸图片和无限 DOM clone。
- Image alt、语义化标题层级、表单 label、按钮 aria-label、focus-visible 与键盘操作应完整。
- 不隐藏重要可访问内容来换取视觉效果；导航与移动端菜单必须对键盘和触屏可用。
- 不制造重复 H1、无效 href、破损内部链接或不必要的 CLS。

## 16｜Liquid / Schema 提交检查
- Liquid 标签、render 参数、JSON Schema 语法正确，尤其不要将 {% raw %}{% liquid %}{% endraw %} 中单个 render tag 的参数拆成无效语法。
- JSON schema：范围合法、默认值符合 step、默认 select 值存在、各 ID 不重复、preset 对应真实设置。
- Section/Block 名称及数量符合 Shopify 限制，动态数据源与对象类型匹配。
- JS 不出现硬编码的其它店铺 URL、测试商品、固定 section ID 或其它项目名称。
- 校验关联 JSON 时不要改动无关的 settings_data、section order 或用户数据。
- 可用时运行 Shopify CLI theme check；静态通过不代表已验证线上渲染。

## 17｜GitHub 提交与同步
1. 读取目标仓库目标分支最新文件。
2. 只修改本次需求涉及的文件；没有明确需求不触碰其它目录。
3. 提交前检查 diff，避免无关格式化、文件整体重排和意外删除。
4. 用清晰 commit message 提交；读回最新文件确认内容。
5. 分开标记：代码完成 / GitHub 已提交 / Shopify Sync 已确认 / Theme Editor 已验证 / Frontend 已验证。
6. 不能因为 GitHub 提交成功就宣称 Shopify 已自动同步，必须单独检查。
7. 不创建无意义临时分支、不保留调试文件、不随意覆盖用户主分支。

## 18｜验证清单
- [ ] 版本识别准确，已读取最新代码、相关 Template 与 Settings
- [ ] 无多余第三方依赖，无其它站点信息或硬编码品牌
- [ ] Liquid、Schema、Preset、Block 配置合法
- [ ] 主题原生 Typography / Colors / Buttons / Helpers 使用正确
- [ ] Desktop / Tablet / Mobile 与手机横屏无明显异常
- [ ] Page Width、Section Background、内外间距正确
- [ ] 图片比例、alt、responsive sizes、Mobile fallback 正常
- [ ] 产品/集合链接、价格、变体与购物车行为正确
- [ ] Carousel 首尾、箭头、Touch 与 Tab 状态正确
- [ ] Drawer/Modal 蒙层、关闭、焦点行为正常
- [ ] Theme Editor 动态 reload 与多实例使用正常
- [ ] 没有 JS 重复初始化、CSS 跨 Section 污染
- [ ] 已在真实源文件处理根因，无堆叠覆盖补丁、无无意义的 !important / 重复选择器 / 历史残留代码
- [ ] 用户原有图片、文案、元字段绑定、Block 顺序未丢失
- [ ] GitHub diff 已检查；Shopify Sync 与前台已分别验证

## 19｜通用文档与项目进度必须分离
- 根目录本文件：`SHOPIFY-HORIZON-DEVELOPMENT-GUIDE.md`，只保存**通用规范**。
- 每个真实店铺可以另设 `PROJECT-PROGRESS.md`，保存该店铺独有版本、已完成工作、问题、Commit、验证状态和待办。
- 通用模板仓库不得写入任一真实店铺的品牌名、店铺链接、商品信息、订单政策、帐号、项目特有的 Section 进度。
- 多项目共用本规范时，新增普适经验应更新通用规范；个别店铺问题只写入该店铺进度文件。
- 错误记录模板：现象 / 根因 / 修复 / 防重复措施 / 相关文件 / Commit / 验证结果。

## 20｜每次接到需求的固定处理顺序
1. 读当前通用规范与该项目进度。
2. 找最新代码、主题版本、当前 Theme Editor 配置。
3. 找到问题或功能的原生源文件与调用关系，优先修改原有实现而不是叠加 CSS 补丁；判断 Section / Theme Block / Snippet 的合适职责。
4. 明确 PC/Mobile、动态绑定和后台真正需要开放的项目。
5. 设计作用域隔离的最小实现，必要时提供完整 .liquid 文件。
6. 检查 Schema、数据安全、性能、三端 UI、交互。
7. 最小差异提交，检查 GitHub，核实 Shopify 同步状态。
8. 更新该项目独立进度，不把项目数据写回本通用文件。

## 21｜全局第一步状态记录方式
每个项目或模板仓库独立记录全局第一步检查结果，不把该仓库状态当成其它仓库事实。建议在该仓库的独立进度文档中记录：
- 全局第一步：已核对 / 待确认 / 已实施（具体功能）。
- 手机端 Typography：段落、H1–H6 是否已有独立全局控制和原生 fallback。
- 产品卡：仍使用原生卡 / 用户要求全站自建 / 已完成全站替换（徽章一并检查）。
- 本次影响文件、Commit、GitHub 提交、Shopify Sync、Theme Editor 和三端前台验证状态。

**历史起点：2026-10-10 确立上述“每次先确认”规则。实际已实施仓库与文件，应以各仓库自己的提交记录为准。**

**结论：原生优先、版本优先、数据保护优先；结构优于补丁；提交、同步和前台验证分别确认。**
