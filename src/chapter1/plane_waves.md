# 1.4. 使用平面波描述直接反应；动量和角动量的作用 (A description of direct reactions using plane waves; the role of momentum and angular momentum)

在1950年代初期，随着关于氘核剥裂的第一批论文发表，直接反应的概念以多种不同方式被阐述。尽管表述各异，但其物理内涵始终与玻恩近似（Born approximation, BA）所承载的本质相同。玻恩近似的优点在于其易于讨论，因此我们在此通过它来强调动量和角动量守恒在决定直接反应特征中的重要作用。

平面波理论（plane-wave theories）虽然存在严重缺陷（稍后将被摒弃），但在揭示这些守恒定律的作用方面表现得非常直观。有关这些效应的半经典讨论，可参考 Butler、Austern 和 Pearson（1968）的研究。

为了理解直接反应的基本物理图像，我们考虑一种简化的氘核剥裂反应模型，这是巴特勒理论（Butler, 1950, 1951）的进一步简化版本（Spiers and Satchler, 1952）。具体来说，我们研究 $(d,p)$ 反应。

一个未受扰动的氘核平面波形式可以写为：
$$
\psi = \exp\left[i\mathbf{k}_d \cdot \frac{\mathbf{r}_n + \mathbf{r}_p}{2}\right] \phi_d(\mathbf{r}_n - \mathbf{r}_p),
$$
其中：
- $\mathbf{r}_n$ 和 $\mathbf{r}_p$ 分别是中子和质子的位置矢量；
- $\phi_d$ 是氘核的内禀波函数（为简单起见，忽略自旋）。

通过对 $\phi_d$ 进行傅里叶变换并重新整理，波函数可以改写为：
$$
\psi = \int \mathrm{d}\mathbf{k}_p e^{i\mathbf{k}_p \cdot \mathbf{r}_p} e^{i\mathbf{Q} \cdot \mathbf{r}_n} G(K),
$$
其中 $G(K)$ 是傅里叶变换：
$$
G(K) = \int e^{i\mathbf{K} \cdot \mathbf{s}} \phi_d(s) \mathrm{d}s,
$$
且定义了以下量：
$$
\mathbf{K} = \mathbf{k}_p - \frac{1}{2}\mathbf{k}_d, \qquad \mathbf{Q} = \mathbf{k}_d - \mathbf{k}_p.
$$

方程 (1.2) 揭示了有趣的物理特性：
1. 如果观察到动量为 $\mathbf{k}_p$ 的质子，则我们知道它与一个沿 $\mathbf{Q}$ 方向（称为“反冲动量”）运动的中子相关联。
2. 找到动量为 $\mathbf{k}_p$ 的质子的概率幅正比于 $G(K)$，其中 $K$ 表示氘核内部运动中必须提供的额外动量（超过由于氘核整体运动而具有的量 $\frac{1}{2}\mathbf{k}_d$）。
3. 剥裂的基本图像是：中子从氘核中被夺走，留下质子不受干扰。

能量守恒决定了质子动量 $k_p$ 的大小，而动量守恒（如方程 (1.4) 所表达）则使得 $K$ 和 $\mathbf{Q}$ 的大小随 $\mathbf{k}_p$ 的方向变化。


原子核不会接受中子的平面波；它们只俘获特定的角动量分量。因此，我们需要对 (1.2) 中的中子波进行分波展开（partial-wave expansion）：
$$
\psi = \int \mathrm{d}\mathbf{k}_p e^{i\mathbf{k}_p \cdot \mathbf{r}_p} \sum_l \left[4\pi(2l+1)\right]^{\frac{1}{2}} j_l(Q r_n) Y_l^0(\theta_n, \phi_n) G(K).
$$

如果靶核 $A$ 在角动量为 $l$ 的壳模型轨道上有一个空位，则会选择该分波项。贝塞尔函数 $j_l(Q R)$ 描述了在核表面 $r_n = R$ 找到合适中子的穿透振幅（penetration amplitude）。因此，俘获概率（或截面）正比于：
$$
|j_l(Q R) G(K)|^2.
$$

