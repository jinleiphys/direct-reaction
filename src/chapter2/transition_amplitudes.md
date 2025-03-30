# 2.4. 跃迁振幅 (Transition amplitudes)

**2.4.1. 定义 (Definition)**

为了完全确定波函数 $\Psi$，我们需要施加边界条件 (boundary conditions)。我们感兴趣的物理情景是入射束在通道 $\alpha$ 中，例如：两个原子核 $a$ 和 $A$ 处于基态，并以相对动量 $\mathbf{k}_{\alpha}$ 在平面波态中运动。因此，$\Psi$ 仅在基态通道 $\alpha$ 包含入射球面波 (incoming spherical waves)，但在该通道以及在该能量下所有其他开放通道 (open channels) 中将有出射球面波 (outgoing spherical waves)。我们将这个特定的 $\Psi$ 记为 $\Psi_{\alpha}^{(+)}(\mathbf{k}_{\alpha})$。

现在考虑将 $\Psi_{\alpha}^{(+)}$ 按某个通道 $\beta$ 的态展开，如 (2.15) 所示：

$$
\Psi_{\alpha}^{(+)} = \sum_{\beta} \zeta_{\beta}(\mathbf{r}_{\beta}) \psi_{\beta}(x_{\beta}).
$$

系数 $\zeta_{\beta}$，即 $\Psi_{\alpha}^{(+)}$ 在通道 $\beta$ 上的投影，类似于 (2.16) 由下式给出：

$$
\zeta_{\beta}(\mathbf{r}_{\beta}) = (\psi_{\beta} | \Psi_{\alpha}^{(+)}) \equiv \int \psi_{\beta}^*(\mathbf{x}_{\beta}) \Psi_{\alpha}^{(+)} \, \mathrm{d}\mathbf{x}_{\beta}.
$$

[为了完全确定函数 $\zeta_{\beta}$，它应带上标 $(+)$ 表示我们选择出射波，并带下标 $\alpha$ 提醒我们它源于 $\alpha$ 通道的入射波。为简单起见，我们将省略这些标记。] 由于函数 $\zeta_{\beta}(\mathbf{r}_{\beta})$ 描述了通道 $\beta$ 中的相对运动并告诉我们任何 $\alpha \to \beta$ 跃迁的信息，它必须具有渐近形式 (asymptotic forms)：

$$
\zeta_{\beta}(\mathbf{r}_{\beta}) \sim e^{i \mathbf{k}_{\alpha} \cdot \mathbf{r}_{\beta}} \delta_{\alpha \beta} + f_{\beta \alpha}(\hat{\mathbf{r}}_{\beta}, \mathbf{k}_{\alpha}) \frac{1}{r_{\beta}} e^{i \mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta}}
$$

当 $r_{\beta} \rightarrow \infty$ 时。这里 $\hat{\mathbf{r}}_{\beta}$ 是沿 $\mathbf{r}_{\beta}$ 的单位矢量；也就是说，它代表 $\mathbf{r}_{\beta}$ 方向的极角。并且，$k_{\beta}$ 是通道 $\beta$ 的波数。渐近地，相对动量 $\mathbf{k}_{\beta}$ 与 $\mathbf{r}_{\beta}$ 方向相同，即 $\hat{\mathbf{k}}_{\beta} = \hat{\mathbf{r}}_{\beta}$，所以我们同样可以写成 $f_{\beta \alpha}(\hat{\mathbf{k}}_{\beta}, \mathbf{k}_{\alpha})$。当然，入射平面波仅在 $\beta = \alpha$ 时出现，并且仅在 $a$ 和 $A$ 都处于基态的 $\alpha$ 通道中出现。

方程 (2.24) 将散射振幅 (scattering amplitude) $f_{\beta \alpha}$ 定义为由 $\alpha$ 通道中单位振幅平面波引起的 $\beta$ 通道中出射球面波的振幅。如果 $\beta$ 和 $\alpha$ 通道相同，$f_{\beta \alpha}$ 指弹性 ($f_{\alpha \alpha}$) 或非弹性 ($f_{\alpha' \alpha}$) 散射。如果 $\beta \neq \alpha$，它描述重排碰撞 (rearrangement collision)。对应于跃迁 $\alpha \rightarrow \beta$ 的反应 $A(a, b)B$ 的微分截面 (differential cross section) 由下式给出：

$$
\frac{\mathrm{d}\sigma_{\beta \alpha}}{\mathrm{d}\Omega} = \left(\frac{v_{\beta}}{v_{\alpha}}\right) |f_{\beta \alpha}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha})|^2.
$$

[两通道中速度 (velocities) 之比 $(v_{\beta}/v_{\alpha})$ 的出现是因为 $f$ 在 (2.24) 中被定义为散射波的振幅，而截面关心的是通量 (fluxes)。] 出于操作目的，使用通过对散射振幅重归一化 (renormalizing) 定义的跃迁振幅 (transition amplitude) $T_{\beta \alpha}$ 通常更方便，

$$
T_{\beta \alpha} = -\frac{2\pi \hbar^2}{\mu_{\beta}} f_{\beta \alpha},
$$

使得 (2.25) 变为

$$
\frac{\mathrm{d}\sigma_{\beta \alpha}}{\mathrm{d}\Omega} = \frac{\mu_{\alpha} \mu_{\beta}}{(2\pi \hbar^2)^2} \left(\frac{k_{\beta}}{k_{\alpha}}\right) |T_{\beta \alpha}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha})|^2.
$$

