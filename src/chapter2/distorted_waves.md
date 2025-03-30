# 2.5. 扭曲波 (Distorted waves)

**2.5.1. 引入辅助势 (Introduction of an auxiliary potential)**

可以在 (2.28) 的两边引入一个任意的辅助势 $U_{\beta}(r_{\beta})$，它仅依赖于通道半径 $r_{\beta}$，因此不会改变 $\beta$ 通道的内禀态。一般来说，$U_{\beta}$ 可以是复数。那么 (2.28) 变为

$$
[E_{\beta} - K_{\beta} - U_{\beta}(\mathbf{r}_{\beta})] \zeta_{\beta}(\mathbf{r}_{\beta}) = (\psi_{\beta} | W_{\beta} | \Psi_{\alpha}^{(+)})
$$

其中

$$
W_{\beta} = V_{\beta}(\mathbf{x}_{\beta}, \mathbf{r}_{\beta}) - U_{\beta}(\mathbf{r}_{\beta})
$$

是剩余相互作用 (residual interaction)。

尽管辅助势 $U_{\beta}$ 原则上是任意的，引入它的动机是为了包含相互作用 $V_{\beta}$ 的大部分平均效应，从而使 (2.32a) 右侧非齐次项 (inhomogeneous term) 的效应最小化。然后剩余相互作用 $W_{\beta}$ 可以作为微扰 (perturbation) 处理。特别是，可以通过使用复光学势 (complex optical potential) 来包含部分短程核力的效应。此外，通常会在 $U_{\beta}$ 中包含对原子核 $b$ 和 $B$ 之间平均库仑相互作用的某种近似，例如两个点电荷之间的库仑势，或者更好的是，两个有限大小球形电荷分布之间的库仑势。

通过将 $\Psi_{\alpha}^{(+)}$ 的展开式 (2.22) 代入 (2.32a) 的右侧，可以看到 $U_{\beta}$ 的一种可能选择，右侧可以写为

$$
(\psi_{\beta} | W_{\beta} | \psi_{\beta}) \zeta_{\beta}(\mathbf{r}_{\beta}) + \sum_{\beta' \neq \beta} (\psi_{\beta} | W_{\beta} | \psi_{\beta'}) \zeta_{\beta'}(\mathbf{r}_{\beta}).
$$

这里我们单独列出了对角矩阵元 (diagonal matrix element)，它可能被认为是最重要的，因为它不涉及 $b$ 和 $B$ 核的任何内部重排。只需选择 $U_{\beta}$ 为相互作用 $V_{\beta}$ 在此状态下对 $b$ 和 $B$ 核的平均值，就可以使该项消失：

$$
U_{\beta}(r_{\beta}) = (\psi_{\beta} | V_{\beta} | \psi_{\beta}).
$$

(2.32) 的形式解可以用齐次方程 (homogeneous equation) 的解来表示

$$
\left[E_{\beta} - K_{\beta} - U_{\beta}(r_{\beta})\right] \chi_{\beta}^{(+)}(\mathbf{k}_{\beta}, \mathbf{r}_{\beta}) = 0.
$$

这些 $\chi^{(+)}$ 被称为扭曲波 (distorted waves)，描述了仅由势 $U$ 引起的 $b$ 在 $B$ 上的（弹性）散射。渐近地，它们具有入射平面波加上出射（散射）球面波的形式 [因此有上标 $(+)$]，

$$
\chi_{\beta}^{(+)}(\mathbf{k}_{\beta}, \mathbf{r}_{\beta}) \sim e^{i \mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta}} + f_{\beta}^{(0)}(\theta) \frac{1}{r_{\beta}} e^{i k_{\beta} r_{\beta}}
$$

其中 $f_{\beta}^{(0)}(\theta)$ 是仅由 $U_{\beta}$ 引起的散射振幅。（我们在此忽略了 $U_{\beta}$ 中与内禀自旋的任何可能耦合。）对 $\chi_{\beta}$ 更详细的描述（包括自旋耦合效应）将留到第 4 章讨论弹性散射时进行。

我们还需要函数 $\chi_{\beta}^{(-)}(\mathbf{k}_{\beta}, \mathbf{r}_{\beta})$，它具有与 (2.35) 类似的渐近形式，但带有入射球面波 [因此有上标 $(-)$]。它是 $\chi_{\beta}^{(+)}$ 的时间反演 (time-reverse)

$$
\chi_{\beta}^{(-)}(\mathbf{k}, \mathbf{r}) = \chi_{\beta}^{(+)^*}(-\mathbf{k}, \mathbf{r}).
$$

当 $U_{\beta} \to 0$ 以致 $\chi_{\beta}^{(\pm)} \rightarrow \exp(i \mathbf{k} \cdot \mathbf{r})$ 时，出现一个特例。[我们稍后将看到，当 $U_{\beta}$ 包含与内禀自旋的耦合时，(2.36) 需要稍作推广。] $\chi_{\beta}^{(-)}$ 是薛定谔方程的解：

$$
\left[E_{\beta} - K_{\beta} - U_{\beta}^*(r_{\beta})\right] \chi_{\beta}^{(-)}(\mathbf{k}_{\beta}, \mathbf{r}_{\beta}) = 0.
$$