这种依赖性通过动量守恒（方程 (1.4)）与质子的发射方向（即 $\mathbf{k}_p$ 的方向）相关联。对于每个 $l$ 值，这种依赖性具有不同的特征，从而赋予该反应作为谱学工具的重要性。

由于球贝塞尔函数 $j_l(Q R)$ 的振荡性质，截面的角分布呈现振荡状。此外，$j_l(Q R)$ 的第一个也是最大的峰值随着 $l$ 的增加出现在较大的 $Q R$ 值处（对应较大的质子发射角）。这为角动量转移 $l$ 提供了主要特征。

相较之下，氘核变换 $G(K)$ 随质子角度的变化较慢，因为 $G(K)$ 是通过对整个空间积分获得的，而 $j_l(Q R)$ 包含了核半径 $R$，反映了中子俘获发生在核表面的假设。

简单的玻恩近似提供了一个例证，说明这些特征是直接表面反应假设的一般结果，并非氘核剥裂所特有。对于由相互作用 $V$ 引发的反应 $A(a,b)B$，在玻恩近似下，跃迁振幅的表达式为：
$$
T_{\mathrm{BA}} = \int e^{-i\mathbf{k}_b \cdot \mathbf{r}_b} (\psi_B \psi_b | V | \psi_A \psi_a) e^{i\mathbf{k}_a \cdot \mathbf{r}_a} \mathrm{d}\mathbf{r}_a \mathrm{d}\mathbf{r}_b,
$$
其中：
- $\mathbf{k}_a$ 和 $\mathbf{r}_a$ 是入射粒子相对于靶核的相对动量和分离；
- $\mathbf{k}_b$ 和 $\mathbf{r}_b$ 是出射粒子的相应量；
- $\psi_i$ 表示第 $i$ 个核的内禀态。

由于核力是短程的，我们可以近似 $\mathbf{r}_b \approx \mathbf{r}_a$，得到：
$$
T_{\mathrm{BA}} \approx \int e^{i\mathbf{Q} \cdot \mathbf{r}} (\psi_B \psi_b | V | \psi_A \psi_a) \mathrm{d}\mathbf{r},
$$
其中 $\mathbf{Q} = \mathbf{k}_a - \mathbf{k}_b$ 是动量转移。

核矩阵元可以展开为多极级数：
$$
(\psi_B \psi_b | V | \psi_A \psi_a) = \sum_{l,m} f_l(r) Y_l^m(\theta, \phi).
$$

通常，核自旋和选择定则限制了只有少数几个 $l$ 值。如果我们仅考虑一项，则跃迁振幅简化为：
$$
T_{\mathrm{BA}} \propto \int j_l(Q r) f_l(r) r^2 \mathrm{d}r.
$$

假设反应局限于核表面 $r \approx R$，则跃迁振幅进一步简化为：
$$
T_{\mathrm{BA}} \propto j_l(Q R),
$$
其中：
$$
Q = \sqrt{k_a^2 + k_b^2 - 2 k_a k_b \cos\theta}.
$$

尽管简单的平面波理论为直接反应的物理起源提供了见解，但它存在基本不一致性：核内部 $r < R$ 被排除在外，理由是强吸收区域对应于复合核形成，而外部仍使用平面波形式。然而，平面波无法简单地“打洞”而不引入反射。

因此，平面波很快被扭曲波（distorted waves）取代，后者包含了折射和吸收效应。例如：
1. 巴特勒边界匹配方法的扩展（Friedman and Tobocman, 1953）；
2. 玻恩近似到扭曲波玻恩近似（DWBA）的推广（Horowitz and Messiah, 1953）。

这些改进不仅解决了平面波理论的局限性，还为更精确地描述直接反应提供了理论基础。