形式 (2.24) 似乎忽略了可能存在的任何库仑场 (Coulomb fields)。这是为了简单起见。然而，这不失一般性，因为在实践中这些库仑场在渐近处被屏蔽 (screened)。当然，任何对散射的库仑效应都包含在振幅 $f$ 中，任何库仑势都包含在相互作用 $V_{\alpha}$ 等之中。稍后分离出库仑或卢瑟福散射 (Rutherford scattering)，并显式引入库仑波 (Coulomb waves) 会很方便。事实上，我们将看到，使用源于点电荷库仑场 $Z_b Z_B e^2 / r_{\beta}$ 的库仑波等效于在 (2.24) 中替换

$$
\begin{aligned}
& (\mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta}) \rightarrow [\mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta} + n_{\beta} \ln(k_{\beta} r_{\beta} - \mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta})], \\
& (k_{\beta} r_{\beta}) \rightarrow (k_{\beta} r_{\beta} - n_{\beta} \ln 2 k_{\beta} r_{\beta}),
\end{aligned}
$$

其中 $n_{\beta}$ 是通常的索末菲或库仑参数 (Sommerfeld or Coulomb parameter)，$n_{\beta} = Z_b Z_B e^2 / \hbar v_{\beta}$。当然，散射振幅 $f_{\beta \alpha}$ 的值也会改变。

**2.4.2. 一个精确表达式 (An exact expression)**

我们可以通过使用 (2.13) 中 $H$ 的适当形式，从薛定谔方程 (2.14) 得到散射振幅 $f_{\beta \alpha}$ 的表达式，

$$
(E - H_{\beta} - K_{\beta}) \Psi_{\alpha}^{(+)} = V_{\beta} \Psi_{\alpha}^{(+)}
$$

并投影到通道 $\beta$ 上。从左边乘以 $\psi_{\beta}^*(x_{\beta})$ 并对 $x_{\beta}$ 积分，我们得到 $\zeta_{\beta}$ 的方程

$$
(E_{\beta} - K_{\beta}) \zeta_{\beta}(\mathbf{r}_{\beta}) = \langle \psi_{\beta} | V_{\beta} | \Psi_{\alpha}^{(+)} \rangle \equiv \int \psi_{\beta}^*(\mathbf{x}_{\beta}) V_{\beta}(\mathbf{r}_{\beta}, \mathbf{x}_{\beta}) \Psi_{\alpha}^{(+)} \, \mathrm{d}\mathbf{x}_{\beta}.
$$

（由于我们将自己限制在原子核 $b$ 和 $B$ 处于束缚态的通道 $\beta$ 中，因此在得到该方程左侧时使用的 $H_{\beta}$ 的厄米性 (hermiticity) 没有问题。）(2.28) 的右侧仍然是 $\mathbf{r}_{\beta}$ 的函数。这个方程可以通过标准的格林函数 (Green function) 技术形式上求解（Messiah 1962; Mott and Massey 1965; 另见 2.8 节）。利用 (2.24) 暗示的边界条件，我们找到解

$$
\zeta_{\beta}(\mathbf{r}_{\beta}) = e^{i \mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta}} \delta_{\alpha \beta} - \left(\frac{\mu_{\beta}}{2\pi \hbar^2}\right) \int \frac{e^{i k_{\beta} |\mathbf{r}_{\beta} - \mathbf{r}_{\beta}^{\prime}|}}{|\mathbf{r}_{\beta} - \mathbf{r}_{\beta}^{\prime}|} \langle \psi_{\beta} | V_{\beta} | \Psi_{\alpha}^{(+)} \rangle \, \mathrm{d}\mathbf{r}_{\beta}^{\prime}.
$$

取极限 $r_{\beta} \gg r_{\beta}^{\prime}$，我们可以令 $|\mathbf{r}_{\beta} - \mathbf{r}_{\beta}^{\prime}| \approx r_{\beta} - \hat{\mathbf{r}}_{\beta} \cdot \mathbf{r}_{\beta}^{\prime} = r_{\beta} - \hat{\mathbf{k}}_{\beta} \cdot \mathbf{r}_{\beta}^{\prime}$。通过与 (2.24) 的渐近形式比较，我们得到

$$
\begin{aligned}
& f_{\beta \alpha}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha}) = -\left(\frac{\mu_{\beta}}{2\pi \hbar^2}\right) \langle e^{i \mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta}^{\prime}} \psi_{\beta} | V_{\beta} | \Psi_{\alpha}^{(+)}(\mathbf{k}_{\alpha}) \rangle \\
& \quad \equiv -\left(\frac{\mu_{\beta}}{2\pi \hbar^2}\right) \left\{ \int e^{-i \mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta}^{\prime}} \psi_{\beta}^*(\mathbf{x}_{\beta}) V_{\beta}(\mathbf{x}_{\beta}, \mathbf{r}_{\beta}^{\prime}) \Psi_{\alpha}^{(+)}(\mathbf{k}_{\alpha}) \, \mathrm{d}\mathbf{x}_{\beta} \, \mathrm{d}\mathbf{r}_{\beta}^{\prime} \right\},
\end{aligned}
$$

其中现在尖括号表示对所有变量积分。相应的重归一化跃迁振幅 (2.26) 是

$$
T_{\beta \alpha}(\mathbf{k}_{\beta}, \mathbf{k}_{\alpha}) = \langle e^{i \mathbf{k}_{\beta} \cdot \mathbf{r}_{\beta}^{\prime}} \psi_{\beta} | V_{\beta} | \Psi_{\alpha}^{(+)}(\mathbf{k}_{\alpha}) \rangle.
$$

当然，(2.29) 到 (2.31) 仅在形式意义上代表了散射问题的“解”；它们仍然涉及（尚未知的）总波函数 $\Psi$。它们比原始的薛定谔方程 (2.14) 或 (2.28) 更具体，因为它们包含了所需的边界条件。这些表达式的价值在于，例如，展示对称性质，并为进行近似提供合适的起点。首先，我们考虑这些表达式的一些推广，这些推广旨在更适合引入近似。