# 2.2. 定义与符号 (Definitions and notation)

我们在此定义一套符号系统，并尽可能在本书中统一使用该系统。除非另有说明，所有物理量均指质心系（centre of mass system）中的量。
### 2.2.1 内禀态 (Internal states) 与哈密顿量 (Hamiltonians)

几乎在所有情况下，我们仅讨论涉及两个粒子的反应。这样的一对原子核（例如 $a$ 和 $A$）被称为一个**划分**（partition），并用希腊字母（如 $\pmb{\alpha}$）表示。原子核 $a$ 和 $A$ 可以处于基态或任意激发态。符号 $\alpha$ 在不同上下文中可能有不同的含义：有时它仅表示划分 $a + A$，有时则特指该划分的一个特定内禀态（即 $a$ 和 $A$ 的某一特定状态）。为了避免引入过多下标，我们将采用以下惯例：符号 $\Sigma_{\alpha}$ 表示对划分 $\alpha$ 中的所有内禀态求和，而不是对不同的划分求和。此外，我们偶尔会用 $\alpha, \alpha'$ 表示同一划分的不同内禀态。上下文应始终明确符号的具体含义。

由于我们不讨论涉及核子以外粒子的反应，总核子数在反应过程中是守恒的。因此，描述两个给定原子核之间碰撞时，仅需考虑具有相同总核子数的划分。

术语“道”（channel）用于指代划分的特定内禀态与其相对运动状态的组合。具体来说，“道”的含义可以灵活变化：有时它仅表示相对运动的能量，有时表示能量和动量（包括方向），有时还包括角动量（包括内禀自旋及其取向）。在任何给定上下文中，其含义应是清晰的。

符号 $\psi$ 用于描述原子核内禀态的波函数。对于任何划分 $\alpha = a + A$，我们通常用一个单独的符号表示两个原子核内禀态的乘积：

$$
\psi_{\alpha}(x_{\alpha}) \equiv \psi_{a}(x_{a}) \psi_{A}(x_{A}),
$$

其中 $x$ 表示内禀变量。这些波函数 $\psi_i$ 是相应内禀哈密顿量 $H_i$ 的本征函数，对应本征能量为 $\varepsilon_i$。例如，对于划分 $\alpha = a + A$，有

$$
H_{\alpha} \equiv H_a + H_A,
$$

因此满足以下本征方程：

$$
(\varepsilon_{\alpha} - H_{\alpha}) \psi_{\alpha} = 0,
$$

同时

$$
(\varepsilon_a - H_a) \psi_a = 0, \qquad (\varepsilon_A - H_A) \psi_A = 0,
$$

且 $\varepsilon_{\alpha} = \varepsilon_a + \varepsilon_A$。这些内禀波函数是正交归一化的，即

$$
(\psi_{\alpha} | \psi_{\alpha'}) \equiv \int \psi_{\alpha}^*(x_{\alpha}) \psi_{\alpha'}(x_{\alpha}) \, \mathrm{d}x_{\alpha} = \delta_{\alpha \alpha'},
$$

以及

$$
(\psi_a | \psi_{a'}) \equiv \int \psi_a^*(x_a) \psi_{a'}(x_a) \, \mathrm{d}x_a = \delta_{aa'}.
$$

类似地，对于 $\psi_A$ 也成立。这里，$\alpha, \alpha'$ 表示划分 $\alpha$ 的不同内禀态，而 $a, a'$ 表示原子核 $a$ 的不同内禀态。

如果总能量为 $E$，那么该道中相对运动的动能 $E_{\alpha}$ 定义为总能量减去内禀能量：

$$
E_{\alpha} = E - \varepsilon_{\alpha}.
$$

### 2.2.2 道坐标 (Channel coordinates) 与动能 (Kinetic energy)

相对坐标或道坐标 $\mathbf{r}_{\alpha}$ 是连接两个原子核 $a$ 和 $A$ 质心位置的矢量，定义为

$$
\mathbf{r}_{\alpha} = \frac{1}{\mathfrak{M}_a} \sum_{i=1}^{a} \mathfrak{M}_i \mathbf{r}_i - \frac{1}{\mathfrak{M}_A} \sum_{j=a+1}^{a+A} \mathfrak{M}_j \mathbf{r}_j,
$$

其中：
- 标记为 $1$ 到 $a$ 的核子属于原子核 $a$；
- 标记为 $(a+1)$ 到 $(a+A)$ 的核子属于原子核 $A$；
- $\mathfrak{M}_i$ 表示第 $i$ 个核子的质量；
- $\mathfrak{M}_a$ 和 $\mathfrak{M}_A$ 分别表示原子核 $a$ 和 $A$ 的总质量。

为了区分质量与角动量投影，我们使用 Fraktur 字体 $\mathfrak{M}$ 表示质量，而用罗马字母 $M$ 和 $m$ 表示角动量投影。

相对运动动能对应的算符为

$$
K_{\alpha} = -\frac{\hbar^2}{2\mu_{\alpha}} \nabla_{\alpha}^2,
$$

其中 $\nabla_{\alpha}$ 表示对 $\mathbf{r}_{\alpha}$ 求导，$\mu_{\alpha}$ 是划分 $\alpha$ 的约化质量，定义为

$$
\mu_{\alpha} = \frac{\mathfrak{M}_a \mathfrak{M}_A}{\mathfrak{M}_a + \mathfrak{M}_A}.
$$

该道中相对运动的波数 $k_{\alpha}$ 由动能决定：

$$
E_{\alpha} = \frac{\hbar^2 k_{\alpha}^2}{2\mu_{\alpha}}.
$$

两个原子核相对运动的动量可写为 $\mathbf{p}_{\alpha} = \hbar \mathbf{k}_{\alpha}$，其中波矢 $\mathbf{k}_{\alpha}$ 的方向与 $\mathbf{p}_{\alpha}$ 一致，大小为 $k_{\alpha}$。通常，$\mathbf{k}_{\alpha}$ 本身被直接称为“动量”，单位 $\hbar$ 是默认隐含的。

### 2.2.3 相互作用势 (Interaction potential)

两个原子核 $a$ 和 $A$ 之间的相互作用势记为 $V_{\alpha} \equiv V(x_{\alpha}, \mathbf{r}_{\alpha})$。注意，$V_{\alpha}$ 不仅依赖于两核之间的分离距离 $\mathbf{r}_{\alpha}$，还依赖于内禀变量 $x_{\alpha}$。如果假设相互作用仅由两体力（two-body forces）产生，则其形式为

$$
V_{\alpha} = \sum_{i=1}^{a} \sum_{j=a+1}^{a+A} v_{ij},
$$

其中 $v_{ij}$ 表示核子 $i$ 和 $j$ 之间的相互作用势，通常依赖于它们的间距 $\mathbf{r}_{ij} = \mathbf{r}_i - \mathbf{r}_j$、自旋和同位旋。

系统的总哈密顿量 $H$ 是原子核 $a$ 和 $A$ 的内禀哈密顿量、相对运动动能以及相互作用势之和：

$$
H = H_{\alpha} + K_{\alpha} + V_{\alpha}.
$$

对于每一种可能的划分（例如 $\beta, \gamma$ 等），总哈密顿量都可以写成类似的形式：

$$
H = H_{\beta} + K_{\beta} + V_{\beta} = H_{\gamma} + K_{\gamma} + V_{\gamma}, \quad \text{等等}.
$$