注意该方程中出现了复共轭 (complex conjugate) $U_{\beta}^*$。在实践中，我们不需要解 (2.37) 本身，因为我们可以解 (2.34) 并使用关系 (2.36)。

**2.5.2. 跃迁振幅 (Transition amplitude)**

再次应用格林函数技术 (Austern 1970; Messiah 1962; Mott and Massey 1965; 另见 2.8 节) 得到 (2.32) 的一个形式解，它是 (2.29) 给出的解的替代形式：

$$
\zeta_{\beta}(\mathbf{r}_{\beta}) = \chi_{\beta}^{(+)}(\mathbf{k}_{\beta}, \mathbf{r}_{\beta}) \delta_{\beta \alpha} + \int G_{\beta}^{(+)}(\mathbf{r}_{\beta}, \mathbf{r}_{\beta}') (\psi_{\beta} | \mathcal{W}_{\beta} | \Psi_{\alpha}^{(+)}) \, d\mathbf{r}_{\beta}'.
$$

这里 $G_{\beta}^{(+)}$ 是在势 $U_{\beta}$ 中传播的出射波格林函数 (outgoing-wave Green function)。扭曲波 $\chi_{\alpha}^{(+)}$ 仅在 $\beta$ 代表入射通道，即 $\beta = \alpha$ 时出现在 (2.38) 中：根据定义，势 $U_{\beta}$ 不能引起不同通道之间的跃迁。方程 (2.38) 导出了 $\alpha \rightarrow \beta$ 跃迁的振幅表达式，

$$
T_{\beta \alpha}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha}) = T_{\beta}^{(0)}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha}) \delta_{\beta \alpha} + \langle \chi_{\beta}^{(-)}(\mathbf{k}_{\beta}) \psi_{\beta} | \mathcal{W}_{\beta} | \Psi_{\alpha}^{(+)}(\mathbf{k}_{\alpha}) \rangle,
$$

其中

$$
T_{\beta}^{(0)}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha}) = -\frac{2\pi \hbar^2}{\mu_{\beta}} f_{\beta}^{(0)}(\theta)
$$

是仅由辅助势 $U_{\beta}$ 引起的弹性跃迁振幅；用 (2.35) 表示，

$$
T_{\beta}^{(0)}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha}) = -\frac{2\pi \hbar^2}{\mu_{\beta}} f_{\beta}^{(0)}(\theta),
$$

其中 $\theta$ 是 $\mathbf{k}_{\beta}$ 和 $\mathbf{k}_{\alpha}$ 之间的散射角。显然，该项只能对弹性散射有贡献，即当 $\beta = \alpha$ 且代表入射通道时。那么，当然，$k_{\alpha} = k_{\beta}$，尽管通常 $\mathbf{k}_{\alpha}$ 和 $\mathbf{k}_{\beta}$ 的方向会不同。

**2.5.3. 盖尔曼-戈德伯格变换 (Gell-Mann, Goldberger Transformation)**

跃迁振幅 $T_{\beta}^{(0)}$ 本身可以写成类似于 (2.31) 的显式形式：

$$
T_{\beta}^{(0)}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha}) = \langle e^{i \mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta}} U_{\beta} | \chi_{\beta}^{(+)}(\mathbf{k}_{\alpha}) \rangle,
$$

或

$$
T_{\beta}^{(0)}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha}) = \int e^{-i \mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta}} U_{\beta}(r_{\beta}) \chi_{\beta}^{(+)}(\mathbf{k}_{\alpha}, \mathbf{r}_{\beta}) \, d\mathbf{r}_{\beta}.
$$

通过引入辅助势 $U_{\beta}$，将跃迁振幅 $T_{\beta \alpha}$ 的表达式从形式 (2.31) 变换到形式 (2.39)，连同 (2.40)，被称为盖尔曼-戈德伯格变换 (Gell-Mann, Goldberger transformation)，或双势公式 (two-potential formula)。后一个名称源于将相互作用势 $V_{\beta}$ 看作由两项组成，$V_{\beta} = U_{\beta} + W_{\beta}$。如果 $U_{\beta}$ 部分的散射振幅 $T_{\beta}^{(0)}$ 和相关的扭曲波 $\chi_{\beta}$ 已知或易于计算，而剩余部分 $W_{\beta}$ 很弱，从而可以通过近似 (2.39) 右侧第二项来计算其贡献，则该变换特别有用。

当 $U_{\beta}$ 选择为两个点电荷的库仑势时，出现弹性散射 $(\beta = \alpha)$ 的特例，

$$
U_{\beta} = \frac{Z_b Z_B e^2}{r_{\beta}},
$$

采用明显的符号表示。那么 $f_{\beta}^{(0)}$ 或 $T_{\beta}^{(0)}$ 分别就是众所周知的库仑（卢瑟福）散射振幅 $f_C(\theta)$ 或 $T_C(\theta)$。那么 (2.39) 中的剩余项就归因于核力，加上由于原子核 $b$ 和 $B$ 实际电荷分布的有限大小而导致的 $U_{\beta}$ 对点电荷形式的偏离。传统上（见第 4 章）以这种方式计算弹性散射，显式分离出卢瑟福振幅 $f_C(\theta)$ 并写为，例如，

$$
f(\theta) = f_C(\theta) + f_N(\theta).
$$