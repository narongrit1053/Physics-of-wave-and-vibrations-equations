// Physics of Waves & Oscillations (Course 207023) - Verified Practice Dataset
window.PRACTICE_DATA = [
  {
    "lecture": 1,
    "title_th": "Lecture 1: การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย (Simple Harmonic Motion)",
    "title_en": "Lecture 1: Simple Harmonic Motion (SHM)",
    "problems": [
      {
        "id": "p1_1",
        "num_in_lec": 1,
        "global_id": 1,
        "topic_th": "หัวข้อ 1.1",
        "topic_en": "Topic 1.1",
        "question_th": "ในเครื่องยนต์ ลูกสูบแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายโดยตำแหน่งของมันเปลี่ยนแปลงตามสมการ$$x = (5.00\\text{ cm}) \\cos\\left(2t + \\frac{\\pi}{6}\\right)$$เมื่อ $x$ มีหน่วยเป็น $\\text{cm}$ และ $t$ มีหน่วยเป็น $\\text{s}$ ที่เวลา $t = 0$ จงหา:(a) ตำแหน่งของอนุภาค(b) ความเร็วของอนุภาค(c) ความเร่งของอนุภาค(d) คาบของการเคลื่อนที่(e) แอมพลิจูดของการเคลื่อนที่",
        "question_en": "ในเครื่องยนต์ ลูกสูบแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายโดยตำแหน่งของมันเปลี่ยนแปลงตามสมการ$$x = (5.00\\text{ cm}) \\cos\\left(2t + \\frac{\\pi}{6}\\right)$$where  $x$ is in  $\\text{cm}$ and  $t$ is in  $\\text{s}$ at time  $t = 0$ Find:(a) position of the particle(b) velocity of the particle(c) acceleration of the particle(d) period of motion(e) amplitude of motion",
        "formulas": [
          "x(t) = A \\cos(\\omega t + \\phi)",
          "v(t) = -A\\omega \\sin(\\omega t + \\phi)",
          "a(t) = -A\\omega^2 \\cos(\\omega t + \\phi)"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.1:**\nจากสมการตำแหน่ง: $$x(t) = (5.00\\text{ cm}) \\cos\\left(2t + \\frac{\\pi}{6}\\right)$$\nเทียบกับ $x(t) = A \\cos(\\omega t + \\phi)$ ได้ $A = 5.00\\text{ cm}$, $\\omega = 2.00\\text{ rad/s}$, $\\phi = \\frac{\\pi}{6}\\text{ rad}$\n\n(a) ที่ $t = 0$: $$x(0) = 5.00 \\cos\\left(\\frac{\\pi}{6}\\right) = 5.00 \\times \\frac{\\sqrt{3}}{2} = 4.33\\text{ cm}$$\n(b) ความเร็ว $v(t) = \\frac{dx}{dt} = -10.0 \\sin\\left(2t + \\frac{\\pi}{6}\\right)$:\n$$v(0) = -10.0 \\sin\\left(\\frac{\\pi}{6}\\right) = -5.00\\text{ cm/s}$$\n(c) ความเร่ง $a(t) = \\frac{dv}{dt} = -20.0 \\cos\\left(2t + \\frac{\\pi}{6}\\right)$:\n$$a(0) = -20.0 \\cos\\left(\\frac{\\pi}{6}\\right) = -17.32\\text{ cm/s}^2$$\n(d) คาบ $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{2} = \\pi \\approx 3.14\\text{ s}$\n(e) แอมพลิจูด $A = 5.00\\text{ cm}$",
        "solution_en": "**Detailed Solution for Problem 1.1:**\nGiven $x(t) = (5.00\\text{ cm}) \\cos\\left(2t + \\frac{\\pi}{6}\\right)$:\n(a) At $t = 0$: $x(0) = 5.00 \\cos(\\pi/6) = 4.33\\text{ cm}$\n(b) Velocity $v(0) = -10.0 \\sin(\\pi/6) = -5.00\\text{ cm/s}$\n(c) Acceleration $a(0) = -20.0 \\cos(\\pi/6) = -17.32\\text{ cm/s}^2$\n(d) Period $T = \\frac{2\\pi}{2} = \\pi \\approx 3.14\\text{ s}$\n(e) Amplitude $A = 5.00\\text{ cm}$",
        "hints": [
          "เทียบสมการ $x(t) = (5.00\\text{ cm}) \\cos(2t + \\frac{\\pi}{6})$ กับสมการมาตรฐานเพื่อหา $A = 5.00\\text{ cm}, \\omega = 2.00\\text{ rad/s}, \\phi = \\frac{\\pi}{6}$",
          "หาความเร็วและความเร่งที่ $t=0$ จาก $v(0) = -A\\omega\\sin\\phi$ และ $a(0) = -A\\omega^2\\cos\\phi$"
        ]
      },
      {
        "id": "p1_2",
        "num_in_lec": 2,
        "global_id": 2,
        "topic_th": "หัวข้อ 1.2",
        "topic_en": "Topic 1.2",
        "question_th": "ตำแหน่งของอนุภาคกำหนดโดยสมการ$$x = (4.00\\text{ m}) \\cos(3.00\\pi t + \\pi)$$เมื่อ $x$ มีหน่วยเป็น $\\text{m}$ และ $t$ มีหน่วยเป็น $\\text{s}$ จงหา:(a) ความถี่(b) คาบของการเคลื่อนที่(c) แอมพลิจูดของการเคลื่อนที่(d) ค่าคงตัวเฟส(e) ตำแหน่งของอนุภาคที่เวลา $t = 0.250\\text{ s}$",
        "question_en": "position of the particleกำหนดโดยสมการ$$x = (4.00\\text{ m}) \\cos(3.00\\pi t + \\pi)$$where  $x$ is in  $\\text{m}$ and  $t$ is in  $\\text{s}$ Find:(a) frequency(b) period of motion(c) amplitude of motion(d) ค่าคงตัวเฟส(e) position of the particleat time  $t = 0.250\\text{ s}$",
        "formulas": [
          "x(t) = A \\cos(\\omega t + \\phi)",
          "f = \\frac{\\omega}{2\\pi}",
          "T = \\frac{1}{f}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.2:**\nจาก $x = (4.00\\text{ m}) \\cos(3.00\\pi t + \\pi)$ เทียบกับ $x = A \\cos(\\omega t + \\phi)$:\n(a) ความถี่ $f = \\frac{\\omega}{2\\pi} = \\frac{3.00\\pi}{2\\pi} = 1.50\\text{ Hz}$\n(b) คาบ $T = \\frac{1}{f} = \\frac{1}{1.50} = 0.667\\text{ s}$\n(c) แอมพลิจูด $A = 4.00\\text{ m}$\n(d) เฟสเริ่มต้น $\\phi = \\pi\\text{ rad} = 180^\\circ$\n(e) ที่ $t = 0.250\\text{ s}$:\n$$x(0.250) = 4.00 \\cos(3.00\\pi(0.250) + \\pi) = 4.00 \\cos(1.75\\pi) = 4.00 \\times \\frac{\\sqrt{2}}{2} = 2.83\\text{ m}$$",
        "solution_en": "**Detailed Solution for Problem 1.2:**\nFrom $x = (4.00\\text{ m}) \\cos(3.00\\pi t + \\pi)$:\n(a) Frequency $f = \\frac{3.00\\pi}{2\\pi} = 1.50\\text{ Hz}$\n(b) Period $T = \\frac{1}{1.50} = 0.667\\text{ s}$\n(c) Amplitude $A = 4.00\\text{ m}$\n(d) Phase constant $\\phi = \\pi\\text{ rad}$\n(e) Position at $t = 0.250\\text{ s}$: $x(0.250) = 4.00 \\cos(1.75\\pi) = 2.83\\text{ m}$",
        "hints": [
          "เทียบสมการตำแหน่งได้ $\\omega = 3.00\\pi\\text{ rad/s}$ และ $\\phi = \\pi\\text{ rad}$",
          "หาความถี่ $f = \\frac{3.00\\pi}{2\\pi} = 1.50\\text{ Hz}$ และแทน $t=0.250\\text{ s}$ ในสมการ $x(t)$"
        ]
      },
      {
        "id": "p1_3",
        "num_in_lec": 3,
        "global_id": 3,
        "topic_th": "หัวข้อ 1.3",
        "topic_en": "Topic 1.3",
        "question_th": "ฟังก์ชันตำแหน่ง $x = (6.0\\text{ m}) \\cos((3\\pi\\text{ rad/s})t + \\pi/3\\text{ rad})$ อธิบายการเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายของวัตถุหนึ่ง ที่เวลา $t = 2.0\\text{ s}$ จงหา:(a) การกระจัด(b) ความเร็ว(c) ความเร่ง(d) เฟสของการเคลื่อนที่(e) ความถี่(f) คาบของการเคลื่อนที่",
        "question_en": "ฟังก์ชันตำแหน่ง $x = (6.0\\text{ m}) \\cos((3\\pi\\text{ rad/s})t + \\pi/3\\text{ rad})$ อธิบายการเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายของวัตถุหนึ่ง at time  $t = 2.0\\text{ s}$ Find:(a) การกระจัด(b) ความเร็ว(c) ความเร่ง(d) เฟสของการเคลื่อนที่(e) frequency(f) period of motion",
        "formulas": [
          "x(t) = A \\cos(\\omega t + \\phi)",
          "v(t) = -A\\omega \\sin(\\omega t + \\phi)",
          "a(t) = -\\omega^2 x(t)"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.3:**\nจากฟังก์ชันตำแหน่ง $x(t) = (6.0\\text{ m}) \\cos((3\\pi\\text{ rad/s})t + \\pi/3\\text{ rad})$ ที่เวลา $t = 2.0\\text{ s}$:\n(a) การกระจัด $x(2.0) = 6.0 \\cos(6\\pi + \\pi/3) = 6.0 \\cos(\\pi/3) = 6.0 \\times 0.5 = 3.0\\text{ m}$\n(b) ความเร็ว $v(t) = -18\\pi \\sin(3\\pi t + \\pi/3) \\implies v(2.0) = -18\\pi \\sin(\\pi/3) = -9\\sqrt{3}\\pi \\approx -49.0\\text{ m/s}$\n(c) ความเร่ง $a(t) = -9\\pi^2 x(t) \\implies a(2.0) = -9\\pi^2 (3.0) = -27\\pi^2 \\approx -266.5\\text{ m/s}^2$\n(d) เฟสของการเคลื่อนที่ ณ $t = 2.0\\text{ s}$: $(3\\pi(2.0) + \\pi/3) = 6.333\\pi\\text{ rad} = 19.90\\text{ rad}$\n(e) ความถี่ $f = \\frac{\\omega}{2\\pi} = \\frac{3\\pi}{2\\pi} = 1.50\\text{ Hz}$\n(f) คาบ $T = \\frac{1}{f} = 0.667\\text{ s}$",
        "solution_en": "**Detailed Solution for Problem 1.3:**\nFrom $x(t) = (6.0\\text{ m}) \\cos(3\\pi t + \\pi/3)$ at $t = 2.0\\text{ s}$:\n(a) Displacement $x(2.0) = 6.0 \\cos(\\pi/3) = 3.0\\text{ m}$\n(b) Velocity $v(2.0) = -18\\pi \\sin(\\pi/3) = -9\\sqrt{3}\\pi \\approx -49.0\\text{ m/s}$\n(c) Acceleration $a(2.0) = -27\\pi^2 \\approx -266.5\\text{ m/s}^2$\n(d) Phase at $t = 2.0\\text{ s}$: $6.333\\pi\\text{ rad} = 19.90\\text{ rad}$\n(e) Frequency $f = 1.50\\text{ Hz}$\n(f) Period $T = 0.667\\text{ s}$",
        "hints": [
          "เฟสของการเคลื่อนที่คือมุมทั้งหมดในฟังก์ชันคอส: $\\theta(t) = \\omega t + \\phi = 3\\pi(2.0) + \\pi/3 = 6.333\\pi\\text{ rad}$",
          "หาการกระจัด ความเร็ว ความเร่ง โดยแทน $t=2.0\\text{ s}$ ลงในฟังก์ชันอนุพันธ์เทียบกับเวลา"
        ]
      },
      {
        "id": "p1_4",
        "num_in_lec": 4,
        "global_id": 4,
        "topic_th": "หัวข้อ 1.4",
        "topic_en": "Topic 1.4",
        "question_th": "มวล $0.500\\text{ kg}$ บนสปริงมีความเร็วที่เป็นฟังก์ชันของเวลาตามสมการ$$v_x = -(0.0360\\text{ m/s}) \\sin((4.71\\text{ rad/s})t + 1.57\\text{ rad})$$จงหา:(a) คาบ(b) แอมพลิจูด(c) ความเร่งสูงสุดของมวลนี้",
        "question_en": "มวล $0.500\\text{ kg}$ บนสปริงมีความเร็วที่เป็นฟังก์ชันของเวลาตามสมการ$$v_x = -(0.0360\\text{ m/s}) \\sin((4.71\\text{ rad/s})t + 1.57\\text{ rad})$$Find:(a) period(b) amplitude(c) maximum accelerationของมวลนี้",
        "formulas": [
          "v_{\\max} = \\omega A",
          "a_{\\max} = \\omega^2 A",
          "\\omega = \\frac{a_{\\max}}{v_{\\max}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.4:**\nจากสมการความเร็ว $v_x = -(0.0360\\text{ m/s}) \\sin((4.71\\text{ rad/s})t + 1.57\\text{ rad})$ มวล $m = 0.500\\text{ kg}$:\nเทียบกับ $v(t) = -A\\omega \\sin(\\omega t + \\phi)$ ได้ $\\omega = 4.71\\text{ rad/s}$ และ $v_{\\max} = 0.0360\\text{ m/s}$\n\n(a) คาบ $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{4.71} = 1.334\\text{ s}$\n(b) แอมพลิจูด $A = \\frac{v_{\\max}}{\\omega} = \\frac{0.0360}{4.71} = 7.64 \\times 10^{-3}\\text{ m} = 0.764\\text{ cm}$\n(c) ความเร่งสูงสุด $a_{\\max} = \\omega v_{\\max} = 4.71 \\times 0.0360 = 0.170\\text{ m/s}^2$",
        "solution_en": "**Detailed Solution for Problem 1.4:**\nFrom $v_x = -(0.0360\\text{ m/s}) \\sin(4.71 t + 1.57)$ with $m = 0.500\\text{ kg}$:\n(a) Period $T = \\frac{2\\pi}{4.71} = 1.334\\text{ s}$\n(b) Amplitude $A = \\frac{0.0360}{4.71} = 7.64 \\times 10^{-3}\\text{ m} = 0.764\\text{ cm}$\n(c) Max acceleration $a_{\\max} = \\omega v_{\\max} = 0.170\\text{ m/s}^2$",
        "hints": [
          "นำอัตราส่วนความเร่งสูงสุดต่อความเร็วสูงสุดเพื่อหาความถี่เชิงมุม: $\\omega = \\frac{a_{\\max}}{v_{\\max}} = \\frac{30.0}{6.00} = 5.00\\text{ rad/s}$",
          "หาแอมพลิจูดจาก $A = \\frac{v_{\\max}}{\\omega} = \\frac{6.00}{5.00} = 1.20\\text{ m}$"
        ]
      },
      {
        "id": "p1_5",
        "num_in_lec": 5,
        "global_id": 5,
        "topic_th": "หัวข้อ 1.5",
        "topic_en": "Topic 1.5",
        "question_th": "มวล $1.50\\text{ kg}$ บนสปริงมีการกระจัดที่เป็นฟังก์ชันของเวลาตามสมการ$$x(t) = (7.40\\text{ cm}) \\cos((4.16\\text{ rad/s})t - 2.42\\text{ rad})$$จงหา:(a) คาบ(b) ค่าคงตัวสปริง(c) อัตราเร็วสูงสุดของมวล(d) แรงสูงสุดที่กระทำต่อมวล(e) ตำแหน่ง, อัตราเร็ว และความเร่งที่เวลา $t = 1.00\\text{ s}$",
        "question_en": "มวล $1.50\\text{ kg}$ บนสปริงมีการกระจัดที่เป็นฟังก์ชันของเวลาตามสมการ$$x(t) = (7.40\\text{ cm}) \\cos((4.16\\text{ rad/s})t - 2.42\\text{ rad})$$Find:(a) period(b) spring constant(c) maximum speedของมวล(d) แรงสูงสุดที่กระทำต่อมวล(e) ตำแหน่ง, อัตราเร็ว and ความเร่งat time  $t = 1.00\\text{ s}$",
        "formulas": [
          "a(x) = -\\omega^2 x",
          "f = \\frac{\\omega}{2\\pi}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.5:**\nจาก $x(t) = (7.40\\text{ cm}) \\cos((4.16\\text{ rad/s})t - 2.42\\text{ rad})$ มวล $m = 1.50\\text{ kg}$:\n(a) คาบ $T = \\frac{2\\pi}{4.16} = 1.511\\text{ s}$\n(b) ค่าคงตัวสปริง $k = m\\omega^2 = 1.50 \\times (4.16)^2 = 25.96\\text{ N/m}$\n(c) อัตราเร็วสูงสุด $v_{\\max} = \\omega A = 4.16 \\times 0.0740 = 0.308\\text{ m/s}$\n(d) แรงสูงสุด $F_{\\max} = k A = 25.96 \\times 0.0740 = 1.92\\text{ N}$\n(e) ที่ $t = 1.00\\text{ s}$ (เฟส $= 4.16(1) - 2.42 = 1.74\\text{ rad}$):\n- ตำแหน่ง $x(1) = 7.40 \\cos(1.74) = -1.25\\text{ cm} = -0.0125\\text{ m}$\n- อัตราเร็ว $v(1) = -4.16(7.40)\\sin(1.74) = -30.34\\text{ cm/s} = -0.303\\text{ m/s}$\n- ความเร่ง $a(1) = -(4.16)^2 (-0.0125) = +0.217\\text{ m/s}^2$",
        "solution_en": "**Detailed Solution for Problem 1.5:**\nFrom $x(t) = (7.40\\text{ cm}) \\cos(4.16 t - 2.42)$ with $m = 1.50\\text{ kg}$:\n(a) Period $T = \\frac{2\\pi}{4.16} = 1.511\\text{ s}$\n(b) Spring constant $k = m\\omega^2 = 25.96\\text{ N/m}$\n(c) Max speed $v_{\\max} = 0.308\\text{ m/s}$\n(d) Max force $F_{\\max} = 1.92\\text{ N}$\n(e) At $t = 1.00\\text{ s}$: $x(1) = -1.25\\text{ cm}$, $v(1) = -0.303\\text{ m/s}$, $a(1) = +0.217\\text{ m/s}^2$",
        "hints": [
          "จากความสัมพันธ์ความเร่งกับการกระจัด $|a| = \\omega^2 |x| \\implies \\omega = \\sqrt{\\frac{|a|}{|x|}} = \\sqrt{\\frac{8.00}{2.00}} = 2.00\\text{ rad/s}$",
          "คำนวณความถี่จาก $f = \\frac{\\omega}{2\\pi} = \\frac{2.00}{2\\pi} \\approx 0.318\\text{ Hz}$"
        ]
      },
      {
        "id": "p1_6",
        "num_in_lec": 6,
        "global_id": 6,
        "topic_th": "หัวข้อ 1.6",
        "topic_en": "Topic 1.6",
        "question_th": "ส้อมเสียงอันหนึ่งสั่นด้วยความถี่ $f = 440\\text{ Hz}$ โดยมีแอมพลิจูด $A = 3.0 \\times 10^{-3}\\text{ m}$ และมีมุมเฟสเริ่มต้นเป็น $0$(a) จงเขียนสมการการกระจัด $x(t)$(b) จงหาอัตราเร็วสูงสุดและความเร่งสูงสุดของการสั่น",
        "question_en": "ส้อมเสียงอันหนึ่งสั่นด้วยfrequency $f = 440\\text{ Hz}$ โดยมีamplitude $A = 3.0 \\times 10^{-3}\\text{ m}$ and มีมุมเฟสเริ่มต้นเป็น $0$(a) Write the equation การกระจัด $x(t)$(b) Find maximum speedand maximum accelerationของการสั่น",
        "formulas": [
          "x(t) = A \\cos(\\omega t + \\phi)",
          "v(t) = -A\\omega \\sin(\\omega t + \\phi)",
          "\\tan\\phi = -\\frac{v_0}{\\omega x_0}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.6:**\nส้อมเสียง $f = 440\\text{ Hz}, A = 3.0 \\times 10^{-3}\\text{ m}, \\phi = 0$:\n(a) ความถี่เชิงมุม $\\omega = 2\\pi f = 880\\pi\\text{ rad/s}$\nสมการการกระจัด $$x(t) = (3.0 \\times 10^{-3}\\text{ m}) \\cos(880\\pi t)$$\n(b) อัตราเร็วสูงสุด $v_{\\max} = \\omega A = 880\\pi \\times 3.0 \\times 10^{-3} = 8.29\\text{ m/s}$\nความเร่งสูงสุด $a_{\\max} = \\omega^2 A = (880\\pi)^2 \\times 3.0 \\times 10^{-3} = 2.29 \\times 10^4\\text{ m/s}^2$",
        "solution_en": "**Detailed Solution for Problem 1.6:**\nTuning fork $f = 440\\text{ Hz}, A = 3.0 \\times 10^{-3}\\text{ m}, \\phi = 0$:\n(a) Displacement equation $x(t) = (3.0 \\times 10^{-3}\\text{ m}) \\cos(880\\pi t)$\n(b) $v_{\\max} = 2\\pi f A = 8.29\\text{ m/s}$, $a_{\\max} = (2\\pi f)^2 A = 2.29 \\times 10^4\\text{ m/s}^2$",
        "hints": [
          "ใช้เงื่อนไขเริ่มต้น $x(0) = x_0$ และ $v(0) = v_0$ เพื่อหาแอมพลิจูด $A = \\sqrt{x_0^2 + (v_0/\\omega)^2}$",
          "หาค่าคงตัวเฟสจาก $\\tan\\phi = -\\frac{v_0}{\\omega x_0}$"
        ]
      },
      {
        "id": "p1_7",
        "num_in_lec": 7,
        "global_id": 7,
        "topic_th": "หัวข้อ 1.7",
        "topic_en": "Topic 1.7",
        "question_th": "วัตถุหนึ่งแกว่งกวัดโดยตำแหน่งของมันกำหนดโดยสมการ$$x = (10.0\\text{ cm}) \\sin(4.00t)$$เมื่อ $t$ มีหน่วยเป็น $\\text{s}$ จงหา:(a) อัตราเร็วสูงสุด(b) ความเร่งสูงสุด(c) เวลา $t > 0$ ครั้งแรกที่วัตถุอยู่ที่ตำแหน่ง $x = 6.00\\text{ cm}$(d) ความเร็วและความเร่ง ณ เวลานั้น",
        "question_en": "วัตถุหนึ่งแกว่งกวัดโดยตำแหน่งของมันกำหนดโดยสมการ$$x = (10.0\\text{ cm}) \\sin(4.00t)$$where  $t$ is in  $\\text{s}$ Find:(a) maximum speed(b) maximum acceleration(c) เวลา $t > 0$ ครั้งแรกที่วัตถุอยู่ที่ตำแหน่ง $x = 6.00\\text{ cm}$(d) ความเร็วand ความเร่ง ณ เวลานั้น",
        "formulas": [
          "f = \\frac{1}{T}",
          "\\omega = 2\\pi f",
          "v_{\\max} = \\omega A"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.7:**\nจากสมการตำแหน่ง $x = (10.0\\text{ cm}) \\sin(4.00 t)$:\n(a) อัตราเร็วสูงสุด $v_{\\max} = \\omega A = 4.00 \\times 10.0 = 40.0\\text{ cm/s}$\n(b) ความเร่งสูงสุด $a_{\\max} = \\omega^2 A = (4.00)^2 \\times 10.0 = 160\\text{ cm/s}^2$\n(c) หาเวลา $t > 0$ ครั้งแรกที่ $x = 6.00\\text{ cm}$:\n$$10.0 \\sin(4.00 t) = 6.00 \\implies \\sin(4.00 t) = 0.600$$\n$$4.00 t = \\arcsin(0.600) = 0.6435\\text{ rad} \\implies t = 0.161\\text{ s}$$\n(d) ณ เวลานั้น:\n- ความเร็ว $v = \\frac{dx}{dt} = 40.0 \\cos(4.00 t) = 40.0 \\cos(0.6435) = 40.0 \\times 0.800 = 32.0\\text{ cm/s}$\n- ความเร่ง $a = -\\omega^2 x = -16.0 \\times 6.00 = -96.0\\text{ cm/s}^2$",
        "solution_en": "**Detailed Solution for Problem 1.7:**\nFrom $x = (10.0\\text{ cm}) \\sin(4.00 t)$:\n(a) $v_{\\max} = \\omega A = 40.0\\text{ cm/s}$\n(b) $a_{\\max} = \\omega^2 A = 160\\text{ cm/s}^2$\n(c) $10.0 \\sin(4.00 t) = 6.00 \\implies 4.00 t = \\arcsin(0.600) = 0.6435\\text{ rad} \\implies t = 0.161\\text{ s}$\n(d) At that instant: $v = 32.0\\text{ cm/s}$, $a = -96.0\\text{ cm/s}^2$",
        "hints": [
          "ความถี่ $f = \\frac{1}{T} = \\frac{1}{0.500} = 2.00\\text{ Hz} \\implies \\omega = 4\\pi\\text{ rad/s}$",
          "หาแอมพลิจูดจาก $A = \\frac{v_{\\max}}{\\omega} = \\frac{15.0}{4\\pi} \\approx 1.19\\text{ cm}$"
        ]
      },
      {
        "id": "p1_8",
        "num_in_lec": 8,
        "global_id": 8,
        "topic_th": "หัวข้อ 1.8",
        "topic_en": "Topic 1.8",
        "question_th": "สมมติว่าลูกตุ้มอย่างง่ายประกอบด้วยมวล $60.0\\text{ g}$ ห้อยอยู่ที่ปลายเชือกที่มีมวลน้อยมาก หากมุม $\\theta$ ระหว่างเชือกกับแนวดิ่งกำหนดโดยสมการ $\\theta = (0.0800\\text{ rad}) \\cos((4.43\\text{ rad/s})t + \\phi)$ ความยาวของเชือกลูกตุ้มจะมีค่าเท่าใด?",
        "question_en": "สมมติว่าลูกตุ้มอย่างง่ายประกอบด้วยมวล $60.0\\text{ g}$ ห้อยอยู่ที่ปลายเชือกที่มีมวลน้อยมาก หากมุม $\\theta$ ระหว่างเชือกกับแนวดิ่งกำหนดโดยสมการ $\\theta = (0.0800\\text{ rad}) \\cos((4.43\\text{ rad/s})t + \\phi)$ ความยาวของเชือกลูกตุ้มจะมีค่าเท่าใด?",
        "formulas": [
          "\\omega = \\frac{2\\pi}{T}",
          "x(t) = A \\cos(\\omega t)",
          "v(t) = -A\\omega \\sin(\\omega t)"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.8:**\nลูกตุ้มอย่างง่ายมวล $60.0\\text{ g}$, มุม $\\theta(t) = (0.0800\\text{ rad}) \\cos((4.43\\text{ rad/s})t + \\phi)$\nจากสมการความถี่เชิงมุมของลูกตุ้มอย่างง่าย (มุมขนาดเล็ก):\n$$\\omega = \\sqrt{\\frac{g}{L}} \\implies \\omega^2 = \\frac{g}{L} \\implies L = \\frac{g}{\\omega^2}$$\nแทนค่า $g = 9.80\\text{ m/s}^2$ และ $\\omega = 4.43\\text{ rad/s}$:\n$$L = \\frac{9.80}{(4.43)^2} = \\frac{9.80}{19.625} = 0.499\\text{ m} \\approx 0.500\\text{ m} = 50.0\\text{ cm}$$",
        "solution_en": "**Detailed Solution for Problem 1.8:**\nFrom $\\theta(t) = (0.0800\\text{ rad}) \\cos(4.43 t + \\phi)$, angular frequency is $\\omega = 4.43\\text{ rad/s}$.\nFor a simple pendulum: $\\omega = \\sqrt{\\frac{g}{L}} \\implies L = \\frac{g}{\\omega^2} = \\frac{9.80}{(4.43)^2} = 0.500\\text{ m}$.",
        "hints": [
          "ความถี่เชิงมุม $\\omega = \\frac{2\\pi}{1.20} = \\frac{5\\pi}{3}\\text{ rad/s}$",
          "คำนวณตำแหน่งและความเร็วที่ $t = 0.300\\text{ s}$ โดยแทนค่าในฟังก์ชัน trigonometric"
        ]
      },
      {
        "id": "p1_9",
        "num_in_lec": 9,
        "global_id": 9,
        "topic_th": "หัวข้อ 1.9",
        "topic_en": "Topic 1.9",
        "question_th": "มุมการแกว่งของลูกตุ้มกำหนดโดยสมการ $\\theta = \\theta_m \\cos((4.44\\text{ rad/s})t + \\phi)$ หากที่เวลา $t = 0$ ลูกตุ้มมีมุม $\\theta = 0.0400\\text{ rad}$ และความเร็วเชิงมุม $d\\theta/dt = -0.200\\text{ rad/s}$ จงหา:(a) ค่าคงตัวเฟส $\\phi$(b) มุมการแกว่งสูงสุด $\\theta_m$",
        "question_en": "มุมการแกว่งของลูกตุ้มกำหนดโดยสมการ $\\theta = \\theta_m \\cos((4.44\\text{ rad/s})t + \\phi)$ หากat time  $t = 0$ ลูกตุ้มมีมุม $\\theta = 0.0400\\text{ rad}$ and ความเร็วเชิงมุม $d\\theta/dt = -0.200\\text{ rad/s}$ Find:(a) ค่าคงตัวเฟส $\\phi$(b) มุมการแกว่งสูงสุด $\\theta_m$",
        "formulas": [
          "T = \\frac{2\\pi}{\\omega}",
          "v(x) = \\pm \\omega \\sqrt{A^2 - x^2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.9:**\nมุม $\\theta(t) = \\theta_m \\cos(4.44 t + \\phi)$ ที่ $t = 0$ มี $\\theta(0) = 0.0400\\text{ rad}$ และ $\\dot{\\theta}(0) = -0.200\\text{ rad/s}$:\n- $\\theta(0) = \\theta_m \\cos\\phi = 0.0400$\n- $\\dot{\\theta}(0) = -\\omega \\theta_m \\sin\\phi = -4.44 \\theta_m \\sin\\phi = -0.200 \\implies \\theta_m \\sin\\phi = \\frac{0.200}{4.44} = 0.04505$\n\n(a) ค่าคงตัวเฟส $\\tan\\phi = \\frac{\\theta_m \\sin\\phi}{\\theta_m \\cos\\phi} = \\frac{0.04505}{0.0400} = 1.126 \\implies \\phi = 0.844\\text{ rad} = 48.4^\\circ$\n(b) มุมการแกว่งสูงสุด $\\theta_m = \\sqrt{(0.0400)^2 + (0.04505)^2} = 0.0602\\text{ rad}$",
        "solution_en": "**Detailed Solution for Problem 1.9:**\nFrom $\\theta(0) = \\theta_m \\cos\\phi = 0.0400$ and $\\dot{\\theta}(0) = -4.44 \\theta_m \\sin\\phi = -0.200$:\n(a) $\\tan\\phi = \\frac{0.04505}{0.0400} = 1.126 \\implies \\phi = 0.844\\text{ rad} = 48.4^\\circ$\n(b) $\\theta_m = \\sqrt{0.0400^2 + 0.04505^2} = 0.0602\\text{ rad}$",
        "hints": [
          "หาความถี่เชิงมุม $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4.00} = 0.500\\pi\\text{ rad/s}$",
          "แทน $x = 3.00\\text{ cm}$ และ $A = 5.00\\text{ cm}$ ในสมการ $v(x) = \\omega \\sqrt{A^2 - x^2}$"
        ]
      },
      {
        "id": "p1_10",
        "num_in_lec": 10,
        "global_id": 10,
        "topic_th": "หัวข้อ 1.10",
        "topic_en": "Topic 1.10",
        "question_th": "มวล $0.50\\text{ kg}$ แขวนอยู่กับสปริงเบาและแกว่งกวัดแบบฮาร์มอนิกอย่างง่าย โดยตำแหน่ง $x$ กำหนดโดยสมการ $x = A \\cos \\omega t$ พบว่ามวลนี้แกว่งกวัดครบ $20$ รอบ ในเวลา $80\\text{ s}$ จงหา:(a) คาบของการแกว่งกวัด(b) ความถี่เชิงมุมของการแกว่งกวัด(c) ค่าคงตัวสปริง $k$",
        "question_en": "มวล $0.50\\text{ kg}$ แขวนอยู่กับสปริงเบาand แกว่งกวัดแบบฮาร์มอนิกอย่างง่าย โดยตำแหน่ง $x$ กำหนดโดยสมการ $x = A \\cos \\omega t$ พบว่ามวลนี้แกว่งกวัดครบ $20$ รอบ ในเวลา $80\\text{ s}$ Find:(a) periodของการแกว่งกวัด(b) frequencyเชิงมุมของการแกว่งกวัด(c) spring constant $k$",
        "formulas": [
          "x(t) = A \\sin(\\omega t)",
          "\\Delta t = \\frac{\\arcsin(x_1/A)}{\\omega}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.10:**\nมวล $0.50\\text{ kg}$ แกว่งกวัดครบ $20$ รอบ ในเวลา $80\\text{ s}$:\n(a) คาบการแกว่งกวัด $T = \\frac{\\text{เวลารวม}}{\\text{จำนวนรอบ}} = \\frac{80}{20} = 4.00\\text{ s}$\n(b) ความถี่เชิงมุม $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4.00} = 1.57\\text{ rad/s}$\n(c) ค่าคงตัวสปริง $k = m\\omega^2 = 0.50 \\times (1.571)^2 = 1.23\\text{ N/m}$",
        "solution_en": "**Detailed Solution for Problem 1.10:**\nCompleting $20$ cycles in $80\\text{ s}$ with mass $m = 0.50\\text{ kg}$:\n(a) Period $T = \\frac{80}{20} = 4.00\\text{ s}$\n(b) Angular frequency $\\omega = \\frac{2\\pi}{4.00} = 1.57\\text{ rad/s}$\n(c) Spring constant $k = m\\omega^2 = 0.50(1.571)^2 = 1.23\\text{ N/m}$",
        "hints": [
          "ให้ $x(t) = A \\sin(\\omega t)$ หาเวลา $t_1$ ที่วัตถุเคลื่อนที่จาก $x=0$ ไปยัง $x = A/2$",
          "ใช้ความสัมพันธ์ $\\sin(\\omega t_1) = 1/2 \\implies \\omega t_1 = \\pi/6 \\implies t_1 = \\frac{T}{12}$"
        ]
      },
      {
        "id": "p1_11",
        "num_in_lec": 11,
        "global_id": 11,
        "topic_th": "หัวข้อ 1.11",
        "topic_en": "Topic 1.11",
        "question_th": "การกระจัดของตัวแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายถูกกำหนดโดยสมการ $x = a \\sin(\\omega t + \\phi)$ หากการแกว่งกวัดเริ่มต้นที่เวลา $t = 0$ จากตำแหน่ง $x_0$ ด้วยความเร็ว $v_0$ จงหาค่าของ $\\tan\\phi$ และแอมพลิจูด $a$ ในเทอมของตัวแปรเริ่มต้นเหล่านี้",
        "question_en": "การกระจัดของตัวแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายถูกกำหนดโดยสมการ $x = a \\sin(\\omega t + \\phi)$ หากการแกว่งกวัดเริ่มต้นat time  $t = 0$ จากตำแหน่ง $x_0$ ด้วยความเร็ว $v_0$ Find ค่าของ $\\tan\\phi$ and amplitude $a$ ในเทอมของตัวแปรเริ่มต้นเหล่านี้",
        "formulas": [
          "a_{\\max} = \\omega^2 A",
          "v_{\\max} = \\omega A",
          "T = \\frac{2\\pi}{\\omega}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.11:**\nจากสมการ $x(t) = a \\sin(\\omega t + \\phi)$ ที่ $t = 0$ เริ่มจาก $x_0$ ด้วยความเร็ว $v_0$:\n- $x(0) = a \\sin\\phi = x_0$\n- $v(0) = a \\omega \\cos\\phi = v_0 \\implies a \\cos\\phi = \\frac{v_0}{\\omega}$\n\nหารสองสมการ: $$\\tan\\phi = \\frac{a \\sin\\phi}{a \\cos\\phi} = \\frac{x_0}{v_0/\\omega} = \\frac{\\omega x_0}{v_0}$$\nยกกำลังสองแล้วบวกกัน: $$a^2 (\\sin^2\\phi + \\cos^2\\phi) = x_0^2 + \\left(\\frac{v_0}{\\omega}\\right)^2 \\implies a = \\sqrt{x_0^2 + \\left(\\frac{v_0}{\\omega}\\right)^2}$$",
        "solution_en": "**Detailed Solution for Problem 1.11:**\nFrom $x(t) = a \\sin(\\omega t + \\phi)$ at $t = 0$ with $x(0) = x_0$ and $v(0) = v_0$:\n$$\\tan\\phi = \\frac{\\omega x_0}{v_0}, \\quad a = \\sqrt{x_0^2 + \\left(\\frac{v_0}{\\omega}\\right)^2}$$",
        "hints": [
          "หาความถี่เชิงมุมจากอัตราส่วน $\\omega = \\frac{a_{\\max}}{v_{\\max}} = \\frac{16.0}{2.00} = 8.00\\text{ rad/s}$",
          "หาคาบ $T = \\frac{2\\pi}{8.00} \\approx 0.785\\text{ s}$ และแอมพลิจูด $A = \\frac{2.00}{8.00} = 0.250\\text{ m}$"
        ]
      },
      {
        "id": "p1_12",
        "num_in_lec": 12,
        "global_id": 12,
        "topic_th": "หัวข้อ 1.12",
        "topic_en": "Topic 1.12",
        "question_th": "วัตถุที่ติดอยู่กับสปริงแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายดังแสดงในกราฟการกระจัดเทียบกับเวลา (มีระยะการกระจัดสูงสุด $2.00\\text{ cm}$ และใช้เวลา $4.00\\text{ s}$ ในการเคลื่อนที่ครบหนึ่งรอบ) จากการเคลื่อนที่นี้ จงหา:(a) แอมพลิจูด(b) คาบ(c) ความถี่เชิงมุม(d) อัตราเร็วสูงสุด(e) ความเร่งสูงสุด(f) สมการตำแหน่ง $x$ ที่เป็นฟังก์ชันของเวลา",
        "question_en": "วัตถุที่ติดอยู่กับสปริงแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายดังแสดงในกราฟการกระจัดเทียบกับเวลา (มีระยะการกระจัดสูงสุด $2.00\\text{ cm}$ and ใช้เวลา $4.00\\text{ s}$ ในการเคลื่อนที่ครบหนึ่งรอบ) จากการเคลื่อนที่นี้ Find:(a) amplitude(b) period(c) frequencyเชิงมุม(d) maximum speed(e) maximum acceleration(f) สมการตำแหน่ง $x$ ที่เป็นฟังก์ชันของเวลา",
        "formulas": [
          "v(x) = \\omega \\sqrt{A^2 - x^2}",
          "a(x) = -\\omega^2 x"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.12:**\nจากกราฟการกระจัดเทียบกับเวลา (กระจัดสูงสุด $2.00\\text{ cm}$, ครบรอบใน $4.00\\text{ s}$):\n(a) แอมพลิจูด $A = 2.00\\text{ cm}$\n(b) คาบ $T = 4.00\\text{ s}$\n(c) ความถี่เชิงมุม $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4.00} = 1.57\\text{ rad/s}$\n(d) อัตราเร็วสูงสุด $v_{\\max} = \\omega A = 1.571 \\times 2.00 = 3.14\\text{ cm/s}$\n(e) ความเร่งสูงสุด $a_{\\max} = \\omega^2 A = (1.571)^2 \\times 2.00 = 4.93\\text{ cm/s}^2$\n(f) สมการตำแหน่ง $x(t) = (2.00\\text{ cm}) \\cos(1.57 t)$",
        "solution_en": "**Detailed Solution for Problem 1.12:**\nFrom displacement graph (max displacement $2.00\\text{ cm}$, period $4.00\\text{ s}$):\n(a) $A = 2.00\\text{ cm}$\n(b) $T = 4.00\\text{ s}$\n(c) $\\omega = 1.57\\text{ rad/s}$\n(d) $v_{\\max} = 3.14\\text{ cm/s}$\n(e) $a_{\\max} = 4.93\\text{ cm/s}^2$\n(f) $x(t) = (2.00\\text{ cm}) \\cos(1.57 t)$",
        "hints": [
          "คำนวณความเร็วที่ตำแหน่ง $x = 0.60 A$ จาก $v = \\omega \\sqrt{A^2 - (0.60A)^2} = 0.80 \\omega A = 0.80 v_{\\max}$",
          "คำนวณความเร่งที่ตำแหน่ง $x = 0.60 A$ จาก $|a| = 0.60 \\omega^2 A = 0.60 a_{\\max}$"
        ]
      },
      {
        "id": "p1_13",
        "num_in_lec": 13,
        "global_id": 13,
        "topic_th": "หัวข้อ 1.13",
        "topic_en": "Topic 1.13",
        "question_th": "ล้อสมดุล (balance wheel) ของนาฬิกาข้อมือสั่นด้วยแอมพลิจูดเชิงมุม $\\theta_m$ ความถี่เชิงมุม $\\omega$ และมีมุมเฟสเริ่มต้น $\\phi = 0$ (นั่นคือ $\\theta = \\theta_m \\cos \\omega t$) จงหาสมการของความเร็วเชิงมุม $d\\theta/dt$ และความเร่งเชิงมุม $d^2\\theta/dt^2$ ที่เป็นฟังก์ชันของเวลา",
        "question_en": "ล้อสมดุล (balance wheel) ของนาฬิกาข้อมือสั่นด้วยamplitudeเชิงมุม $\\theta_m$ frequencyเชิงมุม $\\omega$ and มีมุมเฟสเริ่มต้น $\\phi = 0$ (นั่นคือ $\\theta = \\theta_m \\cos \\omega t$) Find สมการของความเร็วเชิงมุม $d\\theta/dt$ and ความเร่งเชิงมุม $d^2\\theta/dt^2$ ที่เป็นฟังก์ชันของเวลา",
        "formulas": [
          "x(t) = A \\cos(\\omega t + \\phi)",
          "a_{\\max} = \\omega^2 A"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 1.13:**\nสมการตำแหน่งมุมของล้อสมดุล: $$\\theta(t) = \\theta_m \\cos \\omega t$$\nหาอนุพันธ์อันดับหนึ่งเทียบกับเวลาเพื่อหาความเร็วเชิงมุม:\n$$\\frac{d\\theta}{dt} = -\\omega \\theta_m \\sin \\omega t$$\nหาอนุพันธ์อันดับสองเทียบกับเวลาเพื่อหาความเร่งเชิงมุม:\n$$\\frac{d^2\\theta}{dt^2} = -\\omega^2 \\theta_m \\cos \\omega t = -\\omega^2 \\theta(t)$$",
        "solution_en": "**Detailed Solution for Problem 1.13:**\nFrom angular position $\\theta(t) = \\theta_m \\cos \\omega t$:\nAngular velocity: $$\\frac{d\\theta}{dt} = -\\omega \\theta_m \\sin \\omega t$$\nAngular acceleration: $$\\frac{d^2\\theta}{dt^2} = -\\omega^2 \\theta_m \\cos \\omega t$$",
        "hints": [
          "อ่านแอมพลิจูด $A$ และคาบ $T$ จากสมการหรือกราฟที่กำหนด",
          "คำนวณความเร่งสูงสุด $a_{\\max} = \\left(\\frac{2\\pi}{T}\\right)^2 A$"
        ]
      }
    ]
  },
  {
    "lecture": 2,
    "title_th": "Lecture 2: การซ้อนทับของการแกว่งกวัด (Superposition of Oscillations)",
    "title_en": "Lecture 2: Superposition of Oscillations",
    "problems": [
      {
        "id": "p2_1",
        "num_in_lec": 1,
        "global_id": 14,
        "topic_th": "หัวข้อ 2.1",
        "topic_en": "Topic 2.1",
        "question_th": "พิกัดการกระจัดของอนุภาคมวล $m$ ในสองมิติกำหนดโดยสมการ $x = a \\sin \\omega t$ และ $y = b \\cos \\omega t$ จงหาสมการที่แสดงความสัมพันธ์ระหว่าง $x$ และ $y$ โดยกำจัดตัวแปรเวลา $t$ ออกไป เพื่อแสดงให้เห็นว่าเส้นทางการเคลื่อนที่ของอนุภาคนี้เป็นรูปวงรี",
        "question_en": "พิกัดการกระจัดของอนุภาคมวล $m$ ในสองมิติกำหนดโดยสมการ $x = a \\sin \\omega t$ and  $y = b \\cos \\omega t$ Find สมการที่แสดงความสัมพันธ์ระหว่าง $x$ and  $y$ โดยกำจัดตัวแปรเวลา $t$ ออกไป เพื่อแสดงให้เห็นว่าเส้นทางการเคลื่อนที่ของอนุภาคนี้เป็นรูปวงรี",
        "formulas": [
          "x_R(t) = x_1(t) + x_2(t)",
          "A_R = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos(\\phi_2 - \\phi_1)}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 2.1:**\nจาก $x = a \\sin \\omega t \\implies \\sin \\omega t = \\frac{x}{a}$ และ $y = b \\cos \\omega t \\implies \\cos \\omega t = \\frac{y}{b}$\nใช้เอกลักษณ์ตรีโกณมิติ $\\sin^2 \\omega t + \\cos^2 \\omega t = 1$:\n$$\\left(\\frac{x}{a}\\right)^2 + \\left(\\frac{y}{b}\\right)^2 = 1$$\nแสดงว่าวิถีการเคลื่อนที่ของอนุภาคเป็น **รูปวงรี (Ellipse)**",
        "solution_en": "**Detailed Solution for Problem 2.1:**\nFrom $\\sin \\omega t = \\frac{x}{a}$ and $\\cos \\omega t = \\frac{y}{b}$:\n$$\\left(\\frac{x}{a}\\right)^2 + \\left(\\frac{y}{b}\\right)^2 = 1$$\nThis proves that the trajectory is an **ellipse**.",
        "hints": [
          "ผลรวมการกระจัดในทิศทางเดียวกัน $x_R = A_1\\cos(\\omega t + \\phi_1) + A_2\\cos(\\omega t + \\phi_2)$",
          "แอมพลิจูดรวมหาได้จากเวกเตอร์เฟสเซอร์ $A_R = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos(\\Delta\\phi)}$"
        ]
      },
      {
        "id": "p2_2",
        "num_in_lec": 2,
        "global_id": 15,
        "topic_th": "หัวข้อ 2.2",
        "topic_en": "Topic 2.2",
        "question_th": "การแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายสองขบวนที่มีความถี่เท่ากัน สั่นในทิศทางตั้งฉากกันตามแนวแกน $x$ และ $y$ โดยสมการการกระจัดคือ $x = a \\sin \\omega t$ และ $y = a \\sin(\\omega t + \\delta)$ จงหาค่าของความต่างเฟส $\\delta$ ที่ทำให้เส้นทางการเคลื่อนที่ลัพธ์ของอนุภาคเป็นเส้นตรง",
        "question_en": "การแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายสองขบวนที่มีfrequencyเท่ากัน สั่นในทิศทางตั้งฉากกันตามแนวแกน $x$ and  $y$ โดยสมการการกระจัดคือ $x = a \\sin \\omega t$ and  $y = a \\sin(\\omega t + \\delta)$ Find ค่าของความต่างเฟส $\\delta$ ที่ทำให้เส้นทางการเคลื่อนที่ลัพธ์ของอนุภาคเป็นเส้นตรง",
        "formulas": [
          "x_R(t) = A_R \\cos(\\omega t + \\phi_R)",
          "\\tan\\phi_R = \\frac{A_1\\sin\\phi_1 + A_2\\sin\\phi_2}{A_1\\cos\\phi_1 + A_2\\cos\\phi_2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 2.2:**\nจาก $x = a \\sin \\omega t$ และ $y = a \\sin(\\omega t + \\delta) = a (\\sin \\omega t \\cos \\delta + \\cos \\omega t \\sin \\delta) = x \\cos \\delta + a \\cos \\omega t \\sin \\delta$\nเพื่อให้วิถีการเคลื่อนที่เป็นเส้นตรง $y = mx$ สำหรับทุกเวลา $t$ พจน์ที่สองต้องเป็นศูนย์ $\\implies \\sin \\delta = 0$\nดังนั้น ความต่างเฟส $\\delta = 0$ (เส้นตรง $y = x$) หรือ $\\delta = \\pi$ (เส้นตรง $y = -x$)",
        "solution_en": "**Detailed Solution for Problem 2.2:**\nFor $y = mx$ to hold for all $t$, we require $\\sin \\delta = 0 \\implies \\delta = 0$ or $\\delta = \\pi$.",
        "hints": [
          "แตกเฟสเซอร์เข้าสู่แกนจริงและแกนจินตภาพเพื่อหาระยะรวมในแนวแกน $X$ และ $Y$",
          "มุมเฟสรวมหาได้จาก $\\tan\\phi_R = \\frac{\\sum A_i \\sin\\phi_i}{\\sum A_i \\cos\\phi_i}$"
        ]
      },
      {
        "id": "p2_3",
        "num_in_lec": 3,
        "global_id": 16,
        "topic_th": "หัวข้อ 2.3",
        "topic_en": "Topic 2.3",
        "question_th": "อนุภาคสองอนุภาคแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายตามแนวเส้นตรงเดียวกันซึ่งมีความยาว $4A$ อนุภาคทั้งสองมีคาบการแกว่งกวัด $1.5\\text{ s}$ เท่ากัน แต่มีเฟสต่างกัน $\\pi/6\\text{ rad}$ จงหาว่า:(a) อนุภาคทั้งสองจะอยู่ห่างกันเท่าใด (ในเทอมของ $A$) ที่เวลา $0.50\\text{ s}$ หลังจากที่อนุภาคตัวที่เคลื่อนที่ตามหลังเริ่มเคลื่อนที่ออกจากปลายด้านหนึ่งของเส้นทาง?(b) ในขณะนั้นอนุภาคทั้งสองกำลังเคลื่อนที่ไปในทิศทางเดียวกัน, เคลื่อนที่เข้าหากัน, หรือเคลื่อนที่ออกจากกัน?",
        "question_en": "อนุภาคสองอนุภาคแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายตามแนวเส้นตรงเดียวกันซึ่งมีความยาว $4A$ อนุภาคทั้งสองมีperiodการแกว่งกวัด $1.5\\text{ s}$ เท่ากัน แต่มีเฟสต่างกัน $\\pi/6\\text{ rad}$ Find ว่า:(a) อนุภาคทั้งสองจะอยู่ห่างกันเท่าใด (ในเทอมของ $A$) at time  $0.50\\text{ s}$ หลังจากที่อนุภาคตัวที่เคลื่อนที่ตามหลังเริ่มเคลื่อนที่ออกจากปลายด้านหนึ่งของเส้นทาง?(b) ในขณะนั้นอนุภาคทั้งสองกำลังเคลื่อนที่ไปในทิศทางเดียวกัน, เคลื่อนที่เข้าหากัน, หรือเคลื่อนที่ออกจากกัน?",
        "formulas": [
          "\\Delta \\phi = |\\phi_2 - \\phi_1|",
          "A_{\\max} = A_1 + A_2",
          "A_{\\min} = |A_1 - A_2|"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 2.3:**\nความยาวเส้นทาง $4A \\implies$ แอมพลิจูดคือ $A$. คาบ $T = 1.5\\text{ s} \\implies \\omega = \\frac{2\\pi}{1.5} = \\frac{4\\pi}{3}\\text{ rad/s}$\n(a) ที่ $t = 0.50\\text{ s}$: $\\omega t = \\frac{2\\pi}{3}\\text{ rad}$.\n$x_1 = A \\cos(2\\pi/3) = -0.50 A$, $x_2 = A \\cos(2\\pi/3 - \\pi/6) = A \\cos(\\pi/2) = 0$.\nระยะห่างระหว่างอนุภาค $\\Delta x = |x_1 - x_2| = 0.50 A$.\n(b) ความเร็ว $v_1 < 0$ และ $v_2 < 0$ ทั้งคู่เป็นลบ แสดงว่ากำลังเคลื่อนที่ไปใน **ทิศทางเดียวกัน**",
        "solution_en": "**Detailed Solution for Problem 2.3:**\n(a) Separation $\\Delta x = |x_1 - x_2| = 0.50 A$.\n(b) Both velocities are negative, so both particles are moving in the **same direction**.",
        "hints": [
          "แทรกแซงแบบเสริมกันอย่างสมบูรณ์เมื่อ $\\Delta\\phi = 0, 2\\pi, 4\\pi, ...$",
          "แทรกแซงแบบหักล้างกันอย่างสมบูรณ์เมื่อ $\\Delta\\phi = \\pi, 3\\pi, 5\\pi, ...$"
        ]
      },
      {
        "id": "p2_4",
        "num_in_lec": 4,
        "global_id": 17,
        "topic_th": "หัวข้อ 2.4",
        "topic_en": "Topic 2.4",
        "question_th": "อนุภาคสองอนุภาคเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายด้วยแอมพลิจูดและความถี่เท่ากันตามแนวเส้นตรงที่ขนานกันและอยู่ใกล้กัน อนุภาคทั้งสองจะเคลื่อนที่สวนทางกันในทิศทางตรงกันข้ามทุกครั้งที่การกระจัดของพวกมันมีค่าเท่ากับครึ่งหนึ่งของแอมพลิจูดพอดี จงหาค่าความต่างเฟสระหว่างอนุภาคทั้งสอง",
        "question_en": "อนุภาคสองอนุภาคเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายด้วยamplitudeand frequencyเท่ากันตามแนวเส้นตรงที่ขนานกันand อยู่ใกล้กัน อนุภาคทั้งสองจะเคลื่อนที่สวนทางกันในทิศทางตรงกันข้ามทุกครั้งที่การกระจัดของพวกมันมีค่าเท่ากับครึ่งหนึ่งของamplitudeพอดี Find ค่าความต่างเฟสระหว่างอนุภาคทั้งสอง",
        "formulas": [
          "x(t) = A_x \\cos(\\omega_x t + \\phi_x)",
          "y(t) = A_y \\cos(\\omega_y t + \\phi_y)",
          "\\frac{f_x}{f_y} = \\frac{n_y}{n_x}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 2.4:**\nอนุภาคเคลื่อนที่สวนทางกันเมื่อ $x_1 = x_2 = A/2$:\n$\\cos(\\omega t) = 1/2 \\implies \\omega t = \\pi/3$.\n$\\cos(\\pi/3 + \\delta) = 1/2 \\implies \\delta = \\frac{2\\pi}{3}\\text{ rad} = 120^\\circ$.",
        "solution_en": "**Detailed Solution for Problem 2.4:**\nPassing condition $x = A/2 \\implies \\delta = \\frac{2\\pi}{3}\\text{ rad} = 120^\\circ$.",
        "hints": [
          "รูปภาพลิสซาจูส์เกิดจากการรวม SHM สองทิศทางที่ตั้งฉากกัน",
          "อัตราส่วนความถี่ $f_x/f_y$ เท่ากับอัตราส่วนจำนวนจุดสัมผัสขอบในแนวตั้งต่อแนวนอน"
        ]
      },
      {
        "id": "p2_5",
        "num_in_lec": 5,
        "global_id": 18,
        "topic_th": "หัวข้อ 2.5",
        "topic_en": "Topic 2.5",
        "question_th": "สำหรับการซ้อนทับแบบ 1 มิติของการสั่นสองขบวน $x_1 = a_1 \\sin \\omega t$ และ $x_2 = a_2 \\sin(\\omega t + \\delta)$ จงหาแอมพลิจูดลัพธ์ $R$ ของระบบ",
        "question_en": "สำหรับการซ้อนทับแบบ 1 มิติของการสั่นสองขบวน $x_1 = a_1 \\sin \\omega t$ and  $x_2 = a_2 \\sin(\\omega t + \\delta)$ Find amplitudeลัพธ์ $R$ ของระบบ",
        "formulas": [
          "\\frac{x^2}{A_x^2} + \\frac{y^2}{A_y^2} - \\frac{2xy}{A_x A_y}\\cos\\delta = \\sin^2\\delta"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 2.5:**\nจาก $x_1 = a_1 \\sin \\omega t$ และ $x_2 = a_2 \\sin(\\omega t + \\delta)$:\nแอมพลิจูดลัพธ์ $$R = \\sqrt{a_1^2 + a_2^2 + 2 a_1 a_2 \\cos \\delta}$$",
        "solution_en": "**Detailed Solution for Problem 2.5:**\nResultant amplitude $$R = \\sqrt{a_1^2 + a_2^2 + 2 a_1 a_2 \\cos \\delta}$$",
        "hints": [
          "เมื่อความถี่เท่ากัน $\\omega_x = \\omega_y$ วิถีการเคลื่อนจะเป็นรูปวงรีโดยทั่วไป",
          "ถ้า $\\delta = \\pi/2$ สมการจะลดรูปเป็นวงรีมาตรฐาน $\\frac{x^2}{A_x^2} + \\frac{y^2}{A_y^2} = 1$"
        ]
      },
      {
        "id": "p2_6",
        "num_in_lec": 6,
        "global_id": 19,
        "topic_th": "หัวข้อ 2.6",
        "topic_en": "Topic 2.6",
        "question_th": "เกิดการซ้อนทับของการสั่น 1 มิติ สองขบวนที่มีแอมพลิจูด $a$ เท่ากัน แต่มีความถี่ต่างกันเล็กน้อยคือ $\\omega_1$ และ $\\omega_2$ (โดยที่ $\\omega_2 > \\omega_1$) จงเขียนสมการการกระจัดลัพธ์ $x$ ซึ่งแสดงถึงปรากฏการณ์บีตส์ (Beats)",
        "question_en": "เกิดการซ้อนทับของการสั่น 1 มิติ สองขบวนที่มีamplitude $a$ เท่ากัน แต่มีfrequencyต่างกันเล็กน้อยคือ $\\omega_1$ and  $\\omega_2$ (โดยที่ $\\omega_2 > \\omega_1$) Write the equation การกระจัดลัพธ์ $x$ ซึ่งแสดงถึงปรากฏการณ์บีตส์ (Beats)",
        "formulas": [
          "x = A \\sin(\\omega t)",
          "y = A \\sin(\\omega t + \\pi/2) = A \\cos(\\omega t)",
          "x^2 + y^2 = A^2"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 2.6:**\nการซ้อนทับของการสั่น $x_1 = a \\sin \\omega_1 t$ และ $x_2 = a \\sin \\omega_2 t$:\n$$x(t) = 2a \\cos\\left(\\frac{\\omega_2 - \\omega_1}{2} t\\right) \\sin\\left(\\frac{\\omega_1 + \\omega_2}{2} t\\right)$$",
        "solution_en": "**Detailed Solution for Problem 2.6:**\n$$x(t) = 2a \\cos\\left(\\frac{\\omega_2 - \\omega_1}{2} t\\right) \\sin\\left(\\frac{\\omega_1 + \\omega_2}{2} t\\right)$$",
        "hints": [
          "เมื่อ $A_x = A_y = A$ และความต่างเฟส $\\delta = \\pi/2$ ระบบจะเคลื่อนที่เป็นวงกลม",
          "รัศมีของวงกลมเท่ากับแอมพลิจูด $R = A$ อัตราเร็วเชิงเส้นเท่ากับ $v = \\omega A$"
        ]
      },
      {
        "id": "p2_7",
        "num_in_lec": 7,
        "global_id": 20,
        "topic_th": "หัวข้อ 2.7",
        "topic_en": "Topic 2.7",
        "question_th": "จากสมการการเกิดบีตส์ (Beats) ในข้อก่อนหน้า ความถี่เชิงมุมของการมอดูเลต (Modulating angular frequency) ซึ่งกำหนดลักษณะโครงคลื่น (Envelope) ของแอมพลิจูดลัพธ์ มีค่าเท่าใด?",
        "question_en": "จากสมการการเกิดบีตส์ (Beats) ในข้อก่อนหน้า frequencyเชิงมุมของการมอดูเลต (Modulating angular frequency) ซึ่งกำหนดลักษณะโครงคลื่น (Envelope) ของamplitudeลัพธ์ มีค่าเท่าใด?",
        "formulas": [
          "x = A \\cos(\\omega t)",
          "y = A \\cos(2\\omega t + \\delta)"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 2.7:**\nจากสมการบีตส์ พจน์โคร่งคลื่น (Envelope) ของแอมพลิจูดถูกกำหนดโดย $\\cos(\\omega_{\\text{mod}} t)$:\nความถี่เชิงมุมของการมอดูเลต $$\\omega_{\\text{mod}} = \\frac{\\omega_2 - \\omega_1}{2}$$",
        "solution_en": "**Detailed Solution for Problem 2.7:**\nModulating angular frequency $$\\omega_{\\text{mod}} = \\frac{\\omega_2 - \\omega_1}{2}$$",
        "hints": [
          "อัตราส่วนความถี่ $f_y : f_x = 2 : 1$ ทำให้เกิดรูปพาราโบลาหรือรูปเลขแปด (Figure-8)",
          "วิเคราะห์ลักษณะสมมาตรของกราฟตามค่าความต่างเฟส $\\delta$"
        ]
      },
      {
        "id": "p2_8",
        "num_in_lec": 8,
        "global_id": 21,
        "topic_th": "หัวข้อ 2.8",
        "topic_en": "Topic 2.8",
        "question_th": "การซ้อนทับแบบ 2 มิติของการสั่น $x = a_1 \\sin(\\omega t + \\alpha_1)$ และ $y = a_2 \\sin(\\omega t + \\alpha_2)$ หากกำหนดให้มีความต่างเฟส $\\delta = \\alpha_2 - \\alpha_1 = 0$ สมการวิถีการเคลื่อนที่ลัพธ์ของอนุภาคจะอยู่ในรูปใด?",
        "question_en": "การซ้อนทับแบบ 2 มิติของการสั่น $x = a_1 \\sin(\\omega t + \\alpha_1)$ and  $y = a_2 \\sin(\\omega t + \\alpha_2)$ หากกำหนดให้มีความต่างเฟส $\\delta = \\alpha_2 - \\alpha_1 = 0$ สมการวิถีการเคลื่อนที่ลัพธ์ของอนุภาคจะอยู่ในรูปใด?",
        "formulas": [
          "\\omega_{\\text{beat}} = |\\omega_1 - \\omega_2|",
          "f_{\\text{beat}} = |f_1 - f_2|"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 2.8:**\nการซ้อนทับ 2 มิติเมื่อ $\\delta = \\alpha_2 - \\alpha_1 = 0$:\n$\\frac{x}{a_1} = \\frac{y}{a_2} \\implies y = \\left(\\frac{a_2}{a_1}\\right) x$ (เส้นตรงผ่านจุดศูนย์กลางมีความชันเป็นบวก)",
        "solution_en": "**Detailed Solution for Problem 2.8:**\nWhen phase difference $\\delta = 0$: $y = \\left(\\frac{a_2}{a_1}\\right) x$ (Straight line through origin).",
        "hints": [
          "บีตส์ (Beats) เกิดจากการซ้อนทับของคลื่นสองคลื่นที่มีความถี่ใกล้เคียงกัน",
          "ความถี่การสั่นของแอมพลิจูด (ความถี่บีตส์) เท่ากับผลต่างความถี่ $f_{\\text{beat}} = |f_1 - f_2|$"
        ]
      },
      {
        "id": "p2_9",
        "num_in_lec": 9,
        "global_id": 22,
        "topic_th": "หัวข้อ 2.9",
        "topic_en": "Topic 2.9",
        "question_th": "จากการซ้อนทับแบบ 2 มิติในแนวตั้งฉากของข้อก่อนหน้า หากความต่างเฟสเปลี่ยนเป็น $\\delta = \\pi/2$ สมการวิถีการเคลื่อนที่ลัพธ์ของอนุภาคจะเปลี่ยนเป็นรูปแบบใด?",
        "question_en": "จากการซ้อนทับแบบ 2 มิติในแนวตั้งฉากของข้อก่อนหน้า หากความต่างเฟสเปลี่ยนเป็น $\\delta = \\pi/2$ สมการวิถีการเคลื่อนที่ลัพธ์ของอนุภาคจะเปลี่ยนเป็นรูปแบบใด?",
        "formulas": [
          "x(t) = 2A \\cos\\left(\\frac{\\Delta\\omega}{2} t\\right) \\cos(\\bar{\\omega} t)"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 2.9:**\nเมื่อ $\\delta = \\frac{\\pi}{2}$:\n$$\\left(\\frac{x}{a_1}\\right)^2 + \\left(\\frac{y}{a_2}\\right)^2 = 1$$\nสมการวิถีเป็น **รูปวงรี (Ellipse)** วางตามแนวแกน $x$ และ $y$",
        "solution_en": "**Detailed Solution for Problem 2.9:**\nWhen $\\delta = \\pi/2$: $\\left(\\frac{x}{a_1}\\right)^2 + \\left(\\frac{y}{a_2}\\right)^2 = 1$ (Ellipse).",
        "hints": [
          "ความถี่การแกว่งกวัดเฉลี่ยคือ $\\bar{f} = \\frac{f_1 + f_2}{2}$",
          "ซองแอมพลิจูด (Envelope) เปลี่ยนแปลงด้วยความถี่ $\\frac{|f_1 - f_2|}{2}$"
        ]
      }
    ]
  },
  {
    "lecture": 3,
    "title_th": "Lecture 3: พลังงานและระบบการแกว่งกวัดแบบต่างๆ (Energy & Oscillating Systems)",
    "title_en": "Lecture 3: Energy & Oscillating Systems",
    "problems": [
      {
        "id": "p3_1",
        "num_in_lec": 1,
        "global_id": 23,
        "topic_th": "หัวข้อ 3.1",
        "topic_en": "Topic 3.1",
        "question_th": "ก้อนมวล $200\\text{ kg}$ ติดอยู่กับสปริงแนวนอนและสั่นแบบฮาร์มอนิกอย่างง่ายด้วยคาบ $0.250\\text{ s}$ พลังงานรวมของระบบคือ $2.00\\text{ J}$ จงหา:(a) ค่าคงตัวสปริง(b) แอมพลิจูดของการเคลื่อนที่",
        "question_en": "ก้อนมวล $200\\text{ kg}$ ติดอยู่กับสปริงแนวนอนand สั่นแบบฮาร์มอนิกอย่างง่ายด้วยperiod $0.250\\text{ s}$ พลังงานรวมของระบบคือ $2.00\\text{ J}$ Find:(a) spring constant(b) amplitude of motion",
        "formulas": [
          "\\omega = \\frac{2\\pi}{T}",
          "k = m \\omega^2",
          "E = \\frac{1}{2} k A^2"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.1:**\nกำหนดมวล $m = 200\\text{ kg}$, คาบ $T = 0.250\\text{ s}$, และพลังงานรวม $E = 2.00\\text{ J}$\n(a) หาความถี่เชิงมุม $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0.250} = 8\\pi \\approx 25.13\\text{ rad/s}$\nค่าคงตัวสปริง $$k = m \\omega^2 = 200 \\times (8\\pi)^2 = 12800\\pi^2 \\approx 1.263 \\times 10^5\\text{ N/m}$$\n(b) หาแอมพลิจูดจากพลังงานรวม $E = \\frac{1}{2} k A^2$:\n$$A = \\sqrt{\\frac{2E}{k}} = \\sqrt{\\frac{2(2.00)}{1.2633 \\times 10^5}} \\approx 0.00563\\text{ m} = 5.63\\text{ mm}$$",
        "solution_en": "**Detailed Solution for Problem 3.1:**\nGiven $m = 200\\text{ kg}$, period $T = 0.250\\text{ s}$, and total energy $E = 2.00\\text{ J}$:\n(a) Angular frequency $\\omega = \\frac{2\\pi}{0.250} = 8\\pi \\approx 25.13\\text{ rad/s}$.\nSpring constant $$k = m \\omega^2 = 200(8\\pi)^2 = 12800\\pi^2 \\approx 1.263 \\times 10^5\\text{ N/m}$$\n(b) Amplitude $$A = \\sqrt{\\frac{2E}{k}} = \\sqrt{\\frac{2(2.00)}{126330.9}} \\approx 0.00563\\text{ m} = 5.63\\text{ mm}$$",
        "hints": [
          "คำนวณความถี่เชิงมุมจากคาบ $\\omega = \\frac{2\\pi}{T}$ แล้วหาค่าคงตัวสปริง $k = m \\omega^2$",
          "พลังงานรวมของระบบมวล-สปริงสัมพันธ์กับแอมพลิจูดตามสมการ $E = \\frac{1}{2} k A^2 \\implies A = \\sqrt{\\frac{2E}{k}}$"
        ]
      },
      {
        "id": "p3_2",
        "num_in_lec": 2,
        "global_id": 24,
        "topic_th": "หัวข้อ 3.2",
        "topic_en": "Topic 3.2",
        "question_th": "จงหาพลังงานกลของระบบมวล-สปริงที่มีค่าคงตัวสปริง $1.3\\text{ N/cm}$ และมีแอมพลิจูด $2.4\\text{ cm}$",
        "question_en": "Find พลังงานกลของระบบมวล-สปริงที่มีspring constant $1.3\\text{ N/cm}$ and มีamplitude $2.4\\text{ cm}$",
        "formulas": [
          "E = \\frac{1}{2} k A^2"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.2:**\nกำหนดค่าคงตัวสปริง $k = 1.3\\text{ N/cm} = 130\\text{ N/m}$ และแอมพลิจูด $A = 2.4\\text{ cm} = 0.024\\text{ m}$\nคำนวณพลังงานกลรวมของระบบมวล-สปริงจากสมการพลังงาน SHM:\n$$E = \\frac{1}{2} k A^2 = \\frac{1}{2}(130\\text{ N/m})(0.024\\text{ m})^2 = 0.03744\\text{ J} = 37.4\\text{ mJ}$$",
        "solution_en": "**Detailed Solution for Problem 3.2:**\nGiven spring constant $k = 1.3\\text{ N/cm} = 130\\text{ N/m}$ and amplitude $A = 2.4\\text{ cm} = 0.024\\text{ m}$.\nMechanical energy: $$E = \\frac{1}{2} k A^2 = \\frac{1}{2}(130)(0.024)^2 = 0.03744\\text{ J} = 37.4\\text{ mJ}$$",
        "hints": [
          "แปลงหน่วยค่าคงตัวสปริง $k = 1.3\\text{ N/cm} = 130\\text{ N/m}$ และแอมพลิจูด $A = 2.4\\text{ cm} = 0.024\\text{ m}$",
          "พลังงานกลรวมในระบบมวล-สปริงหาได้จาก $E = \\frac{1}{2} k A^2$"
        ]
      },
      {
        "id": "p3_3",
        "num_in_lec": 3,
        "global_id": 25,
        "topic_th": "หัวข้อ 3.3",
        "topic_en": "Topic 3.3",
        "question_th": "ลูกตุ้มอย่างง่ายประกอบด้วยลูกตุ้มมวล $60.0\\text{ g}$ ห้อยอยู่ที่ปลายเชือกที่มีมวลน้อยมาก หากมุม $\\theta$ ระหว่างเชือกกับแนวดิ่งกำหนดโดยสมการ $\\theta = (0.0800\\text{ rad}) \\cos((4.43\\text{ rad/s})t + \\phi)$ จงหา:(a) ความยาวของลูกตุ้ม(b) พลังงานจลน์สูงสุดของการแกว่งกวัด",
        "question_en": "ลูกตุ้มอย่างง่ายประกอบด้วยลูกตุ้มมวล $60.0\\text{ g}$ ห้อยอยู่ที่ปลายเชือกที่มีมวลน้อยมาก หากมุม $\\theta$ ระหว่างเชือกกับแนวดิ่งกำหนดโดยสมการ $\\theta = (0.0800\\text{ rad}) \\cos((4.43\\text{ rad/s})t + \\phi)$ Find:(a) ความยาวของลูกตุ้ม(b) พลังงานจลน์สูงสุดของการแกว่งกวัด",
        "formulas": [
          "\\omega = \\sqrt{\\frac{g}{L}}",
          "v_{\\max} = L \\omega \\theta_m",
          "K_{\\max} = \\frac{1}{2} m v_{\\max}^2"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.3:**\nมวลลูกตุ้ม $m = 60.0\\text{ g} = 0.0600\\text{ kg}$, สมการมุม $\\theta(t) = (0.0800\\text{ rad}) \\cos((4.43\\text{ rad/s})t + \\phi)$\n(a) จาก $\\omega = \\sqrt{g/L} \\implies L = g/\\omega^2 = \\frac{9.80}{(4.43)^2} = 0.500\\text{ m}$\n(b) อัตราเร็วเชิงเส้นสูงสุด $v_{\\max} = L \\Omega_{\\max} = L (\\omega \\theta_m) = 0.500 \\times 4.43 \\times 0.0800 = 0.1772\\text{ m/s}$\nพลังงานจลน์สูงสุด $$K_{\\max} = \\frac{1}{2} m v_{\\max}^2 = \\frac{1}{2}(0.0600\\text{ kg})(0.1772\\text{ m/s})^2 = 9.42 \\times 10^{-4}\\text{ J} = 0.942\\text{ mJ}$$",
        "solution_en": "**Detailed Solution for Problem 3.3:**\nMass $m = 0.0600\\text{ kg}$, $\\theta(t) = (0.0800\\text{ rad}) \\cos(4.43 t + \\phi)$:\n(a) Length $L = g/\\omega^2 = 9.80/(4.43)^2 = 0.500\\text{ m}$\n(b) Max speed $v_{\\max} = L \\omega \\theta_m = 0.1772\\text{ m/s}$. Max kinetic energy $K_{\\max} = \\frac{1}{2} m v_{\\max}^2 = 0.942\\text{ mJ}$",
        "hints": [
          "หาความยาวลูกตุ้ม $L$ จากความถี่เชิงมุม $\\omega = 4.43\\text{ rad/s}$ โดยใช้สมการ $\\omega = \\sqrt{\\frac{g}{L}} \\implies L = \\frac{g}{\\omega^2}$",
          "ความเร็วเชิงเส้นสูงสุด $v_{\\max} = L \\omega \\theta_m$ แล้วคำนวณพลังงานจลน์สูงสุด $K_{\\max} = \\frac{1}{2} m v_{\\max}^2$"
        ]
      },
      {
        "id": "p3_4",
        "num_in_lec": 4,
        "global_id": 26,
        "topic_th": "หัวข้อ 3.4",
        "topic_en": "Topic 3.4",
        "question_th": "ลูกตุ้มอย่างง่ายอันหนึ่งมีคาบการแกว่งบนโลกเท่ากับ $1.60\\text{ s}$ คาบของลูกตุ้มนี้บนพื้นผิวของดาวอังคารซึ่งมีความเร่งเนื่องจากแรงโน้มถ่วง $g = 3.71\\text{ m/s}^2$ จะมีค่าเท่าใด?",
        "question_en": "ลูกตุ้มอย่างง่ายอันหนึ่งมีperiodการแกว่งบนโลกเท่ากับ $1.60\\text{ s}$ periodของลูกตุ้มนี้บนพื้นผิวของดาวอังคารซึ่งมีความเร่งเนื่องจากแรงโน้มถ่วง $g = 3.71\\text{ m/s}^2$ จะมีค่าเท่าใด?",
        "formulas": [
          "T = 2\\pi \\sqrt{\\frac{L}{g}}",
          "T \\propto \\frac{1}{\\sqrt{g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.4:**\nลูกตุ้มอย่างง่ายมีคาบบนโลก $T_{\\text{Earth}} = 1.60\\text{ s}$ เมื่อนำไปทดลองบนดาวอังคารความเร่งโน้มถ่วง $g_{\\text{Mars}} = 3.71\\text{ m/s}^2$\nจากสมการคาบลูกตุ้มอย่างง่าย $T = 2\\pi \\sqrt{\\frac{L}{g}} \\implies T \\propto \\frac{1}{\\sqrt{g}}$\n$$T_{\\text{Mars}} = T_{\\text{Earth}} \\sqrt{\\frac{g_{\\text{Earth}}}{g_{\\text{Mars}}}} = 1.60 \\times \\sqrt{\\frac{9.80}{3.71}} = 1.60 \\times 1.625 = 2.60\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 3.4:**\nGiven $T_{\\text{Earth}} = 1.60\\text{ s}$ and $g_{\\text{Mars}} = 3.71\\text{ m/s}^2$.\nUsing $T \\propto 1/\\sqrt{g}$:\n$$T_{\\text{Mars}} = 1.60 \\sqrt{\\frac{9.80}{3.71}} = 2.60\\text{ s}$$",
        "hints": [
          "คาบของลูกตุ้มอย่างง่ายแปรผกผันกับ $\\sqrt{g}$ นั่นคือ $T = 2\\pi\\sqrt{\\frac{L}{g}}$",
          "สร้างอัตราส่วนคาบระหว่างดาวอังคารกับโลก: $T_{\\text{Mars}} = T_{\\text{Earth}} \\sqrt{\\frac{g_{\\text{Earth}}}{g_{\\text{Mars}}}}$"
        ]
      },
      {
        "id": "p3_5",
        "num_in_lec": 5,
        "global_id": 27,
        "topic_th": "หัวข้อ 3.5",
        "topic_en": "Topic 3.5",
        "question_th": "ทรงกลมตันมวล $95\\text{ kg}$ รัศมี $15\\text{ cm}$ ถูกแขวนไว้ในแนวดิ่งด้วยเส้นลวด หากต้องใช้ทอร์คขนาด $0.20\\text{ N}\\cdot\\text{m}$ เพื่อหมุนทรงกลมไปเป็นมุม $0.85\\text{ rad}$ แล้วรักษาสภาพนั้นไว้ จงหาคาบของการแกว่งกวัดที่จะเกิดขึ้นเมื่อปล่อยทรงกลม",
        "question_en": "ทรงกลมตันมวล $95\\text{ kg}$ รัศมี $15\\text{ cm}$ ถูกแขวนไว้ในแนวดิ่งด้วยเส้นลวด หากต้องใช้ทอร์คขนาด $0.20\\text{ N}\\cdot\\text{m}$ เพื่อหมุนทรงกลมไปเป็นมุม $0.85\\text{ rad}$ แล้วรักษาสภาพนั้นไว้ Find periodของการแกว่งกวัดที่จะเกิดขึ้นwhere ปล่อยทรงกลม",
        "formulas": [
          "\\kappa = \\frac{\\tau}{\\theta}",
          "I = \\frac{2}{5} m R^2",
          "T = 2\\pi \\sqrt{\\frac{I}{\\kappa}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.5:**\nทรงกลมตันมวล $m = 95\\text{ kg}$ รัศมี $R = 15\\text{ cm} = 0.15\\text{ m}$, ทอร์ก $\\tau = 0.20\\text{ N}\\cdot\\text{m}$ บิดไปเป็นมุม $\\theta = 0.85\\text{ rad}$\n- ค่าคงตัวการบิดของลวด $\\kappa = \\frac{\\tau}{\\theta} = \\frac{0.20}{0.85} = 0.2353\\text{ N}\\cdot\\text{m/rad}$\n- โมเมนต์ความเฉื่อยของทรงกลมตันรอบแกนผ่านศูนย์กลาง $I = \\frac{2}{5} m R^2 = \\frac{2}{5}(95)(0.15)^2 = 0.855\\text{ kg}\\cdot\\text{m}^2$\n- คาบการแกว่งกวัดแบบการบิด $$T = 2\\pi \\sqrt{\\frac{I}{\\kappa}} = 2\\pi \\sqrt{\\frac{0.855}{0.2353}} = 2\\pi \\sqrt{3.6337} = 12.0\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 3.5:**\nTorsion constant $\\kappa = \\tau/\\theta = 0.20/0.85 = 0.2353\\text{ N}\\cdot\\text{m/rad}$.\nSphere moment of inertia $I = \\frac{2}{5} m R^2 = \\frac{2}{5}(95)(0.15)^2 = 0.855\\text{ kg}\\cdot\\text{m}^2$.\nTorsion period $T = 2\\pi \\sqrt{I/\\kappa} = 12.0\\text{ s}$.",
        "hints": [
          "หาค่าคงตัวการบิด $\\kappa = \\frac{\\tau}{\\theta}$ จากทอร์กและมุมที่ใช้บิด",
          "โมเมนต์ความเฉื่อยของทรงกลมตัน $I = \\frac{2}{5} m R^2$ แล้วคำนวณคาบการแกว่งบิด $T = 2\\pi \\sqrt{\\frac{I}{\\kappa}}$"
        ]
      },
      {
        "id": "p3_6",
        "num_in_lec": 6,
        "global_id": 28,
        "topic_th": "หัวข้อ 3.6",
        "topic_en": "Topic 3.6",
        "question_th": "แผ่นโลหะบางรูปวงกลมมวล $2.00 \\times 10^{-3}\\text{ kg}$ และรัศมี $2.20\\text{ cm}$ ถูกติดกับเส้นใยยาวไว้ที่จุดศูนย์กลาง เมื่อบิดแผ่นโลหะแล้วปล่อย จะเกิดการแกว่งแบบเพนดูลัมแรงบิดด้วยคาบ $1.00\\text{ s}$ จงหาค่าคงตัวการบิดของเส้นใย",
        "question_en": "แผ่นโลหะบางรูปวงกลมมวล $2.00 \\times 10^{-3}\\text{ kg}$ and รัศมี $2.20\\text{ cm}$ ถูกติดกับเส้นใยยาวไว้ที่จุดศูนย์กลาง where บิดแผ่นโลหะแล้วปล่อย จะเกิดการแกว่งแบบเพนดูลัมแรงบิดด้วยperiod $1.00\\text{ s}$ Find ค่าคงตัวการบิดของเส้นใย",
        "formulas": [
          "I = \\frac{1}{2} m R^2",
          "T = 2\\pi \\sqrt{\\frac{I}{\\kappa}} \\implies \\kappa = \\frac{4\\pi^2 I}{T^2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.6:**\nแผ่นดิสก์วงกลมบางมวล $m = 2.00 \\times 10^{-3}\\text{ kg}$ รัศมี $R = 2.20\\text{ cm} = 0.022\\text{ m}$, คาบ $T = 1.00\\text{ s}$\n- โมเมนต์ความเฉื่อยแผ่นดิสก์ $I = \\frac{1}{2} m R^2 = \\frac{1}{2}(2.00 \\times 10^{-3})(0.022)^2 = 4.84 \\times 10^{-7}\\text{ kg}\\cdot\\text{m}^2$\n- ค่าคงตัวการบิด $T = 2\\pi \\sqrt{\\frac{I}{\\kappa}} \\implies \\kappa = \\frac{4\\pi^2 I}{T^2} = \\frac{4\\pi^2 (4.84 \\times 10^{-7})}{1.00^2} = 1.91 \\times 10^{-5}\\text{ N}\\cdot\\text{m/rad}$",
        "solution_en": "**Detailed Solution for Problem 3.6:**\nDisk $I = \\frac{1}{2} m R^2 = 4.84 \\times 10^{-7}\\text{ kg}\\cdot\\text{m}^2$.\nTorsion constant $\\kappa = \\frac{4\\pi^2 I}{T^2} = 1.91 \\times 10^{-5}\\text{ N}\\cdot\\text{m/rad}$.",
        "hints": [
          "โมเมนต์ความเฉื่อยของแผ่นดิสก์บางรอบแกนตั้งฉากผ่านศูนย์กลาง $I = \\frac{1}{2} m R^2$",
          "ใช้สมการคาบเพนดูลัมแรงบิด $T = 2\\pi \\sqrt{\\frac{I}{\\kappa}} \\implies \\kappa = \\frac{4\\pi^2 I}{T^2}$"
        ]
      },
      {
        "id": "p3_7",
        "num_in_lec": 7,
        "global_id": 29,
        "topic_th": "หัวข้อ 3.7",
        "topic_en": "Topic 3.7",
        "question_th": "วัตถุมีความสูง $h$ มวล $M$ และมีพื้นที่หน้าตัดสม่ำเสมอ $A$ ลอยตั้งตรงอยู่ในของเหลวที่มีความหนาแน่น $\\rho$ หากกดวัตถุลงเล็กน้อยแล้วปล่อยให้แกว่งกวัดขึ้นลงแบบฮาร์มอนิกอย่างง่าย จงหาคาบของการเคลื่อนที่นี้ในเทอมของ $\\rho$, $M$, และ $A$ (โดยไม่คิดแรงหน่วงจากของเหลว)",
        "question_en": "วัตถุมีความสูง $h$ มวล $M$ and มีพื้นที่หน้าตัดสม่ำเสมอ $A$ ลอยตั้งตรงอยู่ในของเหลวที่มีความหนาแน่น $\\rho$ หากกดวัตถุลงเล็กน้อยแล้วปล่อยให้แกว่งกวัดขึ้นลงแบบฮาร์มอนิกอย่างง่าย Find period of motionนี้ในเทอมของ $\\rho$, $M$, and  $A$ (โดยไม่คิดแรงหน่วงจากของเหลว)",
        "formulas": [
          "F_{\\text{buoyant}} = -\\rho g A y",
          "k_{\\text{eff}} = \\rho g A",
          "T = 2\\pi \\sqrt{\\frac{M}{\\rho g A}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.7:**\nวัตถุลอยในของเหลวความหนาแน่น $\\rho$ เมื่อกดลงเป็นระยะ $y$ แรงลอยตัวคืนตัวคือ $F = -\\rho A g y$\nตั้งสมการการเคลื่อนที่ตามกฎข้อสองของนิวตัน: $$M \\ddot{y} + \\rho A g y = 0$$\nได้ความถี่เชิงมุม $\\omega = \\sqrt{\\frac{\\rho A g}{M}}$ ดังนั้น คาบการแกว่งกวัดคือ $$T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{M}{\\rho A g}}$$",
        "solution_en": "**Detailed Solution for Problem 3.7:**\nBuoyant restoring force $F = -\\rho A g y \\implies M \\ddot{y} + \\rho A g y = 0$.\nPeriod $T = 2\\pi \\sqrt{\\frac{M}{\\rho A g}}$.",
        "hints": [
          "เมื่อวัตถุลอยในของเหลวจมลงไปเป็นระยะ $y$ แรงลอยตัวส่วนเกินคือแรงคืนตัว $F = -\\rho g A y$",
          "เปรียบเทียบกับสมการ SHM $F = -k_{\\text{eff}} y \\implies k_{\\text{eff}} = \\rho g A$ จะได้คาบ $T = 2\\pi \\sqrt{\\frac{M}{\\rho g A}}$"
        ]
      },
      {
        "id": "p3_8",
        "num_in_lec": 8,
        "global_id": 30,
        "topic_th": "หัวข้อ 3.8",
        "topic_en": "Topic 3.8",
        "question_th": "หลอดทดลองถูกถ่วงน้ำหนักด้วยเม็ดตะกั่วและลอยตั้งตรงอยู่ในของเหลวที่มีความหนาแน่น $\\rho$ เมื่อถูกกดลงจากตำแหน่งสมดุลเล็กน้อยแล้วปล่อย หลอดทดลองจะแกว่งกวัดแบบฮาร์มอนิกอย่างง่าย จงหาความถี่เชิงมุมของการแกว่งกวัดในเทอมของพื้นที่หน้าตัด $A$, มวลของหลอดทดลอง $m$, และความเร่ง $g$",
        "question_en": "หลอดทดลองถูกถ่วงน้ำหนักด้วยเม็ดตะกั่วand ลอยตั้งตรงอยู่ในของเหลวที่มีความหนาแน่น $\\rho$ where ถูกกดลงจากตำแหน่งสมดุลเล็กน้อยแล้วปล่อย หลอดทดลองจะแกว่งกวัดแบบฮาร์มอนิกอย่างง่าย Find frequencyเชิงมุมของการแกว่งกวัดในเทอมของพื้นที่หน้าตัด $A$, มวลของหลอดทดลอง $m$, and ความเร่ง $g$",
        "formulas": [
          "F = -\\rho A g y",
          "m \\ddot{y} + \\rho A g y = 0",
          "\\omega = \\sqrt{\\frac{\\rho A g}{m}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.8:**\nหลอดทดลองถ่วงน้ำหนักมวล $m$ พื้นที่หน้าตัด $A$ ลอยในของเหลวความหนาแน่น $\\rho$\nแรงคืนตัวสุทธิจากการจมเพิ่มขึ้นระยะ $y$ คือ $F = -\\rho A g y$\nสมการการสั่น $m \\ddot{y} + \\rho A g y = 0 \\implies \\omega = \\sqrt{\\frac{\\rho A g}{m}}$",
        "solution_en": "**Detailed Solution for Problem 3.8:**\nEquation of motion $m \\ddot{y} + \\rho A g y = 0 \\implies \\omega = \\sqrt{\\frac{\\rho A g}{m}}$.",
        "hints": [
          "แรงคืนตัวสุทธิเมื่อหลอดทดลองถูกกดลงระยะ $y$ คือแรงลอยตัวส่วนเกิน $F = -\\rho A g y$",
          "สมการการเคลื่อนที่ $m \\ddot{y} + \\rho A g y = 0 \\implies \\omega = \\sqrt{\\frac{\\rho A g}{m}}$"
        ]
      },
      {
        "id": "p3_9",
        "num_in_lec": 9,
        "global_id": 31,
        "topic_th": "หัวข้อ 3.9",
        "topic_en": "Topic 3.9",
        "question_th": "มวล $m$ ถูกติดไว้ที่จุดกึ่งกลางของเชือกที่มีความยาว $2l$ ซึ่งถูกขึงตึงด้วยแรงดึง $T$ คงที่ตลอดเวลา เมื่อมวลถูกดึงในแนวตั้งฉากกับเส้นเชือกเป็นระยะทางเล็กน้อยแล้วปล่อย มวลจะสั่นแบบฮาร์มอนิกอย่างง่าย จงหาความถี่เชิงมุมของการสั่นนี้",
        "question_en": "มวล $m$ ถูกติดไว้ที่จุดกึ่งกลางของเชือกที่มีความยาว $2l$ ซึ่งถูกขึงตึงด้วยแรงดึง $T$ คงที่ตลอดเวลา where มวลถูกดึงในแนวตั้งฉากกับเส้นเชือกเป็นระยะทางเล็กน้อยแล้วปล่อย มวลจะสั่นแบบฮาร์มอนิกอย่างง่าย Find frequencyเชิงมุมของการสั่นนี้",
        "formulas": [
          "F = -2 T \\sin\\theta \\approx -\\frac{2T}{l} y",
          "\\omega = \\sqrt{\\frac{2T}{m l}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.9:**\nมวล $m$ อยู่กึ่งกลางเชือกยาว $2l$ แรงดึง $T$ เมื่อเบี่ยงเบนแนวตั้งฉากระยะ $y$ (มุมขนาดเล็ก $\\sin\\theta \\approx y/l$):\nแรงคืนตัวสุทธิจากเชือกทั้งสองฝั่ง $F = -2 T \\sin\\theta \\approx -2 T \\left(\\frac{y}{l}\\right) = -\\left(\\frac{2T}{l}\\right) y$\nสมการการเคลื่อนที่ $m \\ddot{y} + \\left(\\frac{2T}{l}\\right) y = 0 \\implies \\omega = \\sqrt{\\frac{2T}{m l}}$",
        "solution_en": "**Detailed Solution for Problem 3.9:**\nRestoring force $F = -2 T (y/l) \\implies m \\ddot{y} + \\frac{2T}{l} y = 0 \\implies \\omega = \\sqrt{\\frac{2T}{m l}}$.",
        "hints": [
          "เมื่อดึงมวลเบี่ยงไป $y$ แรงดึงเชือก 2 ฝั่งให้แรงคืนตัวรวม $F = -2 T \\sin\\theta \\approx -2 T \\left(\\frac{y}{l}\\right)$",
          "จาก $m \\ddot{y} + \\frac{2T}{l} y = 0$ จะได้ความถี่เชิงมุม $\\omega = \\sqrt{\\frac{2T}{m l}}$"
        ]
      },
      {
        "id": "p3_10",
        "num_in_lec": 10,
        "global_id": 32,
        "topic_th": "หัวข้อ 3.10",
        "topic_en": "Topic 3.10",
        "question_th": "ระบบมวล-สปริงสั่นด้วยแอมพลิจูด $3.50\\text{ cm}$ ค่าคงตัวสปริงคือ $250\\text{ N/m}$ และมวลมีขนาด $0.500\\text{ kg}$ จงหา:(a) พลังงานกลของระบบ(b) อัตราเร็วสูงสุดของก้อนมวล(c) ความเร่งสูงสุดของก้อนมวล",
        "question_en": "ระบบมวล-สปริงสั่นด้วยamplitude $3.50\\text{ cm}$ spring constantคือ $250\\text{ N/m}$ and มวลมีขนาด $0.500\\text{ kg}$ Find:(a) พลังงานกลของระบบ(b) maximum speedของก้อนมวล(c) maximum accelerationของก้อนมวล",
        "formulas": [
          "E = \\frac{1}{2} k A^2",
          "v_{\\max} = \\omega A",
          "a_{\\max} = \\omega^2 A"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.10:**\nแอมพลิจูด $A = 0.0350\\text{ m}$, $k = 250\\text{ N/m}$, $m = 0.500\\text{ kg}$:\n(a) พลังงานกลรวม $E = \\frac{1}{2} k A^2 = \\frac{1}{2}(250)(0.0350)^2 = 0.153\\text{ J}$\n(b) อัตราเร็วสูงสุด $v_{\\max} = \\omega A = \\sqrt{\\frac{250}{0.500}} \\times 0.0350 = 0.783\\text{ m/s}$\n(c) ความเร่งสูงสุด $a_{\\max} = \\omega^2 A = (500) \\times 0.0350 = 17.5\\text{ m/s}^2$",
        "solution_en": "**Detailed Solution for Problem 3.10:**\n(a) Total energy $E = \\frac{1}{2} k A^2 = 0.153\\text{ J}$\n(b) Max speed $v_{\\max} = \\sqrt{k/m} A = 0.783\\text{ m/s}$\n(c) Max acceleration $a_{\\max} = (k/m) A = 17.5\\text{ m/s}^2$",
        "hints": [
          "พลังงานกลรวม $E = \\frac{1}{2} k A^2$",
          "อัตราเร็วสูงสุด $v_{\\max} = \\omega A = \\sqrt{\\frac{k}{m}} A$ และความเร่งสูงสุด $a_{\\max} = \\omega^2 A = \\frac{k}{m} A$"
        ]
      },
      {
        "id": "p3_11",
        "num_in_lec": 11,
        "global_id": 33,
        "topic_th": "หัวข้อ 3.11",
        "topic_en": "Topic 3.11",
        "question_th": "ระบบมวล-สปริงที่กำลังสั่นมีพลังงานกล $1.00\\text{ J}$ แอมพลิจูด $10.0\\text{ cm}$ และอัตราเร็วสูงสุด $1.20\\text{ m/s}$ จงหา:(a) ค่าคงตัวสปริง(b) มวลของก้อนมวล(c) ความถี่ของการแกว่งกวัด",
        "question_en": "ระบบมวล-สปริงที่กำลังสั่นมีพลังงานกล $1.00\\text{ J}$ amplitude $10.0\\text{ cm}$ and maximum speed $1.20\\text{ m/s}$ Find:(a) spring constant(b) มวลของก้อนมวล(c) frequencyของการแกว่งกวัด",
        "formulas": [
          "E = \\frac{1}{2} k A^2",
          "E = \\frac{1}{2} m v_{\\max}^2",
          "f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.11:**\n$E = 1.00\\text{ J}$, $A = 0.100\\text{ m}$, $v_{\\max} = 1.20\\text{ m/s}$:\n(a) ค่าคงตัวสปริง $k = \\frac{2E}{A^2} = \\frac{2(1.00)}{0.100^2} = 200\\text{ N/m}$\n(b) มวล $m = \\frac{2E}{v_{\\max}^2} = \\frac{2(1.00)}{1.20^2} = 1.39\\text{ kg}$\n(c) ความถี่ $f = \\frac{v_{\\max}}{2\\pi A} = \\frac{1.20}{2\\pi(0.100)} = 1.91\\text{ Hz}$",
        "solution_en": "**Detailed Solution for Problem 3.11:**\n(a) Spring constant $k = \\frac{2E}{A^2} = 200\\text{ N/m}$\n(b) Mass $m = \\frac{2E}{v_{\\max}^2} = 1.39\\text{ kg}$\n(c) Frequency $f = \\frac{v_{\\max}}{2\\pi A} = 1.91\\text{ Hz}$",
        "hints": [
          "จาก $E = \\frac{1}{2} k A^2 \\implies k = \\frac{2E}{A^2}$",
          "จาก $E = \\frac{1}{2} m v_{\\max}^2 \\implies m = \\frac{2E}{v_{\\max}^2}$ แล้วหาความถี่ $f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$"
        ]
      },
      {
        "id": "p3_12",
        "num_in_lec": 12,
        "global_id": 34,
        "topic_th": "หัวข้อ 3.12",
        "topic_en": "Topic 3.12",
        "question_th": "นักปีนเขามวล $85.0\\text{ kg}$ วางแผนที่จะแกว่งตัวลงมาจากชะง่อนผาโดยเริ่มจากหยุดนิ่ง และใช้เชือกเบายาว $6.50\\text{ m}$ หากถือว่าการแกว่งนี้เป็นแบบลูกตุ้มอย่างง่าย เขาจะใช้เวลาเท่าใดหลังจากเริ่มแกว่งจนกระทั่งไปถึงจุดต่ำสุดเป็นครั้งแรก?",
        "question_en": "นักปีนเขามวล $85.0\\text{ kg}$ วางแผนที่จะแกว่งตัวลงมาจากชะง่อนผาโดยเริ่มจากหยุดนิ่ง and ใช้เชือกเบายาว $6.50\\text{ m}$ หากถือว่าการแกว่งนี้เป็นแบบลูกตุ้มอย่างง่าย เขาจะใช้เวลาเท่าใดหลังจากเริ่มแกว่งจนกระทั่งไปถึงจุดต่ำสุดเป็นครั้งแรก?",
        "formulas": [
          "T = 2\\pi \\sqrt{\\frac{L}{g}}",
          "t_{\\text{bottom}} = \\frac{T}{4} = \\frac{\\pi}{2}\\sqrt{\\frac{L}{g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.12:**\nนักปีนเขามวล $85.0\\text{ kg}$ แกว่งลงมาจากความยาวเชือก $L = 6.50\\text{ m}$\nเวลาที่แกว่งจากจุดเริ่มต้น (จุดสูงสุด) ถึงจุดต่ำสุดครั้งแรกคือ $1/4$ ของคาบการแกว่งกวัด ($t = T/4$):\n$$t = \\frac{1}{4} \\left(2\\pi \\sqrt{\\frac{L}{g}}\\right) = \\frac{\\pi}{2} \\sqrt{\\frac{6.50}{9.80}} = 1.28\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 3.12:**\nTime to reach lowest point is one quarter period:\n$$t = \\frac{T}{4} = \\frac{\\pi}{2} \\sqrt{\\frac{L}{g}} = \\frac{\\pi}{2} \\sqrt{\\frac{6.50}{9.80}} = 1.28\\text{ s}$$",
        "hints": [
          "การเคลื่อนที่จากจุดเริ่มต้น (แอมพลิจูดสูงสุด) ถึงจุดต่ำสุด (ตำแหน่งสมดุล) ใช้เวลา $t = \\frac{T}{4}$",
          "คาบการแกว่งของลูกตุ้ม $T = 2\\pi \\sqrt{\\frac{L}{g}}$ ดังนั้นเวลาที่ใช้คือ $t = \\frac{\\pi}{2}\\sqrt{\\frac{L}{g}}$"
        ]
      },
      {
        "id": "p3_13",
        "num_in_lec": 13,
        "global_id": 35,
        "topic_th": "หัวข้อ 3.13",
        "topic_en": "Topic 3.13",
        "question_th": "นาฬิกาปลุกเรือนหนึ่งส่งเสียงเดินสี่ครั้งในแต่ละวินาที โดยแต่ละเสียงเดินหมายถึงครึ่งคาบ ล้อสมดุล (balance wheel) ของนาฬิกาประกอบด้วยขอบวงแหวนบางรัศมี $0.55\\text{ cm}$ เชื่อมต่อกับแกนหมุนด้วยซี่ล้อบางที่มีมวลน้อยมาก มวลรวมของล้อสมดุลคือ $0.90\\text{ g}$ จงหา:(a) โมเมนต์ความเฉื่อยของล้อสมดุลรอบแกนหมุน(b) ค่าคงตัวการบิดของขดสปริง",
        "question_en": "นาฬิกาปลุกเรือนหนึ่งส่งเสียงเดินสี่ครั้งในแต่ละวินาที โดยแต่ละเสียงเดินหมายถึงครึ่งperiod ล้อสมดุล (balance wheel) ของนาฬิกาประกอบด้วยขอบวงแหวนบางรัศมี $0.55\\text{ cm}$ เชื่อมต่อกับแกนหมุนด้วยซี่ล้อบางที่มีมวลน้อยมาก มวลรวมของล้อสมดุลคือ $0.90\\text{ g}$ Find:(a) โมเมนต์ความเฉื่อยของล้อสมดุลรอบแกนหมุน(b) ค่าคงตัวการบิดของขดสปริง",
        "formulas": [
          "I = m R^2",
          "T = \\frac{1}{f}",
          "\\kappa = \\frac{4\\pi^2 I}{T^2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.13:**\nเดิน 4 ครั้งต่อวินาที $\\implies$ ครึ่งคาบ $= 0.25\\text{ s} \\implies T = 0.50\\text{ s}$\nล้อสมดุลรูปวงแหวนบาง $R = 0.55\\text{ cm} = 0.0055\\text{ m}$, มวล $m = 0.90\\text{ g} = 9.0 \\times 10^{-4}\\text{ kg}$\n(a) โมเมนต์ความเฉื่อย $I = m R^2 = (9.0 \\times 10^{-4})(0.0055)^2 = 2.72 \\times 10^{-8}\\text{ kg}\\cdot\\text{m}^2$\n(b) ค่าคงตัวการบิด $\\kappa = \\frac{4\\pi^2 I}{T^2} = \\frac{4\\pi^2 (2.72 \\times 10^{-8})}{0.50^2} = 4.30 \\times 10^{-6}\\text{ N}\\cdot\\text{m/rad}$",
        "solution_en": "**Detailed Solution for Problem 3.13:**\nTick frequency gives period $T = 0.50\\text{ s}$.\n(a) Thin ring $I = m R^2 = 2.72 \\times 10^{-8}\\text{ kg}\\cdot\\text{m}^2$\n(b) Torsion constant $\\kappa = \\frac{4\\pi^2 I}{T^2} = 4.30 \\times 10^{-6}\\text{ N}\\cdot\\text{m/rad}$",
        "hints": [
          "โมเมนต์ความเฉื่อยของขอบวงแหวนบาง $I = m R^2$",
          "ความถี่การเดิน 4 ครั้ง/วินาที $\\implies f = 2\\text{ Hz}$ ($T = 0.50\\text{ s}$) แล้วหา $\\kappa = \\frac{4\\pi^2 I}{T^2}$"
        ]
      },
      {
        "id": "p3_14",
        "num_in_lec": 14,
        "global_id": 36,
        "topic_th": "หัวข้อ 3.14",
        "topic_en": "Topic 3.14",
        "question_th": "เชียร์ลีดเดอร์โบกพู่เชียร์แบบฮาร์มอนิกอย่างง่ายด้วยแอมพลิจูด $18.0\\text{ cm}$ และความถี่ $0.850\\text{ Hz}$ จงหาอัตราเร็วและขนาดของความเร่งของพู่เชียร์เมื่อมันอยู่ที่ตำแหน่งกระจัด $9.0\\text{ cm}$ จากจุดสมดุล",
        "question_en": "เชียร์ลีดเดอร์โบกพู่เชียร์แบบฮาร์มอนิกอย่างง่ายด้วยamplitude $18.0\\text{ cm}$ and frequency $0.850\\text{ Hz}$ Find อัตราเร็วand ขนาดของความเร่งของพู่เชียร์where มันอยู่ที่ตำแหน่งกระจัด $9.0\\text{ cm}$ จากจุดสมดุล",
        "formulas": [
          "\\omega = 2\\pi f",
          "v(x) = \\omega \\sqrt{A^2 - x^2}",
          "a(x) = \\omega^2 x"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.14:**\nพู่เชียร์สั่นด้วย $A = 0.180\\text{ m}$, $f = 0.850\\text{ Hz} \\implies \\omega = 2\\pi(0.850) = 5.341\\text{ rad/s}$\nณ ตำแหน่ง $x = 0.090\\text{ m}$:\n- อัตราเร็ว $v = \\omega \\sqrt{A^2 - x^2} = 5.341 \\sqrt{0.180^2 - 0.090^2} = 0.833\\text{ m/s}$\n- ความเร่ง $|a| = \\omega^2 x = (5.341)^2 \\times 0.090 = 2.57\\text{ m/s}^2$",
        "solution_en": "**Detailed Solution for Problem 3.14:**\nWith $A = 0.180\\text{ m}, \\omega = 5.341\\text{ rad/s}$ at $x = 0.090\\text{ m}$:\nSpeed $v = \\omega \\sqrt{A^2 - x^2} = 0.833\\text{ m/s}$. Acceleration $|a| = \\omega^2 x = 2.57\\text{ m/s}^2$.",
        "hints": [
          "ความถี่เชิงมุม $\\omega = 2\\pi f = 2\\pi (0.850) \\approx 5.341\\text{ rad/s}$",
          "อัตราเร็วที่ตำแหน่ง $x$ คือ $v = \\omega \\sqrt{A^2 - x^2}$ และความเร่ง $a = \\omega^2 x$"
        ]
      },
      {
        "id": "p3_15",
        "num_in_lec": 15,
        "global_id": 37,
        "topic_th": "หัวข้อ 3.15",
        "topic_en": "Topic 3.15",
        "question_th": "นักแสดงนั่งบนชิงช้าสวิงแกว่งไปมาด้วยคาบ $8.85\\text{ s}$ หากเธอลุกขึ้นยืน ซึ่งทำให้จุดศูนย์กลางมวลของระบบชิงช้าและนักแสดงสูงขึ้น $35.0\\text{ cm}$ คาบใหม่ของการแกว่งจะมีค่าเท่าใด? (ให้พิจารณาว่าระบบเป็นลูกตุ้มอย่างง่าย)",
        "question_en": "นักแสดงนั่งบนชิงช้าสวิงแกว่งไปมาด้วยperiod $8.85\\text{ s}$ หากเธอลุกขึ้นยืน ซึ่งทำให้จุดศูนย์กลางมวลของระบบชิงช้าand นักแสดงสูงขึ้น $35.0\\text{ cm}$ periodใหม่ของการแกว่งจะมีค่าเท่าใด? (ให้พิจารณาว่าระบบเป็นลูกตุ้มอย่างง่าย)",
        "formulas": [
          "L_1 = g \\left(\\frac{T_1}{2\\pi}\\right)^2",
          "L_2 = L_1 - \\Delta h",
          "T_2 = 2\\pi \\sqrt{\\frac{L_2}{g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.15:**\nคาบเดิม $T_1 = 8.85\\text{ s} \\implies$ ความยาวเดิม $L_1 = g \\left(\\frac{T_1}{2\\pi}\\right)^2 = 9.80 \\left(\\frac{8.85}{2\\pi}\\right)^2 = 19.43\\text{ m}$\nเมื่อยืนขึ้น ศูนย์กลางมวลสูงขึ้น $\\Delta h = 0.350\\text{ m} \\implies$ ความยาวใหม่ $L_2 = 19.43 - 0.350 = 19.08\\text{ m}$\nคาบใหม่ $$T_2 = 2\\pi \\sqrt{\\frac{L_2}{g}} = 2\\pi \\sqrt{\\frac{19.08}{9.80}} = 8.77\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 3.15:**\nInitial length $L_1 = g (T_1/2\\pi)^2 = 19.43\\text{ m}$. New length $L_2 = L_1 - 0.350 = 19.08\\text{ m}$.\nNew period $T_2 = 2\\pi \\sqrt{L_2/g} = 8.77\\text{ s}$.",
        "hints": [
          "หาความยาวเดิม $L_1 = g \\left(\\frac{T_1}{2\\pi}\\right)^2$",
          "เมื่อยืนขึ้นความยาวลดลง $L_2 = L_1 - \\Delta h$ แล้วคำนวณคาบใหม่ $T_2 = 2\\pi \\sqrt{\\frac{L_2}{g}}$"
        ]
      },
      {
        "id": "p3_16",
        "num_in_lec": 16,
        "global_id": 38,
        "topic_th": "หัวข้อ 3.16",
        "topic_en": "Topic 3.16",
        "question_th": "วัตถุมวล $5.00\\text{ kg}$ วางอยู่บนพื้นราบที่ไม่มีแรงเสียดทานและติดกับสปริงที่มีค่าคงตัว $k = 1000\\text{ N/m}$ วัตถุถูกดึงให้กระจัดจากจุดสมดุลเป็นระยะ $50.0\\text{ cm}$ และได้รับความเร็วเริ่มต้น $10.0\\text{ m/s}$ ในทิศทางพุ่งกลับเข้าหาจุดสมดุล จงหา:(a) ความถี่ของการเคลื่อนที่(b) พลังงานศักย์เริ่มต้น(c) พลังงานจลน์เริ่มต้น(d) แอมพลิจูดของการเคลื่อนที่",
        "question_en": "วัตถุมวล $5.00\\text{ kg}$ วางอยู่บนพื้นราบที่ไม่มีแรงเสียดทานand ติดกับสปริงที่มีค่าคงตัว $k = 1000\\text{ N/m}$ วัตถุถูกดึงให้กระจัดจากจุดสมดุลเป็นระยะ $50.0\\text{ cm}$ and ได้รับความเร็วเริ่มต้น $10.0\\text{ m/s}$ ในทิศทางพุ่งกลับเข้าหาจุดสมดุล Find:(a) frequencyของการเคลื่อนที่(b) พลังงานศักย์เริ่มต้น(c) พลังงานจลน์เริ่มต้น(d) amplitude of motion",
        "formulas": [
          "f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}",
          "U_0 = \\frac{1}{2} k x_0^2",
          "K_0 = \\frac{1}{2} m v_0^2",
          "E = U_0 + K_0 = \\frac{1}{2} k A^2"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.16:**\nมวล $5.00\\text{ kg}$, $k = 1000\\text{ N/m}$, ดึงไปที่ $x_0 = 0.500\\text{ m}$, ความเร็วต้น $v_0 = -10.0\\text{ m/s}$:\n(a) ความถี่ $f = \\frac{1}{2\\pi}\\sqrt{\\frac{1000}{5.00}} = 2.25\\text{ Hz}$\n(b) พลังงานศักย์เริ่มต้น $U_0 = \\frac{1}{2} k x_0^2 = \\frac{1}{2}(1000)(0.500)^2 = 125\\text{ J}$\n(c) พลังงานจลน์เริ่มต้น $K_0 = \\frac{1}{2} m v_0^2 = \\frac{1}{2}(5.00)(-10.0)^2 = 250\\text{ J}$\n(d) พลังงานกลรวม $E = 125 + 250 = 375\\text{ J} \\implies A = \\sqrt{\\frac{2E}{k}} = \\sqrt{\\frac{750}{1000}} = 0.866\\text{ m} = 86.6\\text{ cm}$",
        "solution_en": "**Detailed Solution for Problem 3.16:**\n(a) Frequency $f = 2.25\\text{ Hz}$\n(b) Initial potential energy $U_0 = 125\\text{ J}$\n(c) Initial kinetic energy $K_0 = 250\\text{ J}$\n(d) Total energy $E = 375\\text{ J} \\implies$ Amplitude $A = 0.866\\text{ m} = 86.6\\text{ cm}$",
        "hints": [
          "(a) ความถี่ $f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$",
          "(b) พลังงานศักย์ต้น $U_0 = \\frac{1}{2} k x_0^2$, (c) พลังงานจลน์ต้น $K_0 = \\frac{1}{2} m v_0^2$, (d) แอมพลิจูด $A = \\sqrt{\\frac{2(U_0 + K_0)}{k}}$"
        ]
      },
      {
        "id": "p3_17",
        "num_in_lec": 17,
        "global_id": 39,
        "topic_th": "หัวข้อ 3.17",
        "topic_en": "Topic 3.17",
        "question_th": "แท่งวัตถุสม่ำเสมอยาวมวล $0.600\\text{ kg}$ สามารถหมุนได้อย่างอิสระในแนวระดับรอบแกนในแนวดิ่งที่ผ่านจุดกึ่งกลาง สปริงที่มีค่าคงตัวสปริง $1850\\text{ N/m}$ ถูกติดไว้ในแนวระดับระหว่างปลายด้านหนึ่งของแท่งกับผนัง หากแท่งวัตถุถูกหมุนไปเล็กน้อยแล้วปล่อย จงหาคาบของการแกว่งกวัดเพนดูลัมแรงบิดที่เกิดขึ้น",
        "question_en": "แท่งวัตถุสม่ำเสมอยาวมวล $0.600\\text{ kg}$ สามารถหมุนได้อย่างอิสระในแนวระดับรอบแกนในแนวดิ่งที่ผ่านจุดกึ่งกลาง สปริงที่มีspring constant $1850\\text{ N/m}$ ถูกติดไว้ในแนวระดับระหว่างปลายด้านหนึ่งของแท่งกับผนัง หากแท่งวัตถุถูกหมุนไปเล็กน้อยแล้วปล่อย Find periodของการแกว่งกวัดเพนดูลัมแรงบิดที่เกิดขึ้น",
        "formulas": [
          "I = \\frac{1}{12} M L^2",
          "\\kappa_{\\text{eff}} = \\frac{k L^2}{4}",
          "T = 2\\pi \\sqrt{\\frac{I}{\\kappa_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{M}{3k}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.17:**\nแท่งวัตถุมวล $M = 0.600\\text{ kg}$ หมุนรอบแกนผ่านจุดกึ่งกลาง $I = \\frac{1}{12} M L^2$\nทอร์กคืนตัวจากสปริงที่ปลายแท่ง $\\tau = -k \\left(\\frac{L}{2}\\right)^2 \\theta = -\\left(\\frac{k L^2}{4}\\right) \\theta \\implies \\kappa_{\\text{eff}} = \\frac{k L^2}{4}$\nคาบการแกว่งกวัด $$T = 2\\pi \\sqrt{\\frac{I}{\\kappa_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{M L^2 / 12}{k L^2 / 4}} = 2\\pi \\sqrt{\\frac{M}{3k}} = 2\\pi \\sqrt{\\frac{0.600}{3(1850)}} = 0.0653\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 3.17:**\nEffective torsion constant $\\kappa_{\\text{eff}} = k L^2 / 4$.\nPeriod $T = 2\\pi \\sqrt{\\frac{M}{3k}} = 2\\pi \\sqrt{\\frac{0.600}{3(1850)}} = 0.0653\\text{ s}$.",
        "hints": [
          "โมเมนต์ความเฉื่อยของแท่งหมุนรอบกึ่งกลาง $I = \\frac{1}{12} M L^2$",
          "ทอร์กคืนตัวจากสปริงที่ปลายแท่ง $\\tau = -k \\left(\\frac{L}{2}\\right)^2 \\theta \\implies \\kappa_{\\text{eff}} = \\frac{k L^2}{4}$ แล้วใช้ $T = 2\\pi \\sqrt{\\frac{I}{\\kappa_{\\text{eff}}}}$"
        ]
      },
      {
        "id": "p3_18",
        "num_in_lec": 18,
        "global_id": 40,
        "topic_th": "หัวข้อ 3.18",
        "topic_en": "Topic 3.18",
        "question_th": "ลูกบอลมวล $m$ ถูกต่อเข้ากับแถบยางสองเส้นที่มีความยาว $L$ ซึ่งแต่ละเส้นมีแรงดึง $T$ คงที่ตลอดเวลา เมื่อดึงลูกบอลให้กระจัดเป็นระยะทางเล็กน้อย $y$ ในแนวตั้งฉากกับความยาวของแถบยางแล้วปล่อย จงหาความถี่เชิงมุมของการเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายนี้",
        "question_en": "ลูกบอลมวล $m$ ถูกต่อเข้ากับแถบยางสองเส้นที่มีความยาว $L$ ซึ่งแต่ละเส้นมีแรงดึง $T$ คงที่ตลอดเวลา where ดึงลูกบอลให้กระจัดเป็นระยะทางเล็กน้อย $y$ ในแนวตั้งฉากกับความยาวของแถบยางแล้วปล่อย Find frequencyเชิงมุมของการเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายนี้",
        "formulas": [
          "F = -2 T \\left(\\frac{y}{L}\\right)",
          "m \\ddot{y} + \\frac{2T}{L} y = 0",
          "\\omega = \\sqrt{\\frac{2T}{m L}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.18:**\nมวล $m$ ถูกดึงขวางด้วยสายยางยืด 2 เส้น ยาว $L$ แรงดึง $T$:\nแรงคืนตัว $F = -2 T \\sin\\theta \\approx -2 T \\left(\\frac{y}{L}\\right) \\implies m \\ddot{y} + \\frac{2T}{L} y = 0 \\implies \\omega = \\sqrt{\\frac{2T}{m L}}$",
        "solution_en": "**Detailed Solution for Problem 3.18:**\nRestoring force $F = -2 T (y/L) \\implies \\omega = \\sqrt{\\frac{2T}{m L}}$.",
        "hints": [
          "แรงคืนตัวจากแถบยางยืด 2 เส้น $F = -2 T \\sin\\theta \\approx -2 T \\left(\\frac{y}{L}\\right)$",
          "จากสมการ $m \\ddot{y} + \\frac{2T}{L} y = 0$ จะได้ $\\omega = \\sqrt{\\frac{2T}{m L}}$"
        ]
      },
      {
        "id": "p3_19",
        "num_in_lec": 19,
        "global_id": 41,
        "topic_th": "หัวข้อ 3.19",
        "topic_en": "Topic 3.19",
        "question_th": "ก้อนมวล $0.60\\text{ kg}$ ติดอยู่กับสปริงที่มีค่าคงตัวสปริง $130\\text{ N/m}$ สามารถเคลื่อนที่ได้อย่างอิสระบนพื้นราบที่ไม่มีแรงเสียดทาน วัตถุถูกปล่อยจากหยุดนิ่งเมื่อสปริงยืดออก $0.13\\text{ m}$ ในขณะที่ปล่อยวัตถุ จงหา:(a) ขนาดของแรงที่กระทำต่อวัตถุ(b) ขนาดของความเร่งของวัตถุ",
        "question_en": "ก้อนมวล $0.60\\text{ kg}$ ติดอยู่กับสปริงที่มีspring constant $130\\text{ N/m}$ สามารถเคลื่อนที่ได้อย่างอิสระบนพื้นราบที่ไม่มีแรงเสียดทาน วัตถุถูกปล่อยจากหยุดนิ่งwhere สปริงยืดออก $0.13\\text{ m}$ ในขณะที่ปล่อยวัตถุ Find:(a) ขนาดของแรงที่กระทำต่อวัตถุ(b) ขนาดของความเร่งของวัตถุ",
        "formulas": [
          "F = k x",
          "a = \\frac{F}{m}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.19:**\nมวล $0.60\\text{ kg}$, $k = 130\\text{ N/m}$, ยืดออก $x = 0.13\\text{ m}$ แล้วปล่อย:\n(a) ขนาดของแรงคืนตัว $|F| = k x = 130 \\times 0.13 = 16.9\\text{ N}$\n(b) ขนาดของความเร่ง $|a| = \\frac{|F|}{m} = \\frac{16.9}{0.60} = 28.2\\text{ m/s}^2$",
        "solution_en": "**Detailed Solution for Problem 3.19:**\n(a) Force magnitude $|F| = k x = 16.9\\text{ N}$\n(b) Acceleration magnitude $|a| = |F|/m = 28.2\\text{ m/s}^2$",
        "hints": [
          "ขนาดของแรงคืนตัวเมื่อสปริงยืด $x$ คือ $|F| = k x$",
          "ขนาดของความเร่งหาจากกฎข้อที่สองของนิวตัน $|a| = \\frac{|F|}{m}$"
        ]
      },
      {
        "id": "p3_20",
        "num_in_lec": 20,
        "global_id": 42,
        "topic_th": "หัวข้อ 3.20",
        "topic_en": "Topic 3.20",
        "question_th": "วัตถุมวล $50.0\\text{ g}$ เชื่อมต่อกับสปริงที่มีค่าคงตัวสปริง $35.0\\text{ N/m}$ และแกว่งกวัดด้วยแอมพลิจูด $4.00\\text{ cm}$ บนพื้นราบที่ไม่มีแรงเสียดทาน จงหา:(a) พลังงานรวมของระบบ(b) อัตราเร็วของวัตถุเมื่อตำแหน่งของมันคือ $1.00\\text{ cm}$",
        "question_en": "วัตถุมวล $50.0\\text{ g}$ เชื่อมต่อกับสปริงที่มีspring constant $35.0\\text{ N/m}$ and แกว่งกวัดด้วยamplitude $4.00\\text{ cm}$ บนพื้นราบที่ไม่มีแรงเสียดทาน Find:(a) พลังงานรวมของระบบ(b) อัตราเร็วของวัตถุwhere ตำแหน่งของมันคือ $1.00\\text{ cm}$",
        "formulas": [
          "E = \\frac{1}{2} k A^2",
          "v(x) = \\sqrt{\\frac{k}{m}(A^2 - x^2)}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 3.20:**\nมวล $0.050\\text{ kg}$, $k = 35.0\\text{ N/m}$, $A = 0.040\\text{ m}$:\n(a) พลังงานกลรวม $E = \\frac{1}{2} k A^2 = \\frac{1}{2}(35.0)(0.040)^2 = 0.0280\\text{ J} = 28.0\\text{ mJ}$\n(b) อัตราเร็วที่ $x = 0.010\\text{ m}$: $v = \\sqrt{\\frac{k}{m}(A^2 - x^2)} = \\sqrt{\\frac{35.0}{0.050}(0.040^2 - 0.010^2)} = 1.025\\text{ m/s}$",
        "solution_en": "**Detailed Solution for Problem 3.20:**\n(a) Mechanical energy $E = \\frac{1}{2} k A^2 = 28.0\\text{ mJ}$\n(b) Speed at $x = 0.010\\text{ m}$: $v = \\sqrt{\\frac{k}{m}(A^2 - x^2)} = 1.025\\text{ m/s}$",
        "hints": [
          "พลังงานรวม $E = \\frac{1}{2} k A^2$",
          "อัตราเร็วที่ตำแหน่ง $x$ หาจากอนุรักษ์พลังงาน $E = \\frac{1}{2} m v^2 + \\frac{1}{2} k x^2 \\implies v = \\sqrt{\\frac{k}{m}(A^2 - x^2)}$"
        ]
      }
    ]
  },
  {
    "lecture": 4,
    "title_th": "Lecture 4: เพนดูลัมกายภาพและการประยุกต์ (Physical Pendulum & Applications)",
    "title_en": "Lecture 4: Physical Pendulum & Applications",
    "problems": [
      {
        "id": "p4_1",
        "num_in_lec": 1,
        "global_id": 43,
        "topic_th": "หัวข้อ 4.1",
        "topic_en": "Topic 4.1",
        "question_th": "สปริงสองตัวที่มีความยาวก่อนยืดเท่ากันแต่มีค่าคงตัวสปริง $k_1$ และ $k_2$ ต่างกัน ถูกนำมาติดกับก้อนมวล $m$ บนพื้นราบที่ไม่มีแรงเสียดทาน จงคำนวณหาค่าคงตัวสปริงยังผล (effective force constant) $k_{\\text{eff}}$ ในแต่ละกรณี:(a) ต่อแบบขนาน(b) ต่อแบบขนาน (คนละฝั่งของมวล)(c) ต่อแบบอนุกรม",
        "question_en": "สปริงสองตัวที่มีความยาวก่อนยืดเท่ากันแต่มีspring constant $k_1$ and  $k_2$ ต่างกัน ถูกนำมาติดกับก้อนมวล $m$ บนพื้นราบที่ไม่มีแรงเสียดทาน Calculate spring constantยังผล (effective force constant) $k_{\\text{eff}}$ ในแต่ละกรณี:(a) ต่อแบบขนาน(b) ต่อแบบขนาน (คนละฝั่งของมวล)(c) ต่อแบบอนุกรม",
        "formulas": [
          "k_{\\text{parallel}} = k_1 + k_2 \\quad (\\text{Same displacement } x)",
          "k_{\\text{series}} = \\frac{k_1 k_2}{k_1 + k_2} \\quad (\\text{Same force } F)"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.1:**\n(a) สปริงต่อขนาน (ฝั่งเดียวกัน): เมื่อวัตถุขยับ $x$ สปริงยืดเท่ากัน $x$\nแรงคืนตัวรวม $F = -k_1 x - k_2 x = -(k_1 + k_2)x \\implies k_{\\text{eff}} = k_1 + k_2$\n\n(b) สปริงต่อขนาน (คนละฝั่ง): เมื่อขยับ $x$ สปริงฝั่งหนึ่งหด $x$ อีกฝั่งยืด $x$\nแรงคืนตัวรวม $F = -k_1 x - k_2 x = -(k_1 + k_2)x \\implies k_{\\text{eff}} = k_1 + k_2$\n\n(c) สปริงต่ออนุกรม: แรงดึงในสปริงแต่ละตัวเท่ากับ $F$\nระยะขยับรวม $x = x_1 + x_2 = -F/k_1 - F/k_2 = -F(1/k_1 + 1/k_2) \\implies k_{\\text{eff}} = \\frac{k_1 k_2}{k_1 + k_2}$",
        "solution_en": "**Detailed Solution for Problem 4.1:**\n(a) Parallel (same side): $F = -(k_1 + k_2)x \\implies k_{\\text{eff}} = k_1 + k_2$.\n(b) Parallel (opposite sides): $F = -k_1 x - k_2 x = -(k_1 + k_2)x \\implies k_{\\text{eff}} = k_1 + k_2$.\n(c) Series: $x = x_1 + x_2 = -F(1/k_1 + 1/k_2) \\implies k_{\\text{eff}} = \\frac{k_1 k_2}{k_1 + k_2}$.",
        "hints": [
          "ต่อขนาน: แรงคืนตัวรวมเกิดจากสองสปริงขยับ $x$ เท่ากัน $F = -(k_1 + k_2)x$",
          "ต่ออนุกรม: แรงดึงในสปริงเท่ากัน $F = -k_1 x_1 = -k_2 x_2$ และระยะยืดรวม $x = x_1 + x_2$"
        ]
      },
      {
        "id": "p4_2",
        "num_in_lec": 2,
        "global_id": 44,
        "topic_th": "หัวข้อ 4.2",
        "topic_en": "Topic 4.2",
        "question_th": "สปริงสองตัวถูกนำมาต่อกันและเชื่อมต่อกับก้อนมวล $0.245\\text{ kg}$ ที่สามารถแกว่งกวัดบนพื้นราบที่ไม่มีแรงเสียดทาน หากสปริงแต่ละตัวมีค่าคงตัวสปริง $k = 6430\\text{ N/m}$ ความถี่ของการแกว่งกวัดของระบบนี้จะมีค่าเท่าใด?",
        "question_en": "สปริงสองตัวถูกนำมาต่อกันand เชื่อมต่อกับก้อนมวล $0.245\\text{ kg}$ ที่สามารถแกว่งกวัดบนพื้นราบที่ไม่มีแรงเสียดทาน หากสปริงแต่ละตัวมีspring constant $k = 6430\\text{ N/m}$ frequencyของการแกว่งกวัดของระบบนี้จะมีค่าเท่าใด?",
        "formulas": [
          "k_{\\text{eff}} = 2k \\quad (\\text{Parallel})",
          "f = \\frac{1}{2\\pi}\\sqrt{\\frac{k_{\\text{eff}}}{m}}"
        ],
        "solution_th": "**เฉลยละเอียด:**\nสมมติว่าสปริงทั้งสองต่อแบบขนาน ค่าคงตัวรวมคือ $k_{\\text{eff}} = 2(6430) = 12860\\text{ N/m}$\nความถี่ $f = \\frac{1}{2\\pi}\\sqrt{\\frac{12860}{0.245}} \\approx \\frac{229.1}{2\\pi} \\approx 36.5\\text{ Hz}$\n(หากต่อแบบอนุกรมจะได้ $k_{\\text{eff}} = k/2$ และ $f \\approx 18.2\\text{ Hz}$)",
        "solution_en": "**Detailed Solution:**\nAssuming the two springs are connected in parallel, the effective spring constant is $k_{\\text{eff}} = k + k = 2(6430) = 12860\\text{ N/m}$.\nFrequency $f = \\frac{1}{2\\pi}\\sqrt{\\frac{12860}{0.245}} = \\frac{1}{2\\pi}\\sqrt{52489.8} \\approx \\frac{229.1}{2\\pi} \\approx 36.5\\text{ Hz}$.\n(If connected in series, $k_{\\text{eff}} = k/2 = 3215\\text{ N/m}$, giving $f \\approx 18.2\\text{ Hz}$.)",
        "hints": [
          "สมมติว่าสปริงทั้งสองต่อแบบขนานกัน ค่าคงตัวสปริงรวมจะเท่ากับ $2k$",
          "คำนวณความถี่จากสมการ $f = \\frac{1}{2\\pi}\\sqrt{\\frac{k_{\\text{eff}}}{m}}$"
        ]
      },
      {
        "id": "p4_3",
        "num_in_lec": 3,
        "global_id": 45,
        "topic_th": "หัวข้อ 4.3",
        "topic_en": "Topic 4.3",
        "question_th": "พิจารณาเพนดูลัมกายภาพ (physical pendulum) หากให้โมเมนต์ความเฉื่อยรอบแกนที่ผ่านจุดศูนย์กลางมวลและขนานกับแกนหมุนมีค่าเป็น $I_{\\text{CM}}$ และ $d$ คือระยะห่างระหว่างจุดหมุนกับจุดศูนย์กลางมวล จงหาเงื่อนไขของระยะห่าง $d$ ที่ทำให้คาบของการแกว่งกวัดมีค่าน้อยที่สุด",
        "question_en": "พิจารณาเพนดูลัมกายภาพ (physical pendulum) หากให้โมเมนต์ความเฉื่อยรอบแกนที่ผ่านจุดศูนย์กลางมวลand ขนานกับแกนหมุนมีค่าเป็น $I_{\\text{CM}}$ and  $d$ คือระยะห่างระหว่างจุดหมุนกับจุดศูนย์กลางมวล Find เงื่อนไขของระยะห่าง $d$ ที่ทำให้periodของการแกว่งกวัดมีค่าน้อยที่สุด",
        "formulas": [
          "I_{\\text{pivot}} = I_{\\text{CM}} + M R^2 = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
          "d = R \\quad (\\text{Distance from Rim Pivot to CM})",
          "T = 2\\pi \\sqrt{\\frac{I}{M g d}} = 2\\pi \\sqrt{\\frac{3R}{2g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.3:**\nโมเมนต์ความเฉื่อยรอบจุดหมุน $I = I_{\\text{CM}} + m d^2$\nคาบของการแกว่งกวัด $$T = 2\\pi \\sqrt{\\frac{I_{\\text{CM}} + m d^2}{mgd}} = 2\\pi \\sqrt{\\frac{1}{g}\\left(\\frac{I_{\\text{CM}}}{md} + d\\right)}$$\nเงื่อนไขที่ทำให้ $T$ มีค่าน้อยที่สุดคือค่าในเครื่องหมาย جذر มีค่าน้อยที่สุด:\n$$\\frac{d}{dd}\\left(\\frac{I_{\\text{CM}}}{md} + d\\right) = -\\frac{I_{\\text{CM}}}{md^2} + 1 = 0 \\implies d = \\sqrt{\\frac{I_{\\text{CM}}}{m}}$$",
        "solution_en": "**Detailed Solution for Problem 4.3:**\nFrom parallel axis theorem $I = I_{\\text{CM}} + md^2$.\nPeriod $T = 2\\pi \\sqrt{\\frac{I_{\\text{CM}} + md^2}{mgd}}$.\nMinimizing $T$ with respect to $d$ gives $\\frac{d}{dd}\\left(\\frac{I_{\\text{CM}}}{md} + d\\right) = 0 \\implies d = \\sqrt{\\frac{I_{\\text{CM}}}{m}}$.",
        "hints": [
          "ทฤษฎีแกนขนาน $I = I_{\\text{CM}} + m d^2$",
          "คาบ $T = 2\\pi \\sqrt{\\frac{I}{mgd}}$ หาจุดต่ำสุดโดยอนุพันธ์เทียบกับ $d$"
        ]
      },
      {
        "id": "p4_4",
        "num_in_lec": 4,
        "global_id": 46,
        "topic_th": "หัวข้อ 4.4",
        "topic_en": "Topic 4.4",
        "question_th": "ลูกบาศก์มวล $3.00\\text{ kg}$ มีความยาวขอบ $L = 1.85\\text{ m}$ ถูกจัดให้แกว่งแบบเพนดูลัมกายภาพ จงหาระยะห่าง $x$ ระหว่างจุดศูนย์กลางมวลและจุดหมุน O ที่ทำให้คาบของการแกว่งกวัดมีค่าน้อยที่สุด",
        "question_en": "ลูกบาศก์มวล $3.00\\text{ kg}$ มีความยาวขอบ $L = 1.85\\text{ m}$ ถูกจัดให้แกว่งแบบเพนดูลัมกายภาพ Find ระยะห่าง $x$ ระหว่างจุดศูนย์กลางมวลand จุดหมุน O ที่ทำให้periodของการแกว่งกวัดมีค่าน้อยที่สุด",
        "formulas": [
          "I_{\\text{CM}} = 4\\left(\\frac{1}{12}m L^2\\right) + 4m\\left(\\frac{L}{2}\\right)^2 = \\frac{4}{3} m L^2",
          "d = \\frac{\\sqrt{2}}{2} L, \\quad M_{\\text{total}} = 4m",
          "I_{\\text{pivot}} = I_{\\text{CM}} + M_{\\text{total}} d^2 = \\frac{10}{3} m L^2",
          "T = 2\\pi \\sqrt{\\frac{I}{M_{\\text{total}} g d}} = 2\\pi \\sqrt{\\frac{5\\sqrt{2} L}{6g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.4:**\nลูกบาศก์มวล $m = 3.00\\text{ kg}$ ความยาวขอบ $L = 1.85\\text{ m}$\nโมเมนต์ความเฉื่อยรอบแกนหมุนผ่านจุดศูนย์กลางมวล $I_{\\text{CM}} = \\frac{1}{6} m L^2$\nจากผลในข้อ 4.3 ระยะทาง $x$ จาก CM ถึงจุดหมุนที่ทำให้คาบมีค่าน้อยที่สุดคือ:\n$$x = \\sqrt{\\frac{I_{\\text{CM}}}{m}} = \\sqrt{\\frac{\\frac{1}{6} m L^2}{m}} = \\frac{L}{\\sqrt{6}} = \\frac{1.85}{\\sqrt{6}} \\approx 0.755\\text{ m}$$",
        "solution_en": "**Detailed Solution for Problem 4.4:**\nCube of side $L = 1.85\\text{ m}$. Moment of inertia $I_{\\text{CM}} = \\frac{1}{6} m L^2$.\nMinimum period distance $$x = \\sqrt{\\frac{I_{\\text{CM}}}{m}} = \\frac{L}{\\sqrt{6}} = \\frac{1.85}{\\sqrt{6}} \\approx 0.755\\text{ m}$$",
        "hints": [
          "โมเมนต์ความเฉื่อยของลูกบาศก์รอบแกนผ่าน CM คือ $I_{\\text{CM}} = \\frac{1}{6} m L^2$",
          "ระยะที่คาบต่ำสุดคือ $x = \\sqrt{I_{\\text{CM}}/m}$"
        ]
      },
      {
        "id": "p4_5",
        "num_in_lec": 5,
        "global_id": 47,
        "topic_th": "หัวข้อ 4.5",
        "topic_en": "Topic 4.5",
        "question_th": "แผ่นกลมมวล $2.50\\text{ kg}$ และมีเส้นผ่านศูนย์กลาง $D = 42.0\\text{ cm}$ ถูกรองรับด้วยแท่งวัตถุยาว $L = 76.0\\text{ cm}$ ที่มีมวลน้อยมากและสามารถแกว่งได้รอบปลายด้านหนึ่ง หากไม่มีการบิด คาบของการแกว่งกวัดจะมีค่าเท่าใด?",
        "question_en": "แผ่นกลมมวล $2.50\\text{ kg}$ and มีเส้นผ่านศูนย์กลาง $D = 42.0\\text{ cm}$ ถูกรองรับด้วยแท่งวัตถุยาว $L = 76.0\\text{ cm}$ ที่มีมวลน้อยมากand สามารถแกว่งได้รอบปลายด้านหนึ่ง หากไม่มีการบิด periodของการแกว่งกวัดจะมีค่าเท่าใด?",
        "formulas": [
          "T(d) = 2\\pi \\sqrt{\\frac{I_{\\text{CM}} + m d^2}{m g d}}",
          "\\frac{dT}{dd} = 0 \\implies d_{\\min} = \\sqrt{\\frac{I_{\\text{CM}}}{m}}",
          "d_{\\min} = \\frac{L}{2\\sqrt{3}} \\approx 0.289 L \\quad (\\text{For Uniform Rod Length } L)"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.5:**\nแผ่นกลมรัศมี $R = \\frac{0.420}{2} = 0.210\\text{ m}$, แขวนด้วยแท่งวัตถุยาว $L = 0.760\\text{ m}$\nระยะจากจุดหมุนถึงจุด CM ของแผ่นกลม $d = L + R = 0.760 + 0.210 = 0.970\\text{ m}$\nโมเมนต์ความเฉื่อยรวมรอบจุดหมุน $$I = \\frac{1}{2} m R^2 + m d^2 = m\\left(\\frac{0.210^2}{2} + 0.970^2\\right) = m(0.02205 + 0.9409) = 0.96295 m$$\nคาบของการแกว่งกวัด $$T = 2\\pi \\sqrt{\\frac{I}{mgd}} = 2\\pi \\sqrt{\\frac{0.96295 m}{m(9.80)(0.970)}} = 2\\pi \\sqrt{0.1013} \\approx 2.00\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 4.5:**\nDisk radius $R = 0.210\\text{ m}$, rod length $L = 0.760\\text{ m} \\implies d = 0.970\\text{ m}$.\nMoment of inertia $I = m(\\frac{1}{2}R^2 + d^2) = 0.96295 m$.\nPeriod $$T = 2\\pi \\sqrt{\\frac{0.96295}{9.80 \\times 0.970}} \\approx 2.00\\text{ s}$$",
        "hints": [
          "ระยะจากจุดหมุนถึงศูนย์กลางแผ่นกลม $d = L + R$",
          "โมเมนต์ความเฉื่อย $I = \\frac{1}{2}mR^2 + md^2$ และคาบ $T = 2\\pi \\sqrt{\\frac{I}{mgd}}$"
        ]
      },
      {
        "id": "p4_6",
        "num_in_lec": 6,
        "global_id": 48,
        "topic_th": "หัวข้อ 4.6",
        "topic_en": "Topic 4.6",
        "question_th": "ก้อนมวล $m$ ถูกเชื่อมต่อกับสปริงสองตัวที่มีค่าคงตัวสปริง $k_1$ และ $k_2$ ใน 2 รูปแบบ (แบบอนุกรม และ แบบขนาน) ในทั้งสองกรณี ก้อนมวลสามารถเคลื่อนที่บนโต๊ะที่ไม่มีแรงเสียดทานหลังจากถูกดึงออกจากตำแหน่งสมดุลแล้วปล่อย จงหาคาบของการเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายสำหรับแต่ละกรณี",
        "question_en": "ก้อนมวล $m$ ถูกเชื่อมต่อกับสปริงสองตัวที่มีspring constant $k_1$ and  $k_2$ ใน 2 รูปแบบ (แบบอนุกรม and  แบบขนาน) ในทั้งสองกรณี ก้อนมวลสามารถเคลื่อนที่บนโต๊ะที่ไม่มีแรงเสียดทานหลังจากถูกดึงออกจากตำแหน่งสมดุลแล้วปล่อย Find period of motionแบบฮาร์มอนิกอย่างง่ายสำหรับแต่ละกรณี",
        "formulas": [
          "K_{\\text{total}} = \\frac{1}{2} M v^2 + \\frac{1}{2} I \\omega^2 = \\frac{1}{2} M v^2 + \\frac{1}{2}\\left(\\frac{1}{2}M R^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{3}{4} M v^2",
          "M_{\\text{eff}} = \\frac{3}{2} M",
          "\\omega = \\sqrt{\\frac{k}{M_{\\text{eff}}}} = \\sqrt{\\frac{2k}{3M}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.6:**\n(a) เมื่อต่อสปริงแบบอนุกรม: $k_{\\text{eff}} = \\frac{k_1 k_2}{k_1 + k_2}$\nคาบของการแกว่งกวัด $$T = 2\\pi \\sqrt{\\frac{m}{k_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{m(k_1 + k_2)}{k_1 k_2}}$$\n(b) เมื่อต่อสปริงแบบขนาน: $k_{\\text{eff}} = k_1 + k_2$\nคาบของการแกว่งกวัด $$T = 2\\pi \\sqrt{\\frac{m}{k_1 + k_2}}$$",
        "solution_en": "**Detailed Solution for Problem 4.6:**\n(a) Series: $k_{\\text{eff}} = \\frac{k_1 k_2}{k_1 + k_2} \\implies T = 2\\pi \\sqrt{\\frac{m(k_1+k_2)}{k_1 k_2}}$.\n(b) Parallel: $k_{\\text{eff}} = k_1 + k_2 \\implies T = 2\\pi \\sqrt{\\frac{m}{k_1 + k_2}}$.",
        "hints": [
          "อนุกรม: $k_{\\text{eff}} = \\frac{k_1 k_2}{k_1 + k_2} \\implies T = 2\\pi\\sqrt{\\frac{m(k_1+k_2)}{k_1 k_2}}$",
          "ขนาน: $k_{\\text{eff}} = k_1 + k_2 \\implies T = 2\\pi\\sqrt{\\frac{m}{k_1 + k_2}}$"
        ]
      },
      {
        "id": "p4_7",
        "num_in_lec": 7,
        "global_id": 49,
        "topic_th": "หัวข้อ 4.7",
        "topic_en": "Topic 4.7",
        "question_th": "แผ่นกระดานในแนวระดับมวล $m$ และความยาว $L$ มีจุดหมุนอยู่ที่ปลายด้านหนึ่ง ส่วนปลายอีกด้านถูกรองรับด้วยสปริงที่มีค่าคงตัวสปริง $k$ เมื่อแผ่นกระดานถูกกดให้ทำมุมขนาดเล็ก $\\theta$ จากตำแหน่งสมดุลในแนวระดับแล้วปล่อย จงหาความถี่เชิงมุมของการเคลื่อนที่นี้",
        "question_en": "แผ่นกระดานในแนวระดับมวล $m$ and ความยาว $L$ มีจุดหมุนอยู่ที่ปลายด้านหนึ่ง ส่วนปลายอีกด้านถูกรองรับด้วยสปริงที่มีspring constant $k$ where แผ่นกระดานถูกกดให้ทำมุมขนาดเล็ก $\\theta$ จากตำแหน่งสมดุลในแนวระดับแล้วปล่อย Find frequencyเชิงมุมของการเคลื่อนที่นี้",
        "formulas": [
          "\\tau = -k L^2 \\theta",
          "I = \\frac{1}{3} m L^2",
          "\\omega = \\sqrt{\\frac{3k}{m}}"
        ],
        "solution_th": "**เฉลยละเอียด:**\nกระดานหมุนรอบปลาย โมเมนต์ความเฉื่อย $I = \\frac{1}{3}mL^2$\nทอร์กคืนตัวจากสปริง $\\tau = -F L = -(kL\\theta)L = -kL^2\\theta$\nสมการนิวตัน $\\frac{1}{3}mL^2 \\ddot{\\theta} = -kL^2\\theta \\implies \\ddot{\\theta} = -\\frac{3k}{m}\\theta$\nความถี่เชิงมุม $\\omega = \\sqrt{\\frac{3k}{m}}$",
        "solution_en": "**Detailed Solution:**\nFor a plank of mass $m$ and length $L$ pivoted at one end, moment of inertia is $I = \\frac{1}{3}mL^2$.\nWhen depressed by angle $\\theta$, the spring at distance $L$ stretches by $x = L\\theta$.\nThe restoring torque is $\\tau = -F_{spring} L = -(kL\\theta)L = -kL^2\\theta$.\nEquation of motion: $\\frac{1}{3}mL^2 \\ddot{\\theta} = -kL^2\\theta \\implies \\ddot{\\theta} + \\frac{3k}{m}\\theta = 0$.\nAngular frequency $\\omega = \\sqrt{\\frac{3k}{m}}$.",
        "hints": [
          "หาทอร์กคืนตัวรอบจุดหมุน $\\tau = -F L = -(kx)L$ โดยระยะยืด $x = L\\theta$",
          "ใช้สมการการเคลื่อนที่เชิงมุม $\\tau = I\\ddot{\\theta}$ โดย $I = \\frac{1}{3}mL^2$ สำหรับแผ่นกระดาน"
        ]
      },
      {
        "id": "p4_8",
        "num_in_lec": 8,
        "global_id": 50,
        "topic_th": "หัวข้อ 4.8",
        "topic_en": "Topic 4.8",
        "question_th": "แท่งวัตถุบางสม่ำเสมอสองแท่ง ซึ่งแต่ละแท่งมีมวล $m$ และความยาว $L$ ถูกนำมาเชื่อมต่อกันเป็นมุมฉากเพื่อสร้างวัตถุรูปตัวแอล (L) วัตถุนี้ถูกวางสมดุลอยู่บนขอบมีดที่แหลมคม หากวัตถุรูปตัวแอลนี้ถูกทำให้เบี่ยงเบนไปเล็กน้อยแล้วปล่อยให้แกว่งกวัด จงหาความถี่ของการแกว่งกวัดนี้",
        "question_en": "แท่งวัตถุบางสม่ำเสมอสองแท่ง ซึ่งแต่ละแท่งมีมวล $m$ and ความยาว $L$ ถูกนำมาเชื่อมต่อกันเป็นมุมฉากเพื่อสร้างวัตถุรูปตัวแอล (L) วัตถุนี้ถูกวางสมดุลอยู่บนขอบมีดที่แหลมคม หากวัตถุรูปตัวแอลนี้ถูกทำให้เบี่ยงเบนไปเล็กน้อยแล้วปล่อยให้แกว่งกวัด Find frequencyของการแกว่งกวัดนี้",
        "formulas": [
          "I = \\frac{2}{3} m L^2",
          "d = \\frac{L}{2\\sqrt{2}}",
          "\\omega = \\sqrt{\\frac{M_{tot} g d}{I}} = \\sqrt{\\frac{3\\sqrt{2} g}{4 L}}"
        ],
        "solution_th": "**เฉลยละเอียด:**\nมวลรวม $M = 2m$ โมเมนต์ความเฉื่อย $I = \\frac{2}{3}mL^2$\nพิกัด CM รวมอยู่ที่ $(L/4, L/4)$ ระยะห่างจากจุดหมุน $d = \\frac{L}{2\\sqrt{2}}$\n$\\omega = \\sqrt{\\frac{Mgd}{I}} = \\sqrt{\\frac{(2m)g(L/2\\sqrt{2})}{\\frac{2}{3}mL^2}} = \\sqrt{\\frac{3\\sqrt{2}g}{4L}}$\nความถี่ $f = \\frac{1}{2\\pi} \\sqrt{\\frac{3\\sqrt{2}g}{4L}}$",
        "solution_en": "**Detailed Solution:**\nThe L-shaped rod consists of two arms, each of mass $m$ and length $L$. Total mass $M = 2m$.\nMoment of inertia about corner pivot $I = \\frac{1}{3}mL^2 + \\frac{1}{3}mL^2 = \\frac{2}{3}mL^2$.\nCenter of mass of each rod is at distance $L/2$ from corner along its axis. The combined CM distance $d$ from corner is $d = \\sqrt{(L/4)^2 + (L/4)^2} = \\frac{L}{2\\sqrt{2}}$.\nAngular frequency $\\omega = \\sqrt{\\frac{Mgd}{I}} = \\sqrt{\\frac{(2m)g(L/2\\sqrt{2})}{\\frac{2}{3}mL^2}} = \\sqrt{\\frac{3g}{2\\sqrt{2}L}} = \\sqrt{\\frac{3\\sqrt{2}g}{4L}}$.\nFrequency $f = \\frac{1}{2\\pi} \\sqrt{\\frac{3\\sqrt{2}g}{4L}}$.",
        "hints": [
          "โมเมนต์ความเฉื่อยรวมของแท่งทั้งสองรอบจุดยอดคือ $I = \\frac{1}{3}mL^2 + \\frac{1}{3}mL^2 = \\frac{2}{3}mL^2$",
          "ระยะจุดศูนย์กลางมวลรวมจากจุดหมุน $d = \\sqrt{(L/4)^2 + (L/4)^2} = \\frac{L}{2\\sqrt{2}}$"
        ]
      },
      {
        "id": "p4_9",
        "num_in_lec": 9,
        "global_id": 51,
        "topic_th": "หัวข้อ 4.9",
        "topic_en": "Topic 4.9",
        "question_th": "ก้อนมวลน้ำหนัก $14.0\\text{ N}$ สามารถไถลโดยไม่มีแรงเสียดทานบนพื้นเอียงทำมุม $40.0^\\circ$ ก้อนมวลนี้ถูกเชื่อมต่อกับจุดยอดของพื้นเอียงด้วยสปริงที่ไม่มีมวลซึ่งมีความยาวปกติ $0.450\\text{ m}$ และค่าคงตัวสปริง $120\\text{ N/m}$ หากดึงก้อนมวลลงไปตามพื้นเอียงเล็กน้อยแล้วปล่อย คาบของการสั่นที่เกิดขึ้นจะมีค่าเท่าใด?",
        "question_en": "ก้อนมวลน้ำหนัก $14.0\\text{ N}$ สามารถไถลโดยไม่มีแรงเสียดทานบนพื้นเอียงทำมุม $40.0^\\circ$ ก้อนมวลนี้ถูกเชื่อมต่อกับจุดยอดของพื้นเอียงด้วยสปริงที่ไม่มีมวลซึ่งมีความยาวปกติ $0.450\\text{ m}$ and spring constant $120\\text{ N/m}$ หากดึงก้อนมวลลงไปตามพื้นเอียงเล็กน้อยแล้วปล่อย periodของการสั่นที่เกิดขึ้นจะมีค่าเท่าใด?",
        "formulas": [
          "F_{\\text{buoyant}} = -\\rho A g y",
          "M \\ddot{y} + \\rho A g y = 0 \\implies T = 2\\pi \\sqrt{\\frac{M}{\\rho A g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.9:**\nวัตถุมวล $m$ บนระนาบเอียง $40.0^\\circ$ ติดกับสปริง $k$\nสมการการเคลื่อนที่ตามแนวระนาบเอียง: $m \\ddot{x} = -k x + m g \\sin 40^\\circ$\nให้ $y = x - \\frac{mg\\sin 40^\\circ}{k}$ จะได้ $m \\ddot{y} + k y = 0$\nความถี่เชิงมุมของการแกว่งกวัดคือ $\\omega = \\sqrt{\\frac{k}{m}}$ และคาบของการเคลื่อนที่คือ $$T = 2\\pi \\sqrt{\\frac{m}{k}}$$",
        "solution_en": "**Detailed Solution for Problem 4.9:**\nMass $m$ on $40^\\circ$ incline attached to spring $k$.\nGravity only shifts equilibrium position. The effective restoring force constant remains $k$.\nPeriod $$T = 2\\pi \\sqrt{\\frac{m}{k}}$$",
        "hints": [
          "แรงโน้มถ่วงตามแนวระนาบเอียงเป็นเพียงตัวกำหนดจุดสมดุลใหม่ $x_{\\text{eq}} = \\frac{mg\\sin\\theta}{k}$",
          "ค่าคงตัวแรงคืนตัวคงที่เท่ากับ $k$ ทำให้คาบ $T = 2\\pi\\sqrt{\\frac{m}{k}}$ ไม่ขึ้นกับมุมเอียง"
        ]
      },
      {
        "id": "p4_10",
        "num_in_lec": 10,
        "global_id": 52,
        "topic_th": "หัวข้อ 4.10",
        "topic_en": "Topic 4.10",
        "question_th": "วัตถุรูปสี่เหลี่ยมจัตุรัสมวล $m$ ถูกสร้างขึ้นจากแท่งวัตถุบางสม่ำเสมอสี่แท่งที่เหมือนกันทุกประการ โดยแต่ละแท่งมีความยาว $L$ ประกอบเข้าด้วยกัน วัตถุนี้ถูกแขวนไว้กับตะขอที่มุมด้านบน หากหมุนวัตถุไปทางซ้ายเล็กน้อยแล้วปล่อย ความถี่เชิงมุมของการแกว่งกวัดกลับไปกลับมาจะมีค่าเท่าใด?",
        "question_en": "วัตถุรูปสี่เหลี่ยมจัตุรัสมวล $m$ ถูกสร้างขึ้นจากแท่งวัตถุบางสม่ำเสมอสี่แท่งที่เหมือนกันทุกประการ โดยแต่ละแท่งมีความยาว $L$ ประกอบเข้าด้วยกัน วัตถุนี้ถูกแขวนไว้กับตะขอที่มุมด้านบน หากหมุนวัตถุไปทางซ้ายเล็กน้อยแล้วปล่อย frequencyเชิงมุมของการแกว่งกวัดกลับไปกลับมาจะมีค่าเท่าใด?",
        "formulas": [
          "m v_0 = (M+m) v_1 \\implies v_1 = \\frac{m v_0}{M+m} \\quad (\\text{Inelastic Collision})",
          "A = \\frac{v_1}{\\omega} = \\frac{m v_0}{M+m} \\sqrt{\\frac{L}{g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.10:**\nกรอบสี่เหลี่ยมประกอบด้วยแท่งวัตถุยาว $L$ มวล $M$ จำนวน 4 แท่ง มวลรวม $4M$\nระยะจากมุมหมุนถึงศูนย์กลางมวล $d = \\frac{L}{\\sqrt{2}}$\nโมเมนต์ความเฉื่อยรวมรอบมุมหมุน:\n- แท่งติดจุดหมุน 2 แท่ง: $2 \\times \\frac{1}{3} M L^2 = \\frac{2}{3} M L^2$\n- แท่งฝั่งตรงข้าม 2 แท่ง: $2 \\times \\left(\\frac{1}{12} M L^2 + M\\left(L^2 + (L/2)^2\\right)\\right) = 2 \\times \\frac{5}{4} M L^2 = \\frac{8}{3} M L^2$\nรวม $I = \\frac{2}{3} M L^2 + \\frac{8}{3} M L^2 = \\frac{10}{3} M L^2$\nคาบของการแกว่งกวัด $$T = 2\\pi \\sqrt{\\frac{I}{(4M)gd}} = 2\\pi \\sqrt{\\frac{\\frac{10}{3} M L^2}{4M g \\frac{L}{\\sqrt{2}}}} = 2\\pi \\sqrt{\\frac{5\\sqrt{2} L}{6g}}$$",
        "solution_en": "**Detailed Solution for Problem 4.10:**\nSquare frame of 4 rods pivoted at corner. Total mass $4M$.\nTotal moment of inertia $I = \\frac{10}{3} M L^2$. CM distance $d = \\frac{L}{\\sqrt{2}}$.\nPeriod $$T = 2\\pi \\sqrt{\\frac{\\frac{10}{3}ML^2}{4Mg \\frac{L}{\\sqrt{2}}}} = 2\\pi \\sqrt{\\frac{5\\sqrt{2}L}{6g}}$$",
        "hints": [
          "กรอบสี่เหลี่ยมประกอบด้วยแท่งวัตถุ 4 แท่ง มวลรวม $4M$",
          "คำนวณโมเมนต์ความเฉื่อยรวมรอบมุมหมุน $I = \\frac{10}{3} M L^2$ และระยะ $d = \\frac{L}{\\sqrt{2}}$"
        ]
      },
      {
        "id": "p4_11",
        "num_in_lec": 11,
        "global_id": 53,
        "topic_th": "หัวข้อ 4.11",
        "topic_en": "Topic 4.11",
        "question_th": "แผ่นกลมขนาดเล็กรัศมี $r$ และมวล $m$ ถูกยึดติดแน่นกับพื้นผิวของแผ่นกลมขนาดใหญ่รัศมี $R$ และมวล $M$ จุดศูนย์กลางของแผ่นกลมขนาดเล็กอยู่ที่ขอบของแผ่นกลมขนาดใหญ่พอดี แผ่นกลมขนาดใหญ่ถูกติดตั้งให้หมุนรอบจุดศูนย์กลางของมันบนแกนที่ไม่มีแรงเสียดทาน เมื่อหมุนระบบนี้ด้วยมุมขนาดเล็ก $\\theta$ จากตำแหน่งสมดุลแล้วปล่อย จงหาคาบของการแกว่งกวัดที่เกิดขึ้น",
        "question_en": "แผ่นกลมขนาดเล็กรัศมี $r$ and มวล $m$ ถูกยึดติดแน่นกับพื้นผิวของแผ่นกลมขนาดใหญ่รัศมี $R$ and มวล $M$ จุดศูนย์กลางของแผ่นกลมขนาดเล็กอยู่ที่ขอบของแผ่นกลมขนาดใหญ่พอดี แผ่นกลมขนาดใหญ่ถูกติดตั้งให้หมุนรอบจุดศูนย์กลางของมันบนแกนที่ไม่มีแรงเสียดทาน where หมุนระบบนี้ด้วยมุมขนาดเล็ก $\\theta$ จากตำแหน่งสมดุลแล้วปล่อย Find periodของการแกว่งกวัดที่เกิดขึ้น",
        "formulas": [
          "I_{tot} = \\frac{1}{2} M R^2 + \\left(\\frac{1}{2} m r^2 + m R^2\\right)",
          "d_{CM} = \\frac{m R}{M + m}",
          "T = 2\\pi \\sqrt{\\frac{I_{tot}}{(M+m) g d_{CM}}}"
        ],
        "solution_th": "**เฉลยละเอียด:**\nโมเมนต์ความเฉื่อยรวม $I = \\frac{1}{2} M R^2 + (\\frac{1}{2} m r^2 + m R^2)$\nระยะศูนย์กลางมวลรวม $d_{CM} = \\frac{mR}{M+m}$\nคาบ $T = 2\\pi \\sqrt{\\frac{I}{(M+m) g d_{CM}}} = 2\\pi \\sqrt{\\frac{M R^2 + m r^2 + 2m R^2}{2 m g R}}$",
        "solution_en": "**Detailed Solution:**\nPivot is the center of the large disk.\nMoment of inertia of large disk $I_M = \\frac{1}{2} M R^2$.\nMoment of inertia of small disk about pivot (using parallel axis theorem) $I_m = \\frac{1}{2} m r^2 + m R^2$.\nTotal $I = \\frac{1}{2} M R^2 + \\frac{1}{2} m r^2 + m R^2$.\nCenter of mass distance from pivot: $d_{CM} = \\frac{mR}{M+m}$.\nPeriod $T = 2\\pi \\sqrt{\\frac{I}{(M+m) g d_{CM}}} = 2\\pi \\sqrt{\\frac{\\frac{1}{2} M R^2 + m (\\frac{1}{2} r^2 + R^2)}{m g R}}$.",
        "hints": [
          "โมเมนต์ความเฉื่อยรวม $I = I_{large} + I_{small}$ โดยอ้างอิงทฤษฎีบทแกนขนานสำหรับแผ่นเล็ก",
          "ระยะจุดศูนย์กลางมวลรวมจากจุดหมุน $d_{CM} = \\frac{M(0) + m(R)}{M+m}$"
        ]
      },
      {
        "id": "p4_12",
        "num_in_lec": 12,
        "global_id": 54,
        "topic_th": "หัวข้อ 4.12",
        "topic_en": "Topic 4.12",
        "question_th": "เรือมวล $1500\\text{ kg}$ ผูกอยู่กับท่าเรือกำลังลอยขึ้นลงตามคลื่นแบบฮาร์มอนิกอย่างง่ายด้วยแอมพลิจูด $20\\text{ cm}$ และมีคาบการลอย $3.50\\text{ s}$ เมื่อเรืออยู่ที่จุดสูงสุด ดาดฟ้าเรือจะอยู่ในระดับเดียวกับท่าเรือพอดี หากคุณต้องการขึ้นเรืออย่างปลอดภัยเฉพาะในช่วงที่ระดับดาดฟ้าเรืออยู่ห่างจากระดับท่าเรือไม่เกิน $10\\text{ cm}$ คุณจะมีเวลาในการขึ้นเรือเท่าใดในแต่ละรอบของการลอยขึ้นลง?",
        "question_en": "เรือมวล $1500\\text{ kg}$ ผูกอยู่กับท่าเรือกำลังลอยขึ้นลงตามคลื่นแบบฮาร์มอนิกอย่างง่ายด้วยamplitude $20\\text{ cm}$ and มีperiodการลอย $3.50\\text{ s}$ where เรืออยู่ที่จุดสูงสุด ดาดฟ้าเรือจะอยู่ในระดับเดียวกับท่าเรือพอดี หากคุณต้องการขึ้นเรืออย่างปลอดภัยเฉพาะในช่วงที่ระดับดาดฟ้าเรืออยู่ห่างจากระดับท่าเรือไม่เกิน $10\\text{ cm}$ คุณจะมีเวลาในการขึ้นเรือเท่าใดในแต่ละรอบของการลอยขึ้นลง?",
        "formulas": [
          "y(t) = A \\cos\\left(\\frac{2\\pi}{T} t\\right)",
          "t_1 = \\frac{T}{2\\pi} \\arccos\\left(\\frac{y_0}{A}\\right)",
          "\\Delta t = 2 t_1"
        ],
        "solution_th": "**เฉลยละเอียด:**\nเรือเคลื่อนที่แบบ SHM แนวตั้ง $y(t) = A\\cos(\\omega t)$ โดย $A = 20\\text{ cm}$\nขึ้นเรืออย่างปลอดภัยเมื่อ $y \\ge 10\\text{ cm}$\n$10 = 20\\cos(\\omega t) \\implies \\cos(\\omega t) = 0.5 \\implies \\omega t = \\pi/3$\nเวลาตั้งแต่จุดสูงสุดถึง $10\\text{ cm}$ คือ $t = \\frac{T}{6}$\nเวลารวมในหนึ่งรอบคือ $2t = \\frac{T}{3} = \\frac{3.50}{3} \\approx 1.17\\text{ s}$",
        "solution_en": "**Detailed Solution:**\nBoat executes SHM: $y(t) = A\\cos(\\omega t)$ with $A = 20\\text{ cm}$ and $T = 3.50\\text{ s}$.\nSafe boarding requires $y(t) \\ge 10\\text{ cm}$.\n$10 = 20\\cos(\\omega t_1) \\implies \\cos(\\omega t_1) = 0.5 \\implies \\omega t_1 = \\pi/3$.\nTime $t_1 = \\frac{\\pi/3}{2\\pi/T} = \\frac{T}{6}$.\nTotal safe time per cycle is $2 t_1 = \\frac{T}{3} = \\frac{3.50}{3} = 1.167\\text{ s}$.",
        "hints": [
          "สมการการขจัดในแนวดิ่ง $y(t) = (0.20\\text{ m}) \\cos\\left(\\frac{2\\pi}{3.50} t\\right)$",
          "หาเวลาที่เรืออยู่เหนือ $0.10\\text{ m}$ ซึ่งคือ $\\cos(\\omega t) \\ge 0.5$"
        ]
      },
      {
        "id": "p4_13",
        "num_in_lec": 13,
        "global_id": 55,
        "topic_th": "หัวข้อ 4.13",
        "topic_en": "Topic 4.13",
        "question_th": "ก้อนมวล $2.00\\text{ kg}$ แขวนอยู่กับสปริงเส้นหนึ่ง เมื่อนำวัตถุมวล $300\\text{ g}$ มาแขวนเพิ่มใต้ก้อนมวลนี้ พบว่าสปริงยืดออกไปอีก $2.00\\text{ cm}$(a) ค่าคงตัวสปริงมีค่าเท่าใด?(b) หากนำวัตถุมวล $300\\text{ g}$ ออก แล้วทำให้ก้อนมวล $2.00\\text{ kg}$ แกว่งกวัด คาบของการเคลื่อนที่จะมีค่าเท่าใด?",
        "question_en": "ก้อนมวล $2.00\\text{ kg}$ แขวนอยู่กับสปริงเส้นหนึ่ง where นำวัตถุมวล $300\\text{ g}$ มาแขวนเพิ่มใต้ก้อนมวลนี้ พบว่าสปริงยืดออกไปอีก $2.00\\text{ cm}$(a) spring constantมีค่าเท่าใด?(b) หากนำวัตถุมวล $300\\text{ g}$ ออก แล้วทำให้ก้อนมวล $2.00\\text{ kg}$ แกว่งกวัด period of motionจะมีค่าเท่าใด?",
        "formulas": [
          "k = \\frac{\\Delta m g}{\\Delta y}",
          "T = 2\\pi \\sqrt{\\frac{m}{k}}"
        ],
        "solution_th": "**เฉลยละเอียด:**\n(a) ค่าคงตัวสปริง $k = \\frac{\\Delta m g}{\\Delta y} = \\frac{(0.300)(9.80)}{0.020} = 147\\text{ N/m}$\n(b) เมื่อถอดมวลออก คาบการแกว่งกวัดสำหรับมวล $2.00\\text{ kg}$ คือ $T = 2\\pi \\sqrt{\\frac{2.00}{147}} \\approx 0.733\\text{ s}$",
        "solution_en": "**Detailed Solution:**\n(a) Added mass $\\Delta m = 0.300\\text{ kg}$ causes stretch $\\Delta y = 0.020\\text{ m}$.\nSpring constant $k = \\frac{\\Delta m g}{\\Delta y} = \\frac{0.300 \\times 9.80}{0.020} = 147\\text{ N/m}$.\n(b) With $0.300\\text{ kg}$ removed, oscillating mass $m = 2.00\\text{ kg}$.\nPeriod $T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{2.00}{147}} \\approx 2\\pi(0.1166) \\approx 0.733\\text{ s}$.",
        "hints": [
          "คำนวณค่า $k$ จากระยะยืดที่เพิ่มขึ้น $k = \\frac{(0.300)(9.80)}{0.020}$",
          "แทนค่า $k$ ลงในคาบ $T = 2\\pi\\sqrt{m/k}$ สำหรับมวลเริ่มต้น $2.00\\text{ kg}$"
        ]
      },
      {
        "id": "p4_14",
        "num_in_lec": 14,
        "global_id": 56,
        "topic_th": "หัวข้อ 4.14",
        "topic_en": "Topic 4.14",
        "question_th": "สปริงที่ไม่มีมวลมีค่าคงตัวสปริง $19\\text{ N/m}$ แขวนอยู่ในแนวดิ่ง นำวัตถุมวล $0.20\\text{ kg}$ มาติดที่ปลายอิสระแล้วปล่อย สมมติว่าสปริงยังไม่ยืดออกก่อนที่จะปล่อยวัตถุ จงหาว่าวัตถุจะเคลื่อนที่ตกลงไปต่ำกว่าตำแหน่งเริ่มต้นเป็นระยะทางไกลสุดเท่าใด?",
        "question_en": "สปริงที่ไม่มีมวลมีspring constant $19\\text{ N/m}$ แขวนอยู่ในแนวดิ่ง นำวัตถุมวล $0.20\\text{ kg}$ มาติดที่ปลายอิสระแล้วปล่อย สมมติว่าสปริงยังไม่ยืดออกก่อนที่จะปล่อยวัตถุ Find ว่าวัตถุจะเคลื่อนที่ตกลงไปต่ำกว่าตำแหน่งเริ่มต้นเป็นระยะทางไกลสุดเท่าใด?",
        "formulas": [
          "T = 2\\pi \\sqrt{\\frac{2L}{3g}}",
          "L = 1.20\\text{ m}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.14:**\nสปริง $k = 19\\text{ N/m}$, มวล $m = 0.20\\text{ kg}$ ปล่อยจากหยุดนิ่งเมื่อสปริงยังไม่ยืด\nจากกฎการอนุรักษ์พลังงาน ณ จุดต่ำสุด (ความเร็ว $v = 0$):\n$$m g h = \\frac{1}{2} k h^2 \\implies h = \\frac{2 m g}{k} = \\frac{2(0.20)(9.80)}{19} = \\frac{3.92}{19} \\approx 0.206\\text{ m} = 20.6\\text{ cm}$$",
        "solution_en": "**Detailed Solution for Problem 4.14:**\nSpring $k = 19\\text{ N/m}$, mass $m = 0.20\\text{ kg}$ released from rest at un-stretched length.\nEnergy conservation $mgh = \\frac{1}{2}kh^2 \\implies h = \\frac{2mg}{k} = \\frac{2(0.20)(9.80)}{19} = 0.206\\text{ m} = 20.6\\text{ cm}$.",
        "hints": [
          "อนุรักษ์พลังงาน: พลังงานศักย์โน้มถ่วงเปลี่ยนเป็นพลังงานศักย์ยืดหยุ่น $mgh = \\frac{1}{2} k h^2$",
          "ระยะตกลงต่ำสุด $h = \\frac{2mg}{k}$"
        ]
      },
      {
        "id": "p4_15",
        "num_in_lec": 15,
        "global_id": 57,
        "topic_th": "หัวข้อ 4.15",
        "topic_en": "Topic 4.15",
        "question_th": "ก้อนมวล $4.00\\text{ kg}$ แขวนอยู่กับสปริงที่มีค่าคงตัว $k = 500\\text{ N/m}$ ลูกปืนมวล $50.0\\text{ g}$ ถูกยิงพุ่งตรงขึ้นไปในแนวดิ่งเข้าชนก้อนมวลด้วยอัตราเร็ว $150\\text{ m/s}$ และฝังเข้าไปในก้อนมวล จงหาแอมพลิจูดของการเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายที่เกิดขึ้นหลังจากนั้น",
        "question_en": "ก้อนมวล $4.00\\text{ kg}$ แขวนอยู่กับสปริงที่มีค่าคงตัว $k = 500\\text{ N/m}$ ลูกปืนมวล $50.0\\text{ g}$ ถูกยิงพุ่งตรงขึ้นไปในแนวดิ่งเข้าชนก้อนมวลด้วยอัตราเร็ว $150\\text{ m/s}$ and ฝังเข้าไปในก้อนมวล Find amplitude of motionแบบฮาร์มอนิกอย่างง่ายที่เกิดขึ้นหลังจากนั้น",
        "formulas": [
          "T = 2\\pi \\sqrt{\\frac{3R}{2g}}",
          "R = 0.200\\text{ m}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.15:**\nก้อนมวล $M = 4.00\\text{ kg}$, $k = 500\\text{ N/m}$, ลูกปืนมวล $m = 0.050\\text{ kg}$, $v = 150\\text{ m/s}$\nอัตราเร็วทันทีหลังชน $$V = \\frac{m v}{M + m} = \\frac{0.050 \\times 150}{4.050} = 1.852\\text{ m/s}$$\nตำแหน่งสมดุลใหม่ต่ำลง $\\Delta x_{\\text{eq}} = \\frac{mg}{k} = \\frac{0.050 \\times 9.80}{500} = 0.00098\\text{ m}$\nพลังงานกลรวมของระบบ $$E = \\frac{1}{2}(M+m)V^2 + \\frac{1}{2}k(\\Delta x_{\\text{eq}})^2 = \\frac{1}{2}(4.050)(1.852)^2 + 0.00024 = 6.944\\text{ J}$$\nแอมพลิจูด $$A = \\sqrt{\\frac{2E}{k}} = \\sqrt{\\frac{2(6.944)}{500}} \\approx 0.167\\text{ m} = 16.7\\text{ cm}$$",
        "solution_en": "**Detailed Solution for Problem 4.15:**\nMass $M = 4.00\\text{ kg}$, bullet $m = 0.050\\text{ kg}$ at $150\\text{ m/s}$.\nPost-collision speed $V = \\frac{0.050 \\times 150}{4.050} = 1.852\\text{ m/s}$.\nMechanical energy $E = \\frac{1}{2}(4.050)(1.852)^2 \\approx 6.944\\text{ J}$.\nAmplitude $$A = \\sqrt{\\frac{2E}{k}} = \\sqrt{\\frac{2(6.944)}{500}} \\approx 0.167\\text{ m} = 16.7\\text{ cm}$$",
        "hints": [
          "อนุรักษ์โมเมนตัมขณะชน: $(M+m)V = mv \\implies V = \\frac{mv}{M+m}$",
          "พลังงานรวมของ SHM หลังชน: $E = \\frac{1}{2}(M+m)V^2 + \\frac{1}{2}k(\\Delta x_{\\text{eq}})^2 = \\frac{1}{2} k A^2$"
        ]
      },
      {
        "id": "p4_16",
        "num_in_lec": 16,
        "global_id": 58,
        "topic_th": "หัวข้อ 4.16",
        "topic_en": "Topic 4.16",
        "question_th": "คานสม่ำเสมอถูกแขวนในแนวระดับด้วยสปริงแนวดิ่งสองตัวที่เหมือนกันทุกประการ ซึ่งติดอยู่ระหว่างเพดานกับปลายแต่ละด้านของคาน คานมีมวล $225\\text{ kg}$ และมีถุงกรวดมวล $175\\text{ kg}$ วางอยู่ตรงกลาง ระบบคานกำลังแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายด้วยแอมพลิจูด $40.0\\text{ cm}$ และความถี่ $0.600\\text{ Hz}$ ถุงกรวดได้ตกลงไปจากคานในจังหวะที่คานมีการกระจัดพุ่งขึ้นสูงสุดพอดี จงหาความถี่และแอมพลิจูดใหม่ของการเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายของคานหลังจากนั้น",
        "question_en": "คานสม่ำเสมอถูกแขวนในแนวระดับด้วยสปริงแนวดิ่งสองตัวที่เหมือนกันทุกประการ ซึ่งติดอยู่ระหว่างเพดานกับปลายแต่ละด้านของคาน คานมีมวล $225\\text{ kg}$ and มีถุงกรวดมวล $175\\text{ kg}$ วางอยู่ตรงกลาง ระบบคานกำลังแกว่งกวัดแบบฮาร์มอนิกอย่างง่ายด้วยamplitude $40.0\\text{ cm}$ and frequency $0.600\\text{ Hz}$ ถุงกรวดได้ตกลงไปจากคานในจังหวะที่คานมีการกระจัดพุ่งขึ้นสูงสุดพอดี Find frequencyand amplitudeใหม่ของการเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายของคานหลังจากนั้น",
        "formulas": [
          "d_{\\min} = \\frac{L}{2\\sqrt{3}} = 0.2887\\text{ m} \\quad (L = 1.00\\text{ m})",
          "T_{\\min} = 2\\pi \\sqrt{\\frac{2 d_{\\min}}{g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.16:**\nมวลเดิม $M_1 = 225 + 175 = 400\\text{ kg}$, $A_1 = 0.400\\text{ m}$, $f_1 = 0.600\\text{ Hz}$\nเมื่อถุงกรวดหลุดออก มวลเหลือ $M_2 = 225\\text{ kg}$\n(a) ความถี่ใหม่ $$f_2 = f_1 \\sqrt{\\frac{M_1}{M_2}} = 0.600 \\times \\sqrt{\\frac{400}{225}} = 0.600 \\times \\frac{20}{15} = 0.800\\text{ Hz}$$\n(b) ค่าคงตัวสปริงรวม $k_{\\text{eff}} = M_1 (2\\pi f_1)^2 = 400(1.2\\pi)^2 = 5685\\text{ N/m}$\nตำแหน่งสมดุลเลื่อนขึ้นเนื่องจากน้ำหนักลดลง $\\Delta x_{\\text{eq}} = \\frac{m g}{k_{\\text{eff}}} = \\frac{175 \\times 9.80}{5685} = 0.302\\text{ m}$\nแอมพลิจูดใหม่ $$A_2 = A_1 - \\Delta x_{\\text{eq}} = 0.400 - 0.302 = 0.098\\text{ m} = 9.8\\text{ cm}$$",
        "solution_en": "**Detailed Solution for Problem 4.16:**\nInitial mass $M_1 = 400\\text{ kg}$, new mass $M_2 = 225\\text{ kg}$.\n(a) New frequency $f_2 = 0.600 \\sqrt{400/225} = 0.800\\text{ Hz}$.\n(b) Shift in equilibrium $\\Delta x_{\\text{eq}} = \\frac{175 \\times 9.80}{5685} = 0.302\\text{ m}$.\nNew amplitude $A_2 = 0.400 - 0.302 = 0.098\\text{ m} = 9.8\\text{ cm}$.",
        "hints": [
          "ความถี่แปรผันตาม $\\frac{1}{\\sqrt{m}}$, เมื่อมวลลดจาก $400\\text{ kg}$ เหลือ $225\\text{ kg}$ ความถี่เพิ่มขึ้น",
          "เมื่อมวลหลุด ณ การกระจัดสูงสุด ($v=0$) แอมพลิจูดใหม่เท่ากับระยะห่างจากตำแหน่งสมดุลใหม่"
        ]
      },
      {
        "id": "p4_17",
        "num_in_lec": 17,
        "global_id": 59,
        "topic_th": "หัวข้อ 4.17",
        "topic_en": "Topic 4.17",
        "question_th": "ลูกบอลลูกบนถูกปล่อยจากหยุดนิ่ง เข้าชนและติดแน่นกับลูกบอลลูกล่างที่อยู่นิ่ง เชือกทั้งสองเส้นมีความยาว $50.0\\text{ cm}$ เท่ากัน ลูกบอลลูกบนมีมวล $2.00\\text{ kg}$ และในตอนเริ่มต้นอยู่สูงกว่าลูกบอลลูกล่าง (ซึ่งมีมวล $3.00\\text{ kg}$) เป็นระยะ $10.0\\text{ cm}$ จงหาความถี่และการกระจัดเชิงมุมสูงสุดของการเคลื่อนที่หลังจากที่ลูกบอลทั้งสองชนกัน",
        "question_en": "ลูกบอลลูกบนถูกปล่อยจากหยุดนิ่ง เข้าชนand ติดแน่นกับลูกบอลลูกล่างที่อยู่นิ่ง เชือกทั้งสองเส้นมีความยาว $50.0\\text{ cm}$ เท่ากัน ลูกบอลลูกบนมีมวล $2.00\\text{ kg}$ and ในตอนเริ่มต้นอยู่สูงกว่าลูกบอลลูกล่าง (ซึ่งมีมวล $3.00\\text{ kg}$) เป็นระยะ $10.0\\text{ cm}$ Find frequencyand การกระจัดเชิงมุมสูงสุดของการเคลื่อนที่หลังจากที่ลูกบอลทั้งสองชนกัน",
        "formulas": [
          "T = 2\\pi \\sqrt{\\frac{L}{2g}}",
          "L = 0.500\\text{ m}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.17:**\nเชือกยาว $L = 0.500\\text{ m}$, มวล $m_1 = 2.00\\text{ kg}$ ปล่อยจากสูง $h = 0.100\\text{ m}$, มวล $m_2 = 3.00\\text{ kg}$\n1. ความเร็วก่อนชน $v_1 = \\sqrt{2(9.80)(0.100)} = 1.40\\text{ m/s}$\n2. หลังชนและติดกัน $V = \\frac{2.00 \\times 1.40}{5.00} = 0.560\\text{ m/s}$\n3. ความถี่การแกว่งกวัด $$f = \\frac{1}{2\\pi} \\sqrt{\\frac{g}{L}} = \\frac{1}{2\\pi} \\sqrt{\\frac{9.80}{0.500}} \\approx 0.705\\text{ Hz}$$\n4. ความสูงสูงสุดหลังชน $h' = \\frac{V^2}{2g} = \\frac{0.560^2}{2(9.80)} = 0.0160\\text{ m}$\nมุมกระจัดสูงสุด $1 - \\cos\\theta_{\\max} = \\frac{h'}{L} = \\frac{0.0160}{0.500} = 0.0320 \\implies \\theta_{\\max} \\approx 14.5^\\circ$",
        "solution_en": "**Detailed Solution for Problem 4.17:**\n$L = 0.500\\text{ m}$, $m_1 = 2.00\\text{ kg}$, $m_2 = 3.00\\text{ kg}$, $h = 0.100\\text{ m}$.\nSpeed before collision $v_1 = 1.40\\text{ m/s}$, after collision $V = 0.560\\text{ m/s}$.\nFrequency $f = \\frac{1}{2\\pi}\\sqrt{9.80/0.500} \\approx 0.705\\text{ Hz}$.\nMax angle $\\theta_{\\max} = \\cos^{-1}(1 - 0.016/0.500) \\approx 14.5^\\circ$.",
        "hints": [
          "ความเร็วของลูกบนก่อนชน $v_1 = \\sqrt{2gh}$, ชนแบบไม่ยืดหยุ่น $V = \\frac{m_1 v_1}{m_1 + m_2}$",
          "ความถี่ลูกตุ้ม $f = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{L}}$, ความสูงสูงสุดหลังชน $h' = \\frac{V^2}{2g}$"
        ]
      },
      {
        "id": "p4_18",
        "num_in_lec": 18,
        "global_id": 60,
        "topic_th": "หัวข้อ 4.18",
        "topic_en": "Topic 4.18",
        "question_th": "แท่งโลหะบางสม่ำเสมอมวล $M$ มีจุดหมุนที่ไม่มีแรงเสียดทานอยู่ที่จุดกึ่งกลางและตั้งฉากกับแท่งวัตถุ สปริงในแนวระดับที่มีค่าคงตัวสปริง $k$ ถูกยึดติดกับปลายด้านล่างของแท่งวัตถุ โดยปลายอีกด้านของสปริงถูกยึดติดกับผนังแข็ง หากแท่งวัตถุถูกทำให้เบี่ยงเบนไปจากแนวดิ่งเป็นมุมขนาดเล็กแล้วปล่อย จงหาคาบของการแกว่งกวัดเชิงมุมนี้",
        "question_en": "แท่งโลหะบางสม่ำเสมอมวล $M$ มีจุดหมุนที่ไม่มีแรงเสียดทานอยู่ที่จุดกึ่งกลางand ตั้งฉากกับแท่งวัตถุ สปริงในแนวระดับที่มีspring constant $k$ ถูกยึดติดกับปลายด้านล่างของแท่งวัตถุ โดยปลายอีกด้านของสปริงถูกยึดติดกับผนังแข็ง หากแท่งวัตถุถูกทำให้เบี่ยงเบนไปจากแนวดิ่งเป็นมุมขนาดเล็กแล้วปล่อย Find periodของการแกว่งกวัดเชิงมุมนี้",
        "formulas": [
          "I_{\\text{sphere}} = \\frac{2}{5} m r^2",
          "T = 2\\pi \\sqrt{\\frac{7(R-r)}{5g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.18:**\nแท่งวัตถุมวล $M$ ยาว $L$ หมุนรอบจุดกึ่งกลาง $I = \\frac{1}{12} M L^2$\nเมื่อหมุนไปเป็นมุม $\theta$ สปริงที่ปลายยืดออก $x = \\frac{L}{2} \\theta$\nทอร์กคืนตัว $\\tau = -\\left(k \\frac{L}{2}\\theta\\right) \\frac{L}{2} = -\\frac{k L^2}{4} \\theta$\nสมการการเคลื่อนที่ $\\left(\\frac{1}{12} M L^2\\right) \\ddot{\\theta} + \\frac{k L^2}{4} \\theta = 0 \\implies \\ddot{\\theta} + \\frac{3k}{M} \\theta = 0$\nคาบของการแกว่งกวัด $$T = 2\\pi \\sqrt{\\frac{M}{3k}}$$",
        "solution_en": "**Detailed Solution for Problem 4.18:**\nUniform rod mass $M$, length $L$ pivoted at center ($I = \\frac{1}{12} M L^2$).\nRestoring torque $\\tau = -\\frac{k L^2}{4} \\theta \\implies I \\ddot{\\theta} + \\frac{k L^2}{4} \\theta = 0$.\nPeriod $$T = 2\\pi \\sqrt{\\frac{M}{3k}}$$",
        "hints": [
          "โมเมนต์ความเฉื่อยรอบจุดกึ่งกลาง $I = \\frac{1}{12} M L^2$",
          "ทอร์กคืนตัวจากสปริงที่ปลายแท่ง $\\tau = -k \\left(\\frac{L}{2}\\right)^2 \\theta = -\\frac{k L^2}{4} \\theta$"
        ]
      },
      {
        "id": "p4_19",
        "num_in_lec": 19,
        "global_id": 61,
        "topic_th": "หัวข้อ 4.19",
        "topic_en": "Topic 4.19",
        "question_th": "ก้อนมวลขนาดใหญ่ P ที่ติดอยู่กับสปริงเบา กำลังเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายในแนวระดับโดยไถลไปบนพื้นผิวที่ไม่มีแรงเสียดทานด้วยความถี่ $f$ มีก้อนมวล B วางอยู่ด้านบนและสัมประสิทธิ์ความเสียดทานสถิตระหว่างก้อนมวลทั้งสองคือ $\\mu_s$ แอมพลิจูดของการแกว่งกวัดสูงสุดของระบบจะมีค่าเท่าใดที่ทำให้ก้อนมวล B ไม่เกิดการไถล?",
        "question_en": "ก้อนมวลขนาดใหญ่ P ที่ติดอยู่กับสปริงเบา กำลังเคลื่อนที่แบบฮาร์มอนิกอย่างง่ายในแนวระดับโดยไถลไปบนพื้นผิวที่ไม่มีแรงเสียดทานด้วยfrequency $f$ มีก้อนมวล B วางอยู่ด้านบนand สัมประสิทธิ์ความเสียดทานสถิตระหว่างก้อนมวลทั้งสองคือ $\\mu_s$ amplitudeของการแกว่งกวัดสูงสุดของระบบจะมีค่าเท่าใดที่ทำให้ก้อนมวล B ไม่เกิดการไถล?",
        "formulas": [
          "m \\ddot{x} + \\left(\\frac{2\\mu m g}{d}\\right) x = 0",
          "T = 2\\pi \\sqrt{\\frac{d}{2\\mu g}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 4.19:**\nระบบแกว่งกวัดด้วยความถี่ $f \\implies \\omega = 2\\pi f$\nความเร่งสูงสุดในแนวระดับของระบบคือ $a_{\\max} = \\omega^2 A = 4\\pi^2 f^2 A$\nแรงเสียดทานสถิตสูงสุดที่กระทำต่อก้อนมวล B คือ $f_{s,\\max} = \\mu_s m_B g$\nเพื่อไม่ให้ B ไถล: $m_B a_{\\max} \\le f_{s,\\max} \\implies m_B (4\\pi^2 f^2 A) \\le \\mu_s m_B g$\nแอมพลิจูดสูงสุด $$A_{\\max} = \\frac{\\mu_s g}{4\\pi^2 f^2}$$",
        "solution_en": "**Detailed Solution for Problem 4.19:**\nMaximum acceleration $a_{\\max} = 4\\pi^2 f^2 A$.\nNo sliding condition $m_B a_{\\max} \\le \\mu_s m_B g \\implies 4\\pi^2 f^2 A \\le \\mu_s g$.\nMaximum amplitude $$A_{\\max} = \\frac{\\mu_s g}{4\\pi^2 f^2}$$",
        "hints": [
          "ความเร่งสูงสุดของการแกว่งกวัด $a_{\\max} = \\omega^2 A = 4\\pi^2 f^2 A$",
          "เงื่อนไขไม่ให้มวล B ไถล: $m_B a_{\\max} \\le \\mu_s m_B g \\implies A_{\\max} = \\frac{\\mu_s g}{4\\pi^2 f^2}$"
        ]
      }
    ]
  },
  {
    "lecture": 5,
    "title_th": "Lecture 5: วงจร LC และมวลสปริงที่มีมวล (LC Circuits & Continuous Mass Systems)",
    "title_en": "Lecture 5: LC Circuit Oscillations & Continuous Mass Systems",
    "problems": [
      {
        "id": "p5_1",
        "num_in_lec": 1,
        "global_id": 62,
        "topic_th": "หัวข้อ 5.1",
        "topic_en": "Topic 5.1",
        "question_th": "วงจร LC ของเครื่องส่งสัญญาณเรดาร์มีการสั่นกวัดที่ความถี่ $9.00\\text{ GHz}$(a) ต้องใช้ค่าความเหนี่ยวนำเท่าใดเพื่อให้วงจรเกิดการสั่นพ้องที่ความถี่นี้ หากตัวเก็บประจุมีค่าความจุ $2.00\\text{ pF}$?",
        "question_en": "วงจร LC ของเครื่องส่งสัญญาณเรดาร์มีการสั่นกวัดที่frequency $9.00\\text{ GHz}$(a) ต้องใช้ค่าความเหนี่ยวนำเท่าใดเพื่อให้วงจรเกิดการสั่นพ้องที่frequencyนี้ หากตัวเก็บประจุมีค่าความจุ $2.00\\text{ pF}$?",
        "formulas": [
          "k_{\\text{eff}} = \\frac{Y A}{L}",
          "f = \\frac{1}{2\\pi}\\sqrt{\\frac{k_{\\text{eff}}}{m}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 5.1:**\nโจทย์กำหนด $f = 9.00\\text{ GHz} = 9.00 \\times 10^9\\text{ Hz}$ และ $C = 2.00\\text{ pF} = 2.00 \\times 10^{-12}\\text{ F}$\nจากสมการความถี่สั่นพ้องของวงจร LC ($f = \\frac{1}{2\\pi \\sqrt{LC}}$):\n$$L = \\frac{1}{4\\pi^2 f^2 C} = \\frac{1}{4\\pi^2 (9.00 \\times 10^9)^2 (2.00 \\times 10^{-12})} = 1.56 \\times 10^{-10}\\text{ H} = 156\\text{ pH}$$",
        "solution_en": "**Detailed Solution for Problem 5.1:**\nLC resonant frequency $f = 9.00\\text{ GHz}, C = 2.00\\text{ pF} \\implies L = 156\\text{ pH}$.",
        "hints": [
          "ลวดหรือแท่งโลหะประพฤติตัวเหมือนสปริงที่มีค่าคงตัวสปริง $k = \\frac{Y A}{L}$ เมื่อ $Y$ คือมอดุลัสของยังก์",
          "แทนค่า $k_{\\text{eff}}$ ในสมการความถี่สั่นมวล-สปริง $f = \\frac{1}{2\\pi}\\sqrt{\\frac{YA}{mL}}$"
        ]
      },
      {
        "id": "p5_2",
        "num_in_lec": 2,
        "global_id": 63,
        "topic_th": "หัวข้อ 5.2",
        "topic_en": "Topic 5.2",
        "question_th": "เครื่องส่งเรดาร์มีวงจร LC ที่สั่นกวัดด้วยความถี่ $1.00 \\times 10^{10}\\text{ Hz}$(a) สำหรับขดลวดวงรอบเดี่ยวที่มีความเหนี่ยวนำ $400\\text{ pH}$ จะต้องใช้ตัวเก็บประจุที่มีค่าความจุเท่าใดมาต่ออนุกรมกับลวดนี้เพื่อให้เกิดการสั่นพ้องที่ความถี่ดังกล่าว?",
        "question_en": "เครื่องส่งเรดาร์มีวงจร LC ที่สั่นกวัดด้วยfrequency $1.00 \\times 10^{10}\\text{ Hz}$(a) สำหรับขดลวดวงรอบเดี่ยวที่มีความเหนี่ยวนำ $400\\text{ pH}$ จะต้องใช้ตัวเก็บประจุที่มีค่าความจุเท่าใดมาต่ออนุกรมกับลวดนี้เพื่อให้เกิดการสั่นพ้องที่frequencyดังกล่าว?",
        "formulas": [
          "k_n = n k",
          "f_n = \\sqrt{n} f_0"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 5.2:**\n$L = 3.00\\text{ mH}, C = 2.70\\ \\mu\\text{F}, V_{\\max} = 12.0\\text{ V}$:\n(a) ความถี่สั่นพ้อง $f = \\frac{1}{2\\pi \\sqrt{3.00 \\times 10^{-3} \\times 2.70 \\times 10^{-6}}} = 1.77\\text{ kHz}$\n(b) กระแสสูงสุด $I_{\\max} = V_{\\max} \\sqrt{\\frac{C}{L}} = 12.0 \\times \\sqrt{\\frac{2.70 \\times 10^{-6}}{3.00 \\times 10^{-3}}} = 0.360\\text{ A}$",
        "solution_en": "**Detailed Solution for Problem 5.2:**\n(a) Resonant frequency $f_0 = 1.77\\text{ kHz}$\n(b) Maximum current $I_{\\max} = 0.360\\text{ A}$",
        "hints": [
          "เมื่อตัดสปริงยาวที่มีค่าคงตัว $k$ ออกเป็น $n$ ส่วนเท่ากัน สปริงแต่ละชิ้นสั้นลงจะมีค่าคงตัวสปริงเพิ่มขึ้นเป็น $n k$",
          "ความถี่ใหม่เมื่อใช้สปริงชิ้นสั้นคือ $f' = \\sqrt{n} f_0$"
        ]
      },
      {
        "id": "p5_3",
        "num_in_lec": 3,
        "global_id": 64,
        "topic_th": "หัวข้อ 5.3",
        "topic_en": "Topic 5.3",
        "question_th": "มวล $M$ ถูกแขวนอยู่ที่ปลายสปริงที่มีความยาว $l$ และมีค่าความแข็ง $s$ หากสปริงมีมวล $m$ และความเร็วของส่วนย่อย $dy$ ของสปริงแปรผันตรงกับระยะ $y$ จากปลายที่ยึดติดแน่น จงแสดงว่าพลังงานจลน์ของส่วนย่อยนี้คือ$$\\frac{1}{2}\\frac{m}{l}dy\\left(\\frac{y}{l}v\\right)^2$$เมื่อ $v$ คือความเร็วของมวล $M$ จากนั้นให้ใช้วิธีอินทิเกรตตลอดความยาวสปริงเพื่อแสดงว่าพลังงานจลน์รวมของสปริงคือ $\\frac{1}{6}mv^2$ และจากพลังงานรวมของระบบ จงแสดงว่าความถี่ของการสั่นกวัดคือ$$\\omega^2 = \\frac{s}{M + m/3}$$",
        "question_en": "มวล $M$ ถูกแขวนอยู่ที่ปลายสปริงที่มีความยาว $l$ and มีค่าความแข็ง $s$ หากสปริงมีมวล $m$ and ความเร็วของส่วนย่อย $dy$ ของสปริงแปรผันตรงกับระยะ $y$ จากปลายที่ยึดติดแน่น Show that พลังงานจลน์ของส่วนย่อยนี้คือ$$\\frac{1}{2}\\frac{m}{l}dy\\left(\\frac{y}{l}v\\right)^2$$where  $v$ คือความเร็วของมวล $M$ จากนั้นให้ใช้วิธีอินทิเกรตตลอดความยาวสปริงเพื่อแสดงว่าพลังงานจลน์รวมของสปริงคือ $\\frac{1}{6}mv^2$ and จากพลังงานรวมของระบบ Show that frequencyของการสั่นกวัดคือ$$\\omega^2 = \\frac{s}{M + m/3}$$",
        "formulas": [
          "v = \\sqrt{\\frac{T}{\\mu}}",
          "f_n = \\frac{n v}{2L} = \\frac{n}{2L}\\sqrt{\\frac{T}{\\mu}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 5.3:**\nสปริงมีมวล $m$ ค่าความแข็ง $s$ ต่อกับมวล $M$:\nพลังงานจลน์สปริงมวลกระจาย $K_{\\text{spring}} = \\frac{1}{6} m v^2$\nพลังงานจลน์รวม $K_{\\text{total}} = \\frac{1}{2}\\left(M + \\frac{m}{3}\\right) v^2 \\implies \\omega = \\sqrt{\\frac{s}{M + m/3}}$",
        "solution_en": "**Detailed Solution for Problem 5.3:**\nContinuous mass spring angular frequency $\\omega = \\sqrt{\\frac{s}{M + m/3}}$.",
        "hints": [
          "ความเร็วของคลื่นในเส้นเชือก $v = \\sqrt{T/\\mu}$ เมื่อ $T$ คือแรงดึง และ $\\mu$ คือมวลต่อหน่วยความยาว",
          "ความถี่ธรรมชาติฐาน (Fundamental frequency) คือ $f_1 = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$"
        ]
      },
      {
        "id": "p5_4",
        "num_in_lec": 4,
        "global_id": 65,
        "topic_th": "หัวข้อ 5.4",
        "topic_en": "Topic 5.4",
        "question_th": "บล็อกมวล $M$ เชื่อมต่อกับสปริงที่มีมวล $m$ และความยาว $l$ แกว่งกวัดแบบฮาร์มอนิกอย่างง่ายบนรางราบที่ไม่มีแรงเสียดทาน ให้สมมติว่าทุกส่วนของสปริงแกว่งไปพร้อมกันในเฟสเดียวกัน โดยความเร็วของส่วนย่อยสปริงที่มีความยาว $dx$ คือ $v_x = \\left(\\frac{x}{l}\\right)v$ จงหา:(a) พลังงานจลน์รวมของระบบเมื่อบล็อกมีความเร็ว $v$(b) คาบของการสั่นกวัด",
        "question_en": "บล็อกมวล $M$ เชื่อมต่อกับสปริงที่มีมวล $m$ and ความยาว $l$ แกว่งกวัดแบบฮาร์มอนิกอย่างง่ายบนรางราบที่ไม่มีแรงเสียดทาน ให้สมมติว่าทุกส่วนของสปริงแกว่งไปพร้อมกันในเฟสเดียวกัน โดยความเร็วของส่วนย่อยสปริงที่มีความยาว $dx$ คือ $v_x = \\left(\\frac{x}{l}\\right)v$ Find:(a) พลังงานจลน์รวมของระบบwhere บล็อกมีความเร็ว $v$(b) periodของการสั่นกวัด",
        "formulas": [
          "m_{\\text{eff}} = m + \\frac{1}{3} m_{\\text{spring}}",
          "T = 2\\pi \\sqrt{\\frac{m + m_{\\text{spring}}/3}{k}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 5.4:**\nประจุสูงสุด $Q$ ในวงจร LC:\n(a) เมื่อประจุลดลงเหลือ $q = \\frac{Q}{\\sqrt{2}}$ พลังงานไฟฟ้า $U_E = \\frac{q^2}{2C} = \\frac{Q^2}{4C} = \\frac{1}{2} U_{\\text{total}}$\n(b) พลังงานแบ่งเท่ากัน $50\\%$ ไฟฟ้า และ $50\\%$ แม่เหล็ก",
        "solution_en": "**Detailed Solution for Problem 5.4:**\nEqual energy split ($50\\% - 50\\%$) occurs when $q = \\frac{Q}{\\sqrt{2}} \\approx 0.707 Q$.",
        "hints": [
          "เมื่อคำนึงถึงมวลของสปริง $m_{\\text{spring}}$ พลังงานจลน์รวมของสปริงคิดเป็นมวลยังผลเท่ากับ $\\frac{1}{3} m_{\\text{spring}}$",
          "คาบการแกว่งกวัดมวลรวมคือ $T = 2\\pi \\sqrt{\\frac{m + m_{\\text{spring}}/3}{k}}$"
        ]
      }
    ]
  },
  {
    "lecture": 6,
    "title_th": "Lecture 6: การแกว่งกวัดแบบหน่วง (Damped Oscillations)",
    "title_en": "Lecture 6: Damped Free Oscillations",
    "problems": [
      {
        "id": "p6_1",
        "num_in_lec": 1,
        "global_id": 66,
        "topic_th": "หัวข้อ 6.1",
        "topic_en": "Topic 6.1",
        "question_th": "แอมพลิจูดของตัวแกว่งกวัดที่มีความหน่วงน้อย (lightly damped oscillator) มีค่าลดลง $3.0\\%$ ในแต่ละรอบของการแกว่งกวัด พลังงานกลของตัวแกว่งกวัดนี้สูญเสียไปร้อยละเท่าใดในแต่ละรอบ?",
        "question_en": "amplitudeของตัวแกว่งกวัดที่มีความหน่วงน้อย (lightly damped oscillator) มีค่าลดลง $3.0\\%$ ในแต่ละรอบของการแกว่งกวัด พลังงานกลของตัวแกว่งกวัดนี้สูญเสียไปร้อยละเท่าใดในแต่ละรอบ?",
        "formulas": [
          "E \\propto A^2",
          "\\frac{E_1}{E_0} = \\left(\\frac{A_1}{A_0}\\right)^2 = (0.970)^2 = 0.9409"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.1:**\nแอมพลิจูดลดลง $3.0\\%$ ในแต่ละรอบ $\\implies A_1 = 0.970 A_0$\nพลังงานแปรผันตรงกับ $A^2$: $\\frac{E_1}{E_0} = (0.970)^2 = 0.9409 \\implies$ พลังงานสูญเสียไป $5.91\\%$ ในแต่ละรอบ",
        "solution_en": "**Detailed Solution for Problem 6.1:**\nEnergy loss per cycle $= 1 - (0.970)^2 = 5.91\\%$.",
        "hints": [
          "สมการตัวแกว่งกวัดแบบหน่วง $m\\ddot{x} + b\\dot{x} + kx = 0$",
          "ความถี่เชิงมุมหน่วง $\\omega' = \\sqrt{\\omega_0^2 - (b/2m)^2}$"
        ]
      },
      {
        "id": "p6_2",
        "num_in_lec": 2,
        "global_id": 67,
        "topic_th": "หัวข้อ 6.2",
        "topic_en": "Topic 6.2",
        "question_th": "ระบบตัวแกว่งกวัดแบบหน่วงมีมวล $m = 250\\text{ g}$, ค่าคงตัวสปริง $k = 85\\text{ N/m}$, และค่าคงตัวการหน่วง $b = 70\\text{ g/s}$ อัตราส่วนระหว่างแอมพลิจูดของการแกว่งกวัดเมื่อสิ้นสุดรอบที่ 20 ต่อแอมพลิจูดเริ่มต้นของการแกว่งกวัดมีค่าเท่าใด?",
        "question_en": "ระบบตัวแกว่งกวัดแบบหน่วงมีมวล $m = 250\\text{ g}$, spring constant $k = 85\\text{ N/m}$, and ค่าคงตัวการหน่วง $b = 70\\text{ g/s}$ อัตราส่วนระหว่างamplitudeของการแกว่งกวัดwhere สิ้นสุดรอบที่ 20 ต่อamplitudeเริ่มต้นของการแกว่งกวัดมีค่าเท่าใด?",
        "formulas": [
          "\\omega_0 = \\sqrt{\\frac{k}{m}}, \\quad \\gamma = \\frac{b}{2m}",
          "f' = \\frac{\\sqrt{\\omega_0^2 - \\gamma^2}}{2\\pi}",
          "A(t) = A_0 e^{-\\gamma t} = \\frac{A_0}{2} \\implies t = \\frac{\\ln 2}{\\gamma}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.2:**\n$m = 0.250\\text{ kg}, k = 85.0\\text{ N/m}, b = 0.0700\\text{ kg/s}$:\n(a) $\\omega_0 = 18.44\\text{ rad/s}, \\gamma = 0.140\\text{ s}^{-1} \\implies f' = \\frac{\\sqrt{18.44^2 - 0.140^2}}{2\\pi} = 2.93\\text{ Hz}$\n(b) เวลาที่แอมพลิจูดลดลงครึ่งหนึ่ง $t = \\frac{\\ln 2}{\\gamma} = \\frac{0.693}{0.140} = 4.95\\text{ s}$",
        "solution_en": "**Detailed Solution for Problem 6.2:**\n(a) Damped frequency $f' = 2.93\\text{ Hz}$\n(b) Half-amplitude time $t = 4.95\\text{ s}$",
        "hints": [
          "สมการตัวแกว่งกวัดแบบหน่วง $m\\ddot{x} + b\\dot{x} + kx = 0$",
          "ความถี่เชิงมุมหน่วง $\\omega' = \\sqrt{\\omega_0^2 - (b/2m)^2}$"
        ]
      },
      {
        "id": "p6_3",
        "num_in_lec": 3,
        "global_id": 68,
        "topic_th": "หัวข้อ 6.3",
        "topic_en": "Topic 6.3",
        "question_th": "ระบบตัวแกว่งกวัดแบบหน่วงประกอบด้วยก้อนมวล $1.50\\text{ kg}$ และสปริงที่มีค่าคงตัว $8.00\\text{ N/m}$ โดยมีแรงหน่วงกำหนดโดย $F = -bv$ ซึ่ง $b = 230\\text{ g/s}$ หากดึงก้อนมวลลงมา $12.0\\text{ cm}$ แล้วปล่อย จงคำนวณหาเวลาที่ต้องใช้เพื่อให้แอมพลิจูดของการแกว่งกวัดลดลงเหลือหนึ่งในสามของค่าเริ่มต้น",
        "question_en": "ระบบตัวแกว่งกวัดแบบหน่วงประกอบด้วยก้อนมวล $1.50\\text{ kg}$ and สปริงที่มีค่าคงตัว $8.00\\text{ N/m}$ โดยมีแรงหน่วงกำหนดโดย $F = -bv$ ซึ่ง $b = 230\\text{ g/s}$ หากดึงก้อนมวลลงมา $12.0\\text{ cm}$ แล้วปล่อย Calculate เวลาที่ต้องใช้เพื่อให้amplitudeของการแกว่งกวัดลดลงเหลือหนึ่งในสามของค่าเริ่มต้น",
        "formulas": [
          "A(t) = A_0 e^{-\\gamma t}",
          "\\gamma = \\frac{b}{2m}",
          "t = \\frac{\\ln(A_0/A(t))}{\\gamma}"
        ],
        "solution_th": "**เฉลยละเอียด:**\nมวล $m = 1.50\\text{ kg}$, สัมประสิทธิ์หน่วง $b = 0.230\\text{ kg/s}$\nอัตราหน่วง $\\gamma = \\frac{0.230}{3.00} \\approx 0.07667\\text{ s}^{-1}$\nเวลาที่แอมพลิจูดลดเหลือหนึ่งในสาม $e^{-\\gamma t} = 1/3 \\implies t = \\frac{\\ln 3}{\\gamma} = \\frac{1.0986}{0.07667} \\approx 14.3\\text{ s}$",
        "solution_en": "**Detailed Solution:**\nMass $m = 1.50\\text{ kg}$, damping $b = 0.230\\text{ kg/s}$.\nDamping rate $\\gamma = \\frac{b}{2m} = \\frac{0.230}{3.00} = 0.07667\\text{ s}^{-1}$.\nAmplitude decays as $A(t) = A_0 e^{-\\gamma t}$. For $A(t) = A_0/3$:\n$e^{-\\gamma t} = 1/3 \\implies \\gamma t = \\ln 3 \\implies t = \\frac{1.0986}{0.07667} \\approx 14.3\\text{ s}$.",
        "hints": [
          "อัตราการหน่วง $\\gamma = \\frac{0.230}{2(1.50)} = 0.07667\\text{ s}^{-1}$",
          "แอมพลิจูดลดลงเหลือ $1/3$ เมื่อ $e^{-\\gamma t} = 1/3 \\implies t = \\frac{\\ln 3}{\\gamma}$"
        ]
      },
      {
        "id": "p6_4",
        "num_in_lec": 4,
        "global_id": 69,
        "topic_th": "หัวข้อ 6.4",
        "topic_en": "Topic 6.4",
        "question_th": "จากระบบตัวแกว่งกวัดแบบหน่วงที่กำหนดให้มีมวล $1.50\\text{ kg}$, ค่าคงตัวสปริง $8.00\\text{ N/m}$, และค่าคงตัวการหน่วง $b = 230\\text{ g/s}$ ก้อนมวลจะทำการแกว่งกวัดไปได้ทั้งหมดกี่รอบในช่วงเวลาที่แอมพลิจูดลดลงเหลือหนึ่งในสามของค่าเริ่มต้นพอดี?",
        "question_en": "จากระบบตัวแกว่งกวัดแบบหน่วงที่กำหนดให้มีมวล $1.50\\text{ kg}$, spring constant $8.00\\text{ N/m}$, and ค่าคงตัวการหน่วง $b = 230\\text{ g/s}$ ก้อนมวลจะทำการแกว่งกวัดไปได้ทั้งหมดกี่รอบในช่วงเวลาที่amplitudeลดลงเหลือหนึ่งในสามของค่าเริ่มต้นพอดี?",
        "formulas": [
          "b_c = 2 \\sqrt{k m} \\quad (\\text{Critical Damping Coefficient})"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.4:**\nสมการแอมพลิจูดลดลงตามเวลา $A(t) = A_0 e^{-\\gamma t}$ เมื่อ $\\gamma = \\frac{b}{2m}$\nเมื่อแกว่งกวัดไปได้ $N$ รอบ เวลาที่ผ่านไปคือ $t_N = N T'$ เมื่อ $T' = \\frac{2\\pi}{\\omega'}$\nเงื่อนไขแอมพลิจูดลดลงเหลือ $1/3$:\n$$\\frac{A(t_N)}{A_0} = e^{-\\gamma N T'} = \\frac{1}{3} \\implies \\gamma N T' = \\ln 3$$\nจำนวนรอบของการแกว่งกวัด $$N = \\frac{\\ln 3}{\\gamma T'} = \\frac{\\omega' \\ln 3}{2\\pi \\gamma}$$",
        "solution_en": "**Detailed Solution for Problem 6.4:**\nAmplitude decay $A(t) = A_0 e^{-\\gamma t}$ where $\\gamma = b/(2m)$.\nAfter $N$ cycles ($t_N = N T'$), $A(t_N)/A_0 = e^{-\\gamma N T'} = 1/3$.\nNumber of cycles $$N = \\frac{\\ln 3}{\\gamma T'} = \\frac{\\omega' \\ln 3}{2\\pi \\gamma}$$",
        "hints": [
          "แอมพลิจูด $A(t) = A_0 e^{-\\gamma t}$ โดย $\\gamma = \\frac{b}{2m}$",
          "หลังผ่านไป $N$ รอบ เวลา $t = N T' \\implies e^{-\\gamma N T'} = 1/3 \\implies N = \\frac{\\ln 3}{\\gamma T'}$"
        ]
      },
      {
        "id": "p6_5",
        "num_in_lec": 5,
        "global_id": 70,
        "topic_th": "หัวข้อ 6.5",
        "topic_en": "Topic 6.5",
        "question_th": "ระบบกันสะเทือนของรถยนต์มวล $2000\\text{ kg}$ \"ยุบตัว\" ลง $10\\text{ cm}$ เมื่อวางโครงรถลงบนระบบนี้ นอกจากนี้แอมพลิจูดของการแกว่งกวัดยังลดลง $50\\%$ ในแต่ละรอบ สมมติว่าล้อแต่ละล้อรองรับมวล $500\\text{ kg}$ จงประมาณค่าคงตัวสปริง $k$ ของระบบสปริงและโช้คอัพสำหรับล้อหนึ่งล้อ",
        "question_en": "ระบบกันสะเทือนของรถยนต์มวล $2000\\text{ kg}$ \"ยุบตัว\" ลง $10\\text{ cm}$ where วางโครงรถลงบนระบบนี้ นอกจากนี้amplitudeของการแกว่งกวัดยังลดลง $50\\%$ ในแต่ละรอบ สมมติว่าล้อแต่ละล้อรองรับมวล $500\\text{ kg}$ จงประมาณspring constant $k$ ของระบบสปริงand โช้คอัพสำหรับล้อหนึ่งล้อ",
        "formulas": [
          "k = \\frac{m g}{\\Delta y}",
          "\\gamma = \\frac{\\ln 2 \\cdot \\omega_0}{\\sqrt{4\\pi^2 + (\\ln 2)^2}}"
        ],
        "solution_th": "**เฉลยละเอียด:**\nสำหรับล้อหนึ่งวง $m = 500\\text{ kg}$\nยุบตัวลง $10\\text{ cm}$ ในสภาวะสมดุล $k = \\frac{mg}{\\Delta x} = \\frac{500(9.80)}{0.10} = 49000\\text{ N/m}$",
        "solution_en": "**Detailed Solution:**\nMass per wheel $m = 500\\text{ kg}$. Static compression $\\Delta y = 0.10\\text{ m}$.\nSpring constant $k = \\frac{mg}{\\Delta y} = \\frac{500 \\times 9.80}{0.10} = 49000\\text{ N/m}$.",
        "hints": [
          "สมดุลสถิต $\\Delta y = 0.10\\text{ m}$ ให้ค่า $k = \\frac{mg}{\\Delta y}$ สำหรับล้อ 1 วง",
          "คำนวณ $\\omega_0 = \\sqrt{k/m}$"
        ]
      },
      {
        "id": "p6_6",
        "num_in_lec": 6,
        "global_id": 71,
        "topic_th": "หัวข้อ 6.6",
        "topic_en": "Topic 6.6",
        "question_th": "ระบบกันสะเทือนสำหรับล้อรถยนต์หนึ่งล้อที่รองรับมวล $500\\text{ kg}$ มีค่าคงตัวสปริง $k = 4.9 \\times 10^4\\text{ N/m}$ หากแอมพลิจูดของการแกว่งกวัดลดลง $50\\%$ ในแต่ละรอบ จงประมาณค่าคงตัวการหน่วง $b$ สำหรับล้อนี้",
        "question_en": "ระบบกันสะเทือนสำหรับล้อรถยนต์หนึ่งล้อที่รองรับมวล $500\\text{ kg}$ มีspring constant $k = 4.9 \\times 10^4\\text{ N/m}$ หากamplitudeของการแกว่งกวัดลดลง $50\\%$ ในแต่ละรอบ จงประมาณค่าคงตัวการหน่วง $b$ สำหรับล้อนี้",
        "formulas": [
          "\\gamma = \\frac{\\ln 2}{T'}",
          "T' = \\frac{2\\pi}{\\sqrt{\\omega_0^2 - \\gamma^2}}",
          "b = 2 m \\gamma"
        ],
        "solution_th": "**เฉลยละเอียด:**\n$\\omega_0 = \\sqrt{\\frac{49000}{500}} = \\sqrt{98} \\approx 9.90\\text{ rad/s}$\nลด $50\\%$ ในหนึ่งรอบ: $\\gamma T' = \\ln 2 \\implies \\gamma \\frac{2\\pi}{\\sqrt{\\omega_0^2 - \\gamma^2}} = \\ln 2$\nแก้สมการหา $\\gamma$ ได้ $\\gamma = \\frac{\\omega_0 \\ln 2}{\\sqrt{4\\pi^2 + (\\ln 2)^2}} \\approx 1.085\\text{ s}^{-1}$\nค่าคงตัวการหน่วง $b = 2m\\gamma = 2(500)(1.085) = 1085\\text{ kg/s}$",
        "solution_en": "**Detailed Solution:**\n$m = 500\\text{ kg}$, $k = 49000\\text{ N/m} \\implies \\omega_0 = \\sqrt{98} \\approx 9.8995\\text{ rad/s}$.\nAmp drops $50\\%$ per cycle: $e^{-\\gamma T'} = 0.5 \\implies \\gamma T' = \\ln 2$.\nSince $T' = \\frac{2\\pi}{\\sqrt{\\omega_0^2 - \\gamma^2}}$, substituting gives $\\gamma \\frac{2\\pi}{\\sqrt{\\omega_0^2 - \\gamma^2}} = \\ln 2$.\nSolving for $\\gamma$: $\\gamma = \\frac{\\ln 2 \\cdot \\omega_0}{\\sqrt{4\\pi^2 + (\\ln 2)^2}} = \\frac{0.6931 \\times 9.8995}{\\sqrt{39.478 + 0.480}} \\approx 1.085\\text{ s}^{-1}$.\nDamping constant $b = 2m\\gamma = 2(500)(1.085) = 1085\\text{ kg/s} \\approx 1.09 \\times 10^3\\text{ kg/s}$.",
        "hints": [
          "ความถี่ธรรมชาติ $\\omega_0 = \\sqrt{\\frac{49000}{500}} \\approx 9.899\\text{ rad/s}$",
          "แอมพลิจูดลด $50\\%$ ใน 1 รอบ: $e^{-\\gamma T'} = 0.5 \\implies \\gamma \\frac{2\\pi}{\\sqrt{\\omega_0^2 - \\gamma^2}} = \\ln 2$"
        ]
      },
      {
        "id": "p6_7",
        "num_in_lec": 7,
        "global_id": 72,
        "topic_th": "หัวข้อ 6.7",
        "topic_en": "Topic 6.7",
        "question_th": "ตัวแกว่งกวัดแบบฮาร์มอนิกที่มีความหน่วงประกอบด้วยก้อนมวล $2.00\\text{ kg}$, สปริงที่มีค่าคงตัว $10.0\\text{ N/m}$, และแรงหน่วง $F = -bv$ ในตอนเริ่มต้นระบบแกว่งกวัดด้วยแอมพลิจูด $25.0\\text{ cm}$ แต่เนื่องจากมีความหน่วง แอมพลิจูดจึงลดลงเหลือสามในสี่ของค่าเริ่มต้นเมื่อแกว่งกวัดครบ 4 รอบ ค่าคงตัวการหน่วง $b$ มีค่าเท่าใด?",
        "question_en": "ตัวแกว่งกวัดแบบฮาร์มอนิกที่มีความหน่วงประกอบด้วยก้อนมวล $2.00\\text{ kg}$, สปริงที่มีค่าคงตัว $10.0\\text{ N/m}$, and แรงหน่วง $F = -bv$ ในตอนเริ่มต้นระบบแกว่งกวัดด้วยamplitude $25.0\\text{ cm}$ แต่เนื่องจากมีความหน่วง amplitudeจึงลดลงเหลือสามในสี่ของค่าเริ่มต้นwhere แกว่งกวัดครบ 4 รอบ ค่าคงตัวการหน่วง $b$ มีค่าเท่าใด?",
        "formulas": [
          "A(4T') = A_0 e^{-4\\gamma T'} = 0.75 A_0",
          "\\gamma = \\frac{\\ln(4/3)}{4 T'} \\approx \\frac{\\ln(4/3)}{4 T_0}",
          "b = 2m\\gamma"
        ],
        "solution_th": "**เฉลยละเอียด:**\nคาบโดยประมาณ $T_0 = 2\\pi\\sqrt{2/10} \\approx 2.81\\text{ s}$\nหลัง 4 รอบ แอมพลิจูดลดเหลือ $3/4$: $e^{-4\\gamma T_0} = 0.75 \\implies 4\\gamma(2.81) = \\ln(4/3) = 0.2877$\nได้ $\\gamma = 0.0256\\text{ s}^{-1}$\nค่าคงตัวการหน่วง $b = 2m\\gamma = 2(2)(0.0256) = 0.102\\text{ N}\\cdot\\text{s/m}$",
        "solution_en": "**Detailed Solution:**\nMass $m = 2.00\\text{ kg}$, $k = 10.0\\text{ N/m}$. Undamped period $T_0 = 2\\pi \\sqrt{\\frac{2.00}{10.0}} \\approx 2.810\\text{ s}$.\nAmplitude after 4 cycles ($t = 4T'$): $A(4T') = A_0 e^{-4\\gamma T'} = 0.75 A_0$.\nAssuming $T' \\approx T_0$ (since damping is small): $4\\gamma (2.810) = \\ln(4/3) = 0.2877$.\n$\\gamma = 0.0256\\text{ s}^{-1}$.\nDamping constant $b = 2m\\gamma = 2(2.00)(0.0256) = 0.102\\text{ N}\\cdot\\text{s/m}$.",
        "hints": [
          "หาคาบโดยประมาณ $T_0 = 2\\pi\\sqrt{\\frac{m}{k}}$",
          "ลดลงเหลือ 3/4 ใน 4 รอบ: $e^{-4\\gamma T_0} = 0.75 \\implies 4\\gamma T_0 = \\ln(4/3)$"
        ]
      },
      {
        "id": "p6_8",
        "num_in_lec": 8,
        "global_id": 73,
        "topic_th": "หัวข้อ 6.8",
        "topic_en": "Topic 6.8",
        "question_th": "สำหรับตัวแกว่งกวัดแบบฮาร์มอนิกที่มีความหน่วง (มวล $2.00\\text{ kg}$, ค่าคงตัวสปริง $10.0\\text{ N/m}$, แอมพลิจูดเริ่มต้น $25.0\\text{ cm}$) ซึ่งแอมพลิจูดลดลงเหลือสามในสี่ของค่าเริ่มต้นหลังจากแกว่งกวัดครบ 4 รอบ พลังงานที่ระบบสูญเสียไปในระหว่างการแกว่งกวัด 4 รอบนี้มีค่าเท่าใด?",
        "question_en": "สำหรับตัวแกว่งกวัดแบบฮาร์มอนิกที่มีความหน่วง (มวล $2.00\\text{ kg}$, spring constant $10.0\\text{ N/m}$, amplitudeเริ่มต้น $25.0\\text{ cm}$) ซึ่งamplitudeลดลงเหลือสามในสี่ของค่าเริ่มต้นหลังจากแกว่งกวัดครบ 4 รอบ พลังงานที่ระบบสูญเสียไปในระหว่างการแกว่งกวัด 4 รอบนี้มีค่าเท่าใด?",
        "formulas": [
          "E(t) = E_0 e^{-\\frac{b}{m}t}",
          "\\tau_E = \\frac{m}{b}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.8:**\nพลังงานลดลงเหลือ $1/e$ ของค่าเริ่มต้นเมื่อ $t = \\tau_E = \\frac{m}{b}$",
        "solution_en": "**Detailed Solution for Problem 6.8:**\nEnergy relaxation time $\\tau_E = \\frac{m}{b}$.",
        "hints": [
          "สมการตัวแกว่งกวัดแบบหน่วง $m\\ddot{x} + b\\dot{x} + kx = 0$",
          "ความถี่เชิงมุมหน่วง $\\omega' = \\sqrt{\\omega_0^2 - (b/2m)^2}$"
        ]
      },
      {
        "id": "p6_9",
        "num_in_lec": 9,
        "global_id": 74,
        "topic_th": "หัวข้อ 6.9",
        "topic_en": "Topic 6.9",
        "question_th": "ลูกตุ้มอย่างง่ายมีความยาว $1.00\\text{ m}$ ถูกปล่อยให้แกว่งจากมุมเริ่มต้น $15.0^\\circ$ หลังจากผ่านไป $1000\\text{ s}$ แอมพลิจูดของลูกตุ้มลดลงเนื่องจากแรงเสียดทานจนเหลือ $5.50^\\circ$ ค่าของอัตราส่วน $b/2m$ สำหรับการเคลื่อนที่แบบหน่วงของระบบนี้มีค่าเท่าใด?",
        "question_en": "ลูกตุ้มอย่างง่ายมีความยาว $1.00\\text{ m}$ ถูกปล่อยให้แกว่งจากมุมเริ่มต้น $15.0^\\circ$ หลังจากผ่านไป $1000\\text{ s}$ amplitudeของลูกตุ้มลดลงเนื่องจากแรงเสียดทานจนเหลือ $5.50^\\circ$ ค่าของอัตราส่วน $b/2m$ สำหรับการเคลื่อนที่แบบหน่วงของระบบนี้มีค่าเท่าใด?",
        "formulas": [
          "\\delta = \\ln\\left(\\frac{A_n}{A_{n+1}}\\right) = \\gamma T' \\approx \\frac{\\pi b}{m \\omega_0}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.9:**\nช่วงลดทอนลอการิทึม (Logarithmic decrement) $\\delta = \\gamma T' \\approx \\frac{\\pi b}{m \\omega_0}$",
        "solution_en": "**Detailed Solution for Problem 6.9:**\nLogarithmic decrement $\\delta \\approx \\frac{\\pi b}{m \\omega_0}$.",
        "hints": [
          "สมการตัวแกว่งกวัดแบบหน่วง $m\\ddot{x} + b\\dot{x} + kx = 0$",
          "ความถี่เชิงมุมหน่วง $\\omega' = \\sqrt{\\omega_0^2 - (b/2m)^2}$"
        ]
      },
      {
        "id": "p6_10",
        "num_in_lec": 10,
        "global_id": 75,
        "topic_th": "หัวข้อ 6.10",
        "topic_en": "Topic 6.10",
        "question_th": "วัตถุมวล $10.6\\text{ kg}$ แกว่งกวัดอยู่ที่ปลายสปริงในแนวดิ่งที่มีค่าคงตัวสปริง $2.05 \\times 10^4\\text{ N/m}$ ผลของแรงต้านอากาศถูกแทนด้วยค่าสัมประสิทธิ์ความหน่วง $b = 3.00\\text{ N}\\cdot\\text{s/m}$ จงคำนวณหาความถี่ของการแกว่งกวัดแบบหน่วงนี้",
        "question_en": "วัตถุมวล $10.6\\text{ kg}$ แกว่งกวัดอยู่ที่ปลายสปริงในแนวดิ่งที่มีspring constant $2.05 \\times 10^4\\text{ N/m}$ ผลของแรงต้านอากาศถูกแทนด้วยค่าสัมประสิทธิ์ความหน่วง $b = 3.00\\text{ N}\\cdot\\text{s/m}$ Calculate frequencyของการแกว่งกวัดแบบหน่วงนี้",
        "formulas": [
          "A(t) = A_0 e^{-\\gamma t} \\implies \\gamma t = 1 \\implies \\gamma = 0.200\\text{ s}^{-1}",
          "b = 2 m \\gamma = 2(0.500)(0.200) = 0.200\\text{ kg/s}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.10:**\nมวล $m = 10.6\\text{ kg}$, $k = 2.05 \\times 10^4\\text{ N/m}$, $b = 3.00\\text{ N}\\cdot\\text{s/m}$\n1. ความถี่เชิงมุมธรรมชาติ $\\omega_0 = \\sqrt{\\frac{20500}{10.6}} = 43.976\\text{ rad/s}$\n2. แฟกเตอร์ความหน่วง $\\gamma = \\frac{b}{2m} = \\frac{3.00}{2(10.6)} = 0.1415\\text{ s}^{-1}$\n3. ความถี่เชิงมุมแบบหน่วง $\\omega' = \\sqrt{43.976^2 - 0.1415^2} = 43.976\\text{ rad/s}$\nความถี่ของการแกว่งกวัด $$f' = \\frac{\\omega'}{2\\pi} = \\frac{43.976}{2\\pi} \\approx 7.00\\text{ Hz}$$",
        "solution_en": "**Detailed Solution for Problem 6.10:**\n$m = 10.6\\text{ kg}$, $k = 20500\\text{ N/m}$, $b = 3.00\\text{ N}\\cdot\\text{s/m}$.\nNatural frequency $\\omega_0 = 43.976\\text{ rad/s}$, damping $\\gamma = 0.1415\\text{ s}^{-1}$.\nDamped frequency $$f' = \\frac{\\sqrt{\\omega_0^2 - \\gamma^2}}{2\\pi} = \\frac{43.976}{2\\pi} \\approx 7.00\\text{ Hz}$$",
        "hints": [
          "ความถี่ธรรมชาติ $\\omega_0 = \\sqrt{\\frac{k}{m}}$, อัตราการหน่วง $\\gamma = \\frac{b}{2m}$",
          "ความถี่เชิงมุมหน่วง $\\omega' = \\sqrt{\\omega_0^2 - \\gamma^2} \\implies f' = \\frac{\\omega'}{2\\pi}$"
        ]
      },
      {
        "id": "p6_11",
        "num_in_lec": 11,
        "global_id": 76,
        "topic_th": "หัวข้อ 6.11",
        "topic_en": "Topic 6.11",
        "question_th": "จากระบบวัตถุมวล $10.6\\text{ kg}$ และสปริงค่าคงตัว $2.05 \\times 10^4\\text{ N/m}$ ที่มีค่าสัมประสิทธิ์ความหน่วง $b = 3.00\\text{ N}\\cdot\\text{s/m}$ แอมพลิจูดของการแกว่งกวัดของระบบนี้จะลดลงร้อยละเท่าใดในแต่ละรอบ?",
        "question_en": "จากระบบวัตถุมวล $10.6\\text{ kg}$ and สปริงค่าคงตัว $2.05 \\times 10^4\\text{ N/m}$ ที่มีค่าสัมประสิทธิ์ความหน่วง $b = 3.00\\text{ N}\\cdot\\text{s/m}$ amplitudeของการแกว่งกวัดของระบบนี้จะลดลงร้อยละเท่าใดในแต่ละรอบ?",
        "formulas": [
          "b_c = 2\\sqrt{k m}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.11:**\nจากข้อมูลข้อ 6.10: $\\gamma = 0.1415\\text{ s}^{-1}$, $f' = 7.00\\text{ Hz} \\implies T' = 0.1429\\text{ s}$\nอัตราส่วนแอมพลิจูดหลังผ่านไป 1 รอบ $$e^{-\\gamma T'} = e^{-0.1415 \\times 0.1429} = e^{-0.0202} \\approx 0.9800$$\nแอมพลิจูดลดลงร้อยละ $$100\\% - 98.00\\% = 2.00\\%$$",
        "solution_en": "**Detailed Solution for Problem 6.11:**\nFrom Problem 6.10: $\\gamma = 0.1415\\text{ s}^{-1}$, $T' = 0.1429\\text{ s}$.\nDecay factor per cycle $e^{-\\gamma T'} = e^{-0.0202} = 0.9800$.\nPercentage decrease in amplitude = $(1 - 0.9800) \\times 100\\% = 2.00\\%$.",
        "hints": [
          "คาบของการแกว่ง $T' = 1/f' \\approx 1/7.00 = 0.1429\\text{ s}$",
          "อัตราส่วนแอมพลิจูดใน 1 รอบ $A_1/A_0 = e^{-\\gamma T'}$, ร้อยละที่ลดลงคือ $(1 - e^{-\\gamma T'}) \\times 100\\%$"
        ]
      },
      {
        "id": "p6_12",
        "num_in_lec": 12,
        "global_id": 77,
        "topic_th": "หัวข้อ 6.12",
        "topic_en": "Topic 6.12",
        "question_th": "จากระบบวัตถุมวล $10.6\\text{ kg}$ และสปริงค่าคงตัว $2.05 \\times 10^4\\text{ N/m}$ ที่มีค่าสัมประสิทธิ์ความหน่วง $b = 3.00\\text{ N}\\cdot\\text{s/m}$ ต้องใช้ช่วงเวลานานเท่าใดพลังงานกลของระบบจึงจะลดลงเหลือ $5.00\\%$ ของค่าเริ่มต้น?",
        "question_en": "จากระบบวัตถุมวล $10.6\\text{ kg}$ and สปริงค่าคงตัว $2.05 \\times 10^4\\text{ N/m}$ ที่มีค่าสัมประสิทธิ์ความหน่วง $b = 3.00\\text{ N}\\cdot\\text{s/m}$ ต้องใช้ช่วงเวลานานเท่าใดพลังงานกลของระบบจึงจะลดลงเหลือ $5.00\\%$ ของค่าเริ่มต้น?",
        "formulas": [
          "f' = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m} - \\left(\\frac{b}{2m}\\right)^2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.12:**\nพลังงานกลแปรผันตามกำลังสองของแอมพลิจูด $E(t) = E_0 e^{-2\\gamma t}$\nเมื่อพลังงานลดลงเหลือ $5.00\\%$ ของค่าเริ่มต้น ($0.0500 E_0$):\n$$e^{-2\\gamma t} = 0.0500 \\implies 2\\gamma t = \\ln(20) \\approx 2.9957$$\nแทนค่า $\\gamma = 0.1415\\text{ s}^{-1}$:\n$$t = \\frac{2.9957}{2(0.1415)} = \\frac{2.9957}{0.2830} \\approx 10.6\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 6.12:**\nMechanical energy $E(t) = E_0 e^{-2\\gamma t}$.\nFor $E(t) = 0.0500 E_0 \\implies e^{-2\\gamma t} = 0.0500 \\implies 2\\gamma t = \\ln 20$.\nTime $$t = \\frac{\\ln 20}{2(0.1415)} \\approx 10.6\\text{ s}$$",
        "hints": [
          "พลังงานกล $E(t) = E_0 e^{-2\\gamma t}$",
          "ลดลงเหลือ $5.00\\% \\implies e^{-2\\gamma t} = 0.0500 \\implies t = \\frac{\\ln 20}{2\\gamma}$"
        ]
      },
      {
        "id": "p6_13",
        "num_in_lec": 13,
        "global_id": 78,
        "topic_th": "หัวข้อ 6.13",
        "topic_en": "Topic 6.13",
        "question_th": "สำหรับตัวแกว่งกวัดแบบหน่วงที่ไม่มีแรงขับภายนอก (damped, undriven oscillator) จงแสดงให้เห็นว่าอัตราการเปลี่ยนแปลงพลังงานกลของระบบเทียบกับเวลา $dE/dt$ มีค่าเท่ากับเท่าใดในรูปของค่าคงตัวการหน่วง $b$ และความเร็ว $v$?",
        "question_en": "สำหรับตัวแกว่งกวัดแบบหน่วงที่ไม่มีแรงขับภายนอก (damped, undriven oscillator) จงแสดงให้เห็นว่าอัตราการเปลี่ยนแปลงพลังงานกลของระบบเทียบกับเวลา $dE/dt$ มีค่าเท่ากับเท่าใดในรูปของค่าคงตัวการหน่วง $b$ and ความเร็ว $v$?",
        "formulas": [
          "\\frac{dE}{dt} = v (m \\ddot{x} + k x) = v(-b v) = -b v^2"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.13:**\nพิสูจน์ $\\frac{dE}{dt} = -b v^2$ โดยหาอนุพันธ์พลังงานกลรวม $E = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$ เทียบกับเวลาแล้วแทน $m\\ddot{x} + kx = -bv$",
        "solution_en": "**Detailed Solution for Problem 6.13:**\nProof of $\\frac{dE}{dt} = -b v^2$ using Newton's 2nd law for damped SHM.",
        "hints": [
          "สมการการเคลื่อนที่แบบหน่วง $m\\ddot{x} + b\\dot{x} + kx = 0$",
          "อัตราการเปลี่ยนแปลงพลังงานกล $\\frac{dE}{dt} = -b v^2$"
        ]
      },
      {
        "id": "p6_14",
        "num_in_lec": 14,
        "global_id": 79,
        "topic_th": "หัวข้อ 6.14",
        "topic_en": "Topic 6.14",
        "question_th": "จากข้อมูลการวัดของตัวแกว่งกวัดแบบหน่วงที่มีมวล $0.001\\text{ kg}$ และค่าคงตัวสปริง $10.0\\text{ N/m}$ พบว่าอัตราส่วนของการกระจัดสูงสุดที่เวลา $t = 23.1\\text{ ms}$ ต่อการกระจัดสูงสุดที่เวลา $t = 0$ มีค่าเท่ากับ $0.250$ พอดี ($x_{\\max}(23.1\\text{ ms})/x_{\\max}(0) = 0.250$) จงหาอัตราส่วน $b/2m$ ของระบบนี้",
        "question_en": "จากข้อมูลการวัดของตัวแกว่งกวัดแบบหน่วงที่มีมวล $0.001\\text{ kg}$ and spring constant $10.0\\text{ N/m}$ พบว่าอัตราส่วนของการกระจัดสูงสุดat time  $t = 23.1\\text{ ms}$ ต่อการกระจัดสูงสุดat time  $t = 0$ มีค่าเท่ากับ $0.250$ พอดี ($x_{\\max}(23.1\\text{ ms})/x_{\\max}(0) = 0.250$) Find อัตราส่วน $b/2m$ ของระบบนี้",
        "formulas": [
          "\\delta = \\ln(1.05) = 0.04879",
          "b = \\frac{m \\omega_0 \\delta}{\\pi} = 1.55 \\times 10^{-3}\\text{ kg/s}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.14:**\nมวล $m = 0.001\\text{ kg}$, $k = 10.0\\text{ N/m}$, อัตราส่วนแอมพลิจูดที่ $t = 23.1\\text{ ms}$ เท่ากับ $0.250$\nจากสมการ $$A(t) = A_0 e^{-\\gamma t} \\implies \\frac{A(t)}{A_0} = e^{-\\gamma t} = 0.250$$\nเทค log ธรรมชาติ: $$\\gamma t = \\ln\\left(\\frac{1}{0.250}\\right) = \\ln(4) \\approx 1.3863$$\nจะได้อัตราส่วน $\\frac{b}{2m} = \\gamma = \\frac{1.3863}{0.0231\\text{ s}} = 60.0\\text{ s}^{-1}$",
        "solution_en": "**Detailed Solution for Problem 6.14:**\nGiven $A(23.1\\text{ ms})/A_0 = 0.250$.\nUsing $e^{-\\gamma t} = 0.250 \\implies \\gamma t = \\ln 4 \\approx 1.3863$.\nRatio $$\\frac{b}{2m} = \\gamma = \\frac{1.3863}{0.0231\\text{ s}} = 60.0\\text{ s}^{-1}$$",
        "hints": [
          "แอมพลิจูดลดลงตาม $A(t) = A_0 e^{-\\gamma t}$",
          "อัตราส่วน $\\frac{b}{2m} = \\gamma = \\frac{\\ln(A_0/A(t))}{t}$"
        ]
      },
      {
        "id": "p6_15",
        "num_in_lec": 15,
        "global_id": 80,
        "topic_th": "หัวข้อ 6.15",
        "topic_en": "Topic 6.15",
        "question_th": "พิจารณาตัวแกว่งกวัดแบบหน่วงที่มีมวลของวัตถุ $375\\text{ g}$, ค่าคงตัวสปริง $100\\text{ N/m}$, และมีค่าคงตัวการหน่วง $b = 0.100\\text{ N}\\cdot\\text{s/m}$ ต้องใช้ช่วงเวลานานเท่าใด แอมพลิจูดของการแกว่งกวัดจึงจะลดลงเหลือครึ่งหนึ่งของค่าเริ่มต้น?",
        "question_en": "พิจารณาตัวแกว่งกวัดแบบหน่วงที่มีมวลของวัตถุ $375\\text{ g}$, spring constant $100\\text{ N/m}$, and มีค่าคงตัวการหน่วง $b = 0.100\\text{ N}\\cdot\\text{s/m}$ ต้องใช้ช่วงเวลานานเท่าใด amplitudeของการแกว่งกวัดจึงจะลดลงเหลือครึ่งหนึ่งของค่าเริ่มต้น?",
        "formulas": [
          "f' = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m} - \\left(\\frac{b}{2m}\\right)^2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.15:**\nมวล $m = 0.375\\text{ kg}$, $k = 100\\text{ N/m}$, $b = 0.100\\text{ N}\\cdot\\text{s/m}$\nอัตราการหน่วง $\\gamma = \\frac{b}{2m} = \\frac{0.100}{2(0.375)} = 0.1333\\text{ s}^{-1}$\nช่วงเวลาที่แอมพลิจูดลดลงเหลือครึ่งหนึ่ง ($A(t) = A_0/2$):\n$$e^{-\\gamma t} = \\frac{1}{2} \\implies t_{1/2} = \\frac{\\ln 2}{\\gamma} = \\frac{0.6931}{0.1333\\text{ s}^{-1}} \\approx 5.20\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 6.15:**\n$m = 0.375\\text{ kg}$, $b = 0.100\\text{ N}\\cdot\\text{s/m} \\implies \\gamma = 0.1333\\text{ s}^{-1}$.\nHalf-amplitude time $$t_{1/2} = \\frac{\\ln 2}{\\gamma} = \\frac{0.6931}{0.1333} \\approx 5.20\\text{ s}$$",
        "hints": [
          "อัตราการหน่วง $\\gamma = \\frac{b}{2m} = \\frac{0.100}{2(0.375)} = 0.1333\\text{ s}^{-1}$",
          "แอมพลิจูดลดลงเหลือครึ่งหนึ่งเมื่อ $e^{-\\gamma t} = 1/2 \\implies t_{1/2} = \\frac{\\ln 2}{\\gamma}$"
        ]
      },
      {
        "id": "p6_16",
        "num_in_lec": 16,
        "global_id": 81,
        "topic_th": "หัวข้อ 6.16",
        "topic_en": "Topic 6.16",
        "question_th": "สำหรับตัวแกว่งกวัดแบบหน่วงมวล $375\\text{ g}$, ค่าคงตัวสปริง $100\\text{ N/m}$, และค่าคงตัวการหน่วง $b = 0.100\\text{ N}\\cdot\\text{s/m}$ ต้องใช้ช่วงเวลานานเท่าใด พลังงานกลของระบบจึงจะลดลงเหลือครึ่งหนึ่งของค่าเริ่มต้น?",
        "question_en": "สำหรับตัวแกว่งกวัดแบบหน่วงมวล $375\\text{ g}$, spring constant $100\\text{ N/m}$, and ค่าคงตัวการหน่วง $b = 0.100\\text{ N}\\cdot\\text{s/m}$ ต้องใช้ช่วงเวลานานเท่าใด พลังงานกลของระบบจึงจะลดลงเหลือครึ่งหนึ่งของค่าเริ่มต้น?",
        "formulas": [
          "b_c = 2\\sqrt{k m}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.16:**\nมวล $m = 0.375\\text{ kg}$, $k = 100\\text{ N/m}$, $b = 0.100\\text{ N}\\cdot\\text{s/m}$\nอัตราการหน่วง $\\gamma = \\frac{b}{2m} = 0.1333\\text{ s}^{-1}$\nช่วงเวลาที่พลังงานกลลดลงเหลือครึ่งหนึ่ง ($E(t) = E_0/2$):\n$$e^{-2\\gamma t} = \\frac{1}{2} \\implies 2\\gamma t = \\ln 2 \\implies t = \\frac{\\ln 2}{2\\gamma} = \\frac{0.6931}{2(0.1333)} \\approx 2.60\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 6.16:**\nMechanical energy $E(t) = E_0 e^{-2\\gamma t}$.\nHalf-energy time $$t_{1/2, E} = \\frac{\\ln 2}{2\\gamma} = \\frac{0.6931}{2(0.1333)} \\approx 2.60\\text{ s}$$",
        "hints": [
          "พลังงาน $E(t) = E_0 e^{-2\\gamma t}$",
          "พลังงานลดลงเหลือครึ่งหนึ่งเมื่อ $e^{-2\\gamma t} = 1/2 \\implies t_{1/2, E} = \\frac{\\ln 2}{2\\gamma} = \\frac{t_{1/2}}{2}$"
        ]
      },
      {
        "id": "p6_17",
        "num_in_lec": 17,
        "global_id": 82,
        "topic_th": "หัวข้อ 6.17",
        "topic_en": "Topic 6.17",
        "question_th": "ไข่ต้มสุกมวล $50.0\\text{ g}$ แกว่งกวัดอยู่ที่ปลายสปริงที่มีค่าคงตัว $25.0\\text{ N/m}$ การกระจัดเริ่มต้นคือ $0.300\\text{ m}$ เมื่อมีแรงหน่วงกระทำต่อไข่ทำให้แอมพลิจูดของการเคลื่อนที่ลดลงเหลือ $0.100\\text{ m}$ ภายในเวลา $5.00\\text{ s}$ จงคำนวณหาขนาดของค่าคงตัวการหน่วง $b$",
        "question_en": "ไข่ต้มสุกมวล $50.0\\text{ g}$ แกว่งกวัดอยู่ที่ปลายสปริงที่มีค่าคงตัว $25.0\\text{ N/m}$ การกระจัดเริ่มต้นคือ $0.300\\text{ m}$ where มีแรงหน่วงกระทำต่อไข่ทำให้amplitude of motionลดลงเหลือ $0.100\\text{ m}$ ภายในเวลา $5.00\\text{ s}$ Calculate ขนาดของค่าคงตัวการหน่วง $b$",
        "formulas": [
          "A(t) = x_0 e^{-\\gamma t}, \\quad \\gamma = \\frac{b}{2m}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.17:**\nมวลไข่ $m = 50.0\\text{ g} = 0.050\\text{ kg}$, $k = 25.0\\text{ N/m}$, $A_0 = 0.300\\text{ m}$, $A(5.00\\text{ s}) = 0.100\\text{ m}$\nจากสมการแอมพลิจูด $$A(t) = A_0 e^{-\\gamma t} \\implies 0.100 = 0.300 e^{-5\\gamma} \\implies e^{5\\gamma} = 3.00$$\n$$\\gamma = \\frac{\\ln 3}{5.00} = \\frac{1.0986}{5.00} = 0.2197\\text{ s}^{-1}$$\nค่าคงตัวการหน่วง $$b = 2 m \\gamma = 2(0.050\\text{ kg})(0.2197\\text{ s}^{-1}) = 0.0220\\text{ kg/s} = 2.20 \\times 10^{-2}\\text{ N}\\cdot\\text{s/m}$$",
        "solution_en": "**Detailed Solution for Problem 6.17:**\nEgg mass $m = 0.050\\text{ kg}$, $A_0 = 0.300\\text{ m}$, $A(5\\text{ s}) = 0.100\\text{ m}$.\nDamping rate $\\gamma = \\frac{\\ln 3}{5.00} = 0.2197\\text{ s}^{-1}$.\nDamping constant $$b = 2 m \\gamma = 2(0.050)(0.2197) = 0.0220\\text{ kg/s} = 2.20 \\times 10^{-2}\\text{ N}\\cdot\\text{s/m}$$",
        "hints": [
          "แอมพลิจูด $A(t) = A_0 e^{-\\gamma t} \\implies e^{5\\gamma} = \\frac{A_0}{A(5)} = \\frac{0.300}{0.100} = 3.00$",
          "หา $\\gamma = \\frac{\\ln 3}{5.00} \\approx 0.2197\\text{ s}^{-1}$ แล้วคำนวณ $b = 2 m \\gamma$"
        ]
      },
      {
        "id": "p6_18",
        "num_in_lec": 18,
        "global_id": 83,
        "topic_th": "หัวข้อ 6.18",
        "topic_en": "Topic 6.18",
        "question_th": "สำหรับตัวแกว่งกวัดแบบหน่วงในอุดมคติที่ประกอบด้วยมวล $m = 250\\text{ g}$, สปริงค่าคงตัว $k = 85\\text{ N/m}$, และมีแผ่นต้านทานที่จุ่มในของเหลวซึ่งให้ค่าคงตัวการหน่วง $b = 70\\text{ g/s}$ คาบของการเคลื่อนที่แกว่งกวัดของระบบนี้มีค่าเท่าใด?",
        "question_en": "สำหรับตัวแกว่งกวัดแบบหน่วงในอุดมคติที่ประกอบด้วยมวล $m = 250\\text{ g}$, สปริงค่าคงตัว $k = 85\\text{ N/m}$, and มีแผ่นต้านทานที่จุ่มในของเหลวซึ่งให้ค่าคงตัวการหน่วง $b = 70\\text{ g/s}$ period of motionแกว่งกวัดของระบบนี้มีค่าเท่าใด?",
        "formulas": [
          "f' = 2.93\\text{ Hz}, \\quad T' = 0.341\\text{ s}, \\quad 2\\gamma = 0.280\\text{ s}^{-1}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 6.18:**\nมวล $m = 0.250\\text{ kg}$, $k = 85\\text{ N/m}$, $b = 0.070\\text{ kg/s}$\n1. ความถี่เชิงมุมธรรมชาติ $\\omega_0 = \\sqrt{\\frac{85}{0.250}} = 18.439\\text{ rad/s}$\n2. แฟกเตอร์ความหน่วง $\\gamma = \\frac{0.070}{2(0.250)} = 0.140\\text{ s}^{-1}$\n3. ความถี่เชิงมุมแบบหน่วง $\\omega' = \\sqrt{18.439^2 - 0.140^2} = 18.4385\\text{ rad/s}$\nคาบของการเคลื่อนที่แกว่งกวัด $$T' = \\frac{2\\pi}{\\omega'} = \\frac{2\\pi}{18.4385} \\approx 0.341\\text{ s}$$",
        "solution_en": "**Detailed Solution for Problem 6.18:**\n$m = 0.250\\text{ kg}$, $k = 85\\text{ N/m}$, $b = 0.070\\text{ kg/s}$.\n$\\omega_0 = 18.439\\text{ rad/s}$, $\\gamma = 0.140\\text{ s}^{-1} \\implies \\omega' = 18.4385\\text{ rad/s}$.\nPeriod $$T' = \\frac{2\\pi}{18.4385} \\approx 0.341\\text{ s}$$",
        "hints": [
          "\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{85}{0.250}} = 18.439\\text{ rad/s}",
          "\\gamma = \\frac{b}{2m} = \\frac{0.070}{2(0.250)} = 0.140\\text{ s}^{-1} \\implies T' = \\frac{2\\pi}{\\sqrt{\\omega_0^2 - \\gamma^2}}"
        ]
      }
    ]
  },
  {
    "lecture": 7,
    "title_th": "Lecture 7: การแกว่งกวัดที่มีแรงขับและการสั่นพ้อง (Forced Oscillations & Resonance)",
    "title_en": "Lecture 7: Forced Oscillations & Resonance",
    "problems": [
      {
        "id": "p7_1",
        "num_in_lec": 1,
        "global_id": 84,
        "topic_th": "หัวข้อ 7.1",
        "topic_en": "Topic 7.1",
        "question_th": "ทารกกระโดดขึ้นลงในเปล มวลของทารกคือ $12.5\\text{ kg}$ และฟูกที่นอนประพฤติตัวเหมือนสปริงเบาที่มีค่าคงตัวสปริง $700\\text{ N/m}$(a) ทารกจะเกิดเรโซแนนซ์และได้แอมพลิจูดการสั่นสูงสุดเมื่อกระโดดด้วยความถี่เท่าใด?(b) หากทารกต้องการใช้ฟูกเป็นแทรมโพลีน (หลุดจากการสัมผัสฟูกในบางช่วงของรอบการสั่น) ทารกต้องกระโดดด้วยแอมพลิจูดอย่างน้อยเท่าใด?",
        "question_en": "ทารกกระโดดขึ้นลงในเปล มวลของทารกคือ $12.5\\text{ kg}$ and ฟูกที่นอนประพฤติตัวเหมือนสปริงเบาที่มีspring constant $700\\text{ N/m}$(a) ทารกจะเกิดเรโซแนนซ์and ได้amplitudeการสั่นสูงสุดwhere กระโดดด้วยfrequencyเท่าใด?(b) หากทารกต้องการใช้ฟูกเป็นแทรมโพลีน (หลุดจากการสัมผัสฟูกในบางช่วงของรอบการสั่น) ทารกต้องกระโดดด้วยamplitudeอย่างน้อยเท่าใด?",
        "formulas": [
          "f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}",
          "a_{\\max} = \\omega_0^2 A \\ge g \\implies A_{\\min} = \\frac{m g}{k}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.1:**\nทารกมวล $12.5\\text{ kg}$ บนสปริง $700\\text{ N/m}$:\n(a) ความถี่สั่นพ้อง $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{700}{12.5}} = 1.19\\text{ Hz}$\n(b) ทารกหลุดจากที่นอนเมื่อความเร่งสูงสุดเท่ากับ $g$: $A_{\\min} = \\frac{mg}{k} = \\frac{12.5 \\times 9.80}{700} = 0.175\\text{ m} = 17.5\\text{ cm}$",
        "solution_en": "**Detailed Solution for Problem 7.1:**\n(a) Resonant frequency $f_0 = 1.19\\text{ Hz}$\n(b) Minimum separation amplitude $A_{\\min} = 17.5\\text{ cm}$",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_2",
        "num_in_lec": 2,
        "global_id": 85,
        "topic_th": "หัวข้อ 7.2",
        "topic_en": "Topic 7.2",
        "question_th": "ลูกตุ้มอย่างง่ายเส้นหนึ่งเกิดการสั่นพ้อง (Resonance) กับเครื่องส่งสัญญาณเตือน (Beeper) ซึ่งมีความถี่ $1.50\\text{ Hz}$ จงหาความยาวของลูกตุ้มเส้นนี้",
        "question_en": "ลูกตุ้มอย่างง่ายเส้นหนึ่งเกิดการสั่นพ้อง (Resonance) กับเครื่องส่งสัญญาณเตือน (Beeper) ซึ่งมีfrequency $1.50\\text{ Hz}$ Find ความยาวของลูกตุ้มเส้นนี้",
        "formulas": [
          "f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{L}} \\implies L = \\frac{g}{4\\pi^2 f_0^2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.2:**\nลูกตุ้มสั่นพ้องกับความถี่ $1.50\\text{ Hz}$:\n$$L = \\frac{9.80}{4\\pi^2 (1.50)^2} = 0.110\\text{ m} = 11.0\\text{ cm}$$",
        "solution_en": "**Detailed Solution for Problem 7.2:**\nResonant pendulum length $L = 11.0\\text{ cm}$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_3",
        "num_in_lec": 3,
        "global_id": 86,
        "topic_th": "หัวข้อ 7.3",
        "topic_en": "Topic 7.3",
        "question_th": "วัตถุมีน้ำหนัก $40.0\\text{ N}$ แขวนอยู่กับสปริงที่มีค่าคงตัวสปริง $200\\text{ N/m}$ ระบบไม่มีความหน่วง ($b = 0$) และถูกกระทำด้วยแรงขับเคลื่อนฮาร์มอนิกความถี่ $10.0\\text{ Hz}$ ทำให้เกิดการเคลื่อนที่ด้วยแอมพลิจูด $2.00\\text{ cm}$ จงหาขนาดสูงสุดของแรงขับเคลื่อนภายนอกนี้",
        "question_en": "วัตถุมีน้ำหนัก $40.0\\text{ N}$ แขวนอยู่กับสปริงที่มีspring constant $200\\text{ N/m}$ ระบบไม่มีความหน่วง ($b = 0$) and ถูกกระทำด้วยแรงขับเคลื่อนฮาร์มอนิกfrequency $10.0\\text{ Hz}$ ทำให้เกิดการเคลื่อนที่ด้วยamplitude $2.00\\text{ cm}$ Find ขนาดสูงสุดของแรงขับเคลื่อนภายนอกนี้",
        "formulas": [
          "\\omega_0^2 = \\frac{k}{m}, \\quad A = \\frac{F_0/m}{|\\omega_0^2 - \\omega_d^2|}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.3:**\nน้ำหนัก $W = 40.0\\text{ N} \\implies m = \\frac{40.0}{9.80} = 4.082\\text{ kg}$, $k = 200\\text{ N/m}$\nความถี่แรงขับ $f = 10.0\\text{ Hz} \\implies \\omega_d = 20\\pi \\approx 62.83\\text{ rad/s}$\nคำนวณ $|k - m\\omega_d^2| = |200 - 4.082 \\times (20\\pi)^2| = |200 - 16114| = 15914\\text{ N/m}$\nขนาดแรงขับเคลื่อน $F_0$ ที่ทำให้ได้แอมพลิจูด $A = 0.0200\\text{ m}$:\n$$F_0 = A |k - m\\omega_d^2| = 0.0200 \\times 15914 \\approx 318\\text{ N}$$",
        "solution_en": "**Detailed Solution for Problem 7.3:**\nWeight $W = 40.0\\text{ N} \\implies m = 4.082\\text{ kg}$, $k = 200\\text{ N/m}$, $\\omega_d = 20\\pi\\text{ rad/s}$.\nImpedance factor $|k - m\\omega_d^2| = |200 - 4.082(20\\pi)^2| = 15914\\text{ N/m}$.\nDriving force amplitude $$F_0 = A |k - m\\omega_d^2| = 0.0200 \\times 15914 \\approx 318\\text{ N}$$",
        "hints": [
          "มวล $m = \\frac{W}{g} = \\frac{40.0}{9.80} = 4.082\\text{ kg}$, $\\omega_d = 2\\pi f = 20\\pi \\approx 62.83\\text{ rad/s}$",
          "แอมพลิจูดระบบไร้ความหน่วง $A = \\frac{F_0}{|k - m\\omega_d^2|} \\implies F_0 = A |k - m\\omega_d^2|$"
        ]
      },
      {
        "id": "p7_4",
        "num_in_lec": 4,
        "global_id": 87,
        "topic_th": "หัวข้อ 7.4",
        "topic_en": "Topic 7.4",
        "question_th": "วัตถุมวล $2.00\\text{ kg}$ ติดอยู่กับสปริงและเคลื่อนที่โดยไม่มีแรงเสียดทาน ($b = 0$) โดยถูกกระทำด้วยแรงขับเคลื่อนภายนอก $F = (3.00\\text{ N}) \\sin(2\\pi t)$ หากค่าคงตัวของสปริงคือ $20.0\\text{ N/m}$ จงหา:(a) ความถี่เชิงมุมธรรมชาติของระบบ(b) ความถี่เชิงมุมของแรงขับเคลื่อน(c) แอมพลิจูดของการเคลื่อนที่",
        "question_en": "วัตถุมวล $2.00\\text{ kg}$ ติดอยู่กับสปริงand เคลื่อนที่โดยไม่มีแรงเสียดทาน ($b = 0$) โดยถูกกระทำด้วยแรงขับเคลื่อนภายนอก $F = (3.00\\text{ N}) \\sin(2\\pi t)$ หากค่าคงตัวของสปริงคือ $20.0\\text{ N/m}$ Find:(a) frequencyเชิงมุมธรรมชาติของระบบ(b) frequencyเชิงมุมของแรงขับเคลื่อน(c) amplitude of motion",
        "formulas": [
          "A = \\frac{F_0/m}{|\\omega_0^2 - \\omega_d^2|}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.4:**\nมวล $m = 2.00\\text{ kg}$, $k = 20.0\\text{ N/m}$, แรงขับ $F(t) = 3.00 \\sin(2\\pi t)$\nความถี่เชิงมุมธรรมชาติ $\\omega_0^2 = \\frac{20.0}{2.00} = 10.0\\text{ (rad/s)}^2$\nความถี่เชิงมุมแรงขับ $\\omega_d = 2\\pi \\approx 6.283\\text{ rad/s} \\implies \\omega_d^2 = 4\\pi^2 \\approx 39.48\\text{ (rad/s)}^2$\nแอมพลิจูดคำตอบเฉพาะ $$A = \\frac{F_0/m}{\\omega_0^2 - \\omega_d^2} = \\frac{3.00/2.00}{10.0 - 39.48} = \\frac{1.50}{-29.48} \\approx -0.0509\\text{ m} = -5.09\\text{ cm}$$\nตำแหน่งที่สภาวะคงตัว $$x(t) = -0.0509 \\sin(2\\pi t)\\text{ m}$$",
        "solution_en": "**Detailed Solution for Problem 7.4:**\n$m = 2.00\\text{ kg}$, $k = 20.0\\text{ N/m}$, $F(t) = 3.00 \\sin(2\\pi t)$.\n$\\omega_0^2 = 10.0$, $\\omega_d^2 = 4\\pi^2 \\approx 39.48$.\nAmplitude $$A = \\frac{1.50}{10.0 - 39.48} = -0.0509\\text{ m}$$\nSteady-state position $$x(t) = -0.0509 \\sin(2\\pi t)\\text{ m}$$",
        "hints": [
          "ความถี่ธรรมชาติ $\\omega_0^2 = \\frac{k}{m} = \\frac{20.0}{2.00} = 10.0\\text{ (rad/s)}^2$",
          "แอมพลิจูดสภาวะคงตัว $A = \\frac{F_0/m}{\\omega_0^2 - \\omega_d^2}$ โดย $\\omega_d = 2\\pi\\text{ rad/s}$"
        ]
      },
      {
        "id": "p7_5",
        "num_in_lec": 5,
        "global_id": 88,
        "topic_th": "หัวข้อ 7.5",
        "topic_en": "Topic 7.5",
        "question_th": "ในกรณีของตัวแกว่งกวัดที่มีแรงขับเคลื่อน แอมพลิจูดถูกกำหนดโดยสมการ$$x_m = \\frac{F_m}{[m^2(\\omega_d^2 - \\omega^2)^2 + b^2\\omega_d^2]^{1/2}}$$ที่สภาวะเรโซแนนซ์ จงหา:(a) แอมพลิจูดของการกระจัด(b) แอมพลิจูดของความเร็ว ของวัตถุที่กำลังแกว่งกวัดนี้",
        "question_en": "ในกรณีของตัวแกว่งกวัดที่มีแรงขับเคลื่อน amplitudeถูกกำหนดโดยสมการ$$x_m = \\frac{F_m}{[m^2(\\omega_d^2 - \\omega^2)^2 + b^2\\omega_d^2]^{1/2}}$$ที่สภาวะเรโซแนนซ์ Find:(a) amplitudeของการกระจัด(b) amplitudeของความเร็ว ของวัตถุที่กำลังแกว่งกวัดนี้",
        "formulas": [
          "A_{\\max} \\approx \\frac{F_0}{b \\omega_0} \\quad (\\text{At Resonance for Small Damping})"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.5:**\nจากสมการแอมพลิจูดแรงขับ ที่สภาวะเรโซแนนซ์สำหรับการหน่วงน้อย แอมพลิจูดสูงสุดประมาณเป็น $A_{\\max} \\approx \\frac{F_0}{b \\omega_0}$",
        "solution_en": "**Detailed Solution for Problem 7.5:**\nPeak amplitude at resonance $A_{\\max} \\approx \\frac{F_0}{b \\omega_0}$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_6",
        "num_in_lec": 6,
        "global_id": 89,
        "topic_th": "หัวข้อ 7.6",
        "topic_en": "Topic 7.6",
        "question_th": "มีลูกตุ้มอย่างง่าย 9 เส้นแขวนอยู่บนคานแนวนอนเดียวกัน โดยมีความยาวดังนี้: (a) $0.10$, (b) $0.30$, (c) $0.40$, (d) $0.80$, (e) $1.2$, (f) $2.8$, (g) $3.5$, (h) $5.0$, และ (i) $6.2\\text{ m}$ สมมติว่าคานเกิดการแกว่งกวัดในแนวระดับด้วยความถี่เชิงมุมในช่วง $2.00\\text{ rad/s}$ ถึง $4.00\\text{ rad/s}$ ลูกตุ้มเส้นใดบ้างที่จะเกิดสั่นพ้อง?",
        "question_en": "มีลูกตุ้มอย่างง่าย 9 เส้นแขวนอยู่บนคานแนวนอนเดียวกัน โดยมีความยาวดังนี้: (a) $0.10$, (b) $0.30$, (c) $0.40$, (d) $0.80$, (e) $1.2$, (f) $2.8$, (g) $3.5$, (h) $5.0$, and  (i) $6.2\\text{ m}$ สมมติว่าคานเกิดการแกว่งกวัดในแนวระดับด้วยfrequencyเชิงมุมในช่วง $2.00\\text{ rad/s}$ ถึง $4.00\\text{ rad/s}$ ลูกตุ้มเส้นใดบ้างที่จะเกิดสั่นพ้อง?",
        "formulas": [
          "\\omega_0 = \\omega_d \\implies \\sqrt{\\frac{g}{L}} = \\omega",
          "L = \\frac{g}{\\omega^2}"
        ],
        "solution_th": "**เฉลยละเอียด:**\nสั่นพ้องเมื่อความถี่คานเท่ากับความถี่ลูกตุ้ม $\\omega = \\sqrt{g/L} \\implies L = g/\\omega^2$\nสำหรับ $\\omega = 2.00\\text{ rad/s}: L = \\frac{9.80}{4} = 2.45\\text{ m}$\nสำหรับ $\\omega = 4.00\\text{ rad/s}: L = \\frac{9.80}{16} = 0.61\\text{ m}$\nลูกตุ้มที่สั่นพ้องต้องมีความยาวอยู่ในช่วง $0.61\\text{ m}$ ถึง $2.45\\text{ m}$\nจากโจทย์คือลูกตุ้ม (d) $0.80\\text{ m}$ และ (e) $1.2\\text{ m}$",
        "solution_en": "**Detailed Solution:**\nResonance occurs when the driving frequency matches the natural frequency: $\\omega = \\sqrt{\\frac{g}{L}} \\implies L = \\frac{g}{\\omega^2}$.\nFor $\\omega = 2.00\\text{ rad/s}$: $L_{max} = \\frac{9.80}{4.00} = 2.45\\text{ m}$.\nFor $\\omega = 4.00\\text{ rad/s}$: $L_{min} = \\frac{9.80}{16.0} = 0.6125\\text{ m}$.\nPendulums with lengths between $0.613\\text{ m}$ and $2.45\\text{ m}$ will resonate.\nFrom the given list, lengths (d) $0.80\\text{ m}$ and (e) $1.2\\text{ m}$ fall in this range.",
        "hints": [
          "สั่นพ้องเมื่อความถี่ขับเท่ากับความถี่ธรรมชาติ $\\omega_0 = \\sqrt{g/L}$",
          "หาความยาวโซนสั่นพ้องจาก $L_{min} = \\frac{9.80}{4.00^2}$ และ $L_{max} = \\frac{9.80}{2.00^2}$"
        ]
      },
      {
        "id": "p7_7",
        "num_in_lec": 7,
        "global_id": 90,
        "topic_th": "หัวข้อ 7.7",
        "topic_en": "Topic 7.7",
        "question_th": "รถยนต์มวล $1000\\text{ kg}$ บรรทุกผู้โดยสาร 4 คน มวลคนละ $82\\text{ kg}$ ขับไปบนถนนลูกรังที่มีรอยลูกคลื่นห่างกัน $4.0\\text{ m}$ รถยนต์เกิดการเด้งด้วยแอมพลิจูดสูงสุดเมื่อขับด้วยอัตราเร็ว $16\\text{ km/h}$ หากรถหยุดและผู้โดยสารทั้งหมดลงจากรถ ตัวถังรถจะยกตัวสูงขึ้นจากระบบกันสะเทือนเป็นระยะทางเท่าใด?",
        "question_en": "รถยนต์มวล $1000\\text{ kg}$ บรรทุกผู้โดยสาร 4 คน มวลคนละ $82\\text{ kg}$ ขับไปบนถนนลูกรังที่มีรอยลูกคลื่นห่างกัน $4.0\\text{ m}$ รถยนต์เกิดการเด้งด้วยamplitudeสูงสุดwhere ขับด้วยอัตราเร็ว $16\\text{ km/h}$ หากรถหยุดand ผู้โดยสารทั้งหมดลงจากรถ ตัวถังรถจะยกตัวสูงขึ้นจากระบบกันสะเทือนเป็นระยะทางเท่าใด?",
        "formulas": [
          "f_d = \\frac{V}{\\lambda}, \\quad k_{\\text{eff}} = (2\\pi f_d)^2 M"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.7:**\nมวลรวมรถ $1328\\text{ kg}, V = 4.44\\text{ m/s}, \\lambda = 4.0\\text{ m} \\implies f_d = 1.11\\text{ Hz}$\nค่าคงตัวสปริงรวม $k_{\\text{eff}} = (2\\pi \\times 1.11)^2 (1328) = 6.45 \\times 10^4\\text{ N/m}$",
        "solution_en": "**Detailed Solution for Problem 7.7:**\nTotal spring constant $k_{\\text{eff}} = 6.45 \\times 10^4\\text{ N/m}$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_8",
        "num_in_lec": 8,
        "global_id": 91,
        "topic_th": "หัวข้อ 7.8",
        "topic_en": "Topic 7.8",
        "question_th": "ระบบตัวแกว่งกวัดฮาร์มอนิกแบบหน่วงถูกกระทำด้วยแรงขับเคลื่อนที่แปรผันแบบไซน์ แอมพลิจูดจะมีค่าเท่าใดที่สภาวะเรโซแนนซ์ ($\\omega_d = \\sqrt{k/m}$) หากระบบมีค่าคงตัวการหน่วงเป็น $b_1$?",
        "question_en": "ระบบตัวแกว่งกวัดฮาร์มอนิกแบบหน่วงถูกกระทำด้วยแรงขับเคลื่อนที่แปรผันแบบไซน์ amplitudeจะมีค่าเท่าใดที่สภาวะเรโซแนนซ์ ($\\omega_d = \\sqrt{k/m}$) หากระบบมีค่าคงตัวการหน่วงเป็น $b_1$?",
        "formulas": [
          "A(\\omega_0) = \\frac{F_0}{b \\omega_0}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.8:**\nแอมพลิจูดที่เรโซแนนซ์ $\\omega_d = \\omega_0$ เท่ากับ $A_{\\text{res}} = \\frac{F_0}{b \\omega_0}$",
        "solution_en": "**Detailed Solution for Problem 7.8:**\nResonant amplitude $A_{\\text{res}} = \\frac{F_0}{b \\omega_0}$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_9",
        "num_in_lec": 9,
        "global_id": 92,
        "topic_th": "หัวข้อ 7.9",
        "topic_en": "Topic 7.9",
        "question_th": "ระบบตัวแกว่งกวัดฮาร์มอนิกแบบหน่วงมีค่าคงตัวสปริง $k$ และมวล $m$ ถูกขับเคลื่อนด้วยแรงไซน์ หากค่าคงตัวการหน่วงมีค่า $b_1$ แอมพลิจูดของการสั่นจะเป็น $A_1$ เมื่อขับเคลื่อนที่ความถี่ $\\omega_d = \\sqrt{k/m}$ จงหาแอมพลิจูดใหม่ (ในเทอมของ $A_1$) หากค่าคงตัวการหน่วงถูกเปลี่ยนเป็น:(a) $b_1/2$(b) $3b_1$",
        "question_en": "ระบบตัวแกว่งกวัดฮาร์มอนิกแบบหน่วงมีspring constant $k$ and มวล $m$ ถูกขับเคลื่อนด้วยแรงไซน์ หากค่าคงตัวการหน่วงมีค่า $b_1$ amplitudeของการสั่นจะเป็น $A_1$ where ขับเคลื่อนที่frequency $\\omega_d = \\sqrt{k/m}$ Find amplitudeใหม่ (ในเทอมของ $A_1$) หากค่าคงตัวการหน่วงถูกเปลี่ยนเป็น:(a) $b_1/2$(b) $3b_1$",
        "formulas": [
          "\\text{Peak Height } \\propto \\frac{1}{b}, \\quad \\text{Peak Width } \\propto b"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.9:**\nเมื่อ $b_1 < b_2$ ตัวแกว่งกวัดที่มี $b_1$ จะมีกราฟการสั่นพ้องที่ **สูงกว่าและแคบกว่า** (Sharper resonance)",
        "solution_en": "**Detailed Solution for Problem 7.9:**\nLower damping $b_1$ gives a higher and sharper resonance peak.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_10",
        "num_in_lec": 10,
        "global_id": 93,
        "topic_th": "หัวข้อ 7.10",
        "topic_en": "Topic 7.10",
        "question_th": "วัตถุมวล $0.150\\text{ kg}$ แขวนอยู่กับสปริงเบา $k = 6.30\\text{ N/m}$ โดยหน่วงน้อยมาก ($b = 0$) ระบบถูกขับเคลื่อนด้วยแรงรูปไซน์ที่มีแอมพลิจูด $1.70\\text{ N}$ แรงขับเคลื่อนจะต้องมีความถี่เท่าใดจึงจะทำให้วัตถุสั่นด้วยแอมพลิจูด $0.440\\text{ m}$?",
        "question_en": "วัตถุมวล $0.150\\text{ kg}$ แขวนอยู่กับสปริงเบา $k = 6.30\\text{ N/m}$ โดยหน่วงน้อยมาก ($b = 0$) ระบบถูกขับเคลื่อนด้วยแรงรูปไซน์ที่มีamplitude $1.70\\text{ N}$ แรงขับเคลื่อนจะต้องมีfrequencyเท่าใดจึงจะทำให้วัตถุสั่นด้วยamplitude $0.440\\text{ m}$?",
        "formulas": [
          "A = \\frac{F_0/m}{|\\omega_0^2 - \\omega_d^2|}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.10:**\nมวล $m = 0.150\\text{ kg}$, $k = 6.30\\text{ N/m}$, $F_0 = 1.70\\text{ N}$, $A = 0.440\\text{ m}$\nความถี่เชิงมุมธรรมชาติ $\\omega_0 = \\sqrt{\\frac{6.30}{0.150}} = 6.480\\text{ rad/s} \\implies \\omega_0^2 = 42.0\\text{ (rad/s)}^2$\nเมื่อความหน่วงน้อย $A \\approx \\frac{F_0/m}{|\\omega_0^2 - \\omega_d^2|} \\implies |\\omega_0^2 - \\omega_d^2| = \\frac{1.70 / 0.150}{0.440} = 25.76\\text{ (rad/s)}^2$\nแก้สมการหาความถี่แรงขับ $\\omega_d$:\n$$\\omega_d = \\sqrt{\\omega_0^2 \\pm 25.76} = \\sqrt{42.0 \\pm 25.76}$$\nจะได้ $\\omega_d = \\sqrt{67.76} \\approx 8.23\\text{ rad/s}$ หรือ $\\omega_d = \\sqrt{16.24} \\approx 4.03\\text{ rad/s}$",
        "solution_en": "**Detailed Solution for Problem 7.10:**\n$m = 0.150\\text{ kg}$, $k = 6.30\\text{ N/m}$, $F_0 = 1.70\\text{ N}$, $A = 0.440\\text{ m}$.\n$\\omega_0^2 = 42.0\\text{ (rad/s)}^2$. Solving $|\\omega_0^2 - \\omega_d^2| = \\frac{F_0/m}{A} = 25.76$.\nDriving frequency $$\\omega_d = \\sqrt{42.0 \\pm 25.76} \\implies \\omega_d \\approx 8.23\\text{ rad/s} \\text{ or } 4.03\\text{ rad/s}$$",
        "hints": [
          "แอมพลิจูดแรงขับ $A(\\omega_d) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2}}$",
          "หา $\\omega_0 = \\sqrt{k/m} = \\sqrt{6.30/0.150} = 6.480\\text{ rad/s}$ แล้วแก้สมการหา $\\omega_d$"
        ]
      },
      {
        "id": "p7_11",
        "num_in_lec": 11,
        "global_id": 94,
        "topic_th": "หัวข้อ 7.11",
        "topic_en": "Topic 7.11",
        "question_th": "เมื่อมีแรงดันไฟฟ้าสลับแอมพลิจูด $V_0$ ตกคร่อมวงจรอนุกรม LCR ที่สภาวะเรโซแนนซ์ของกระแส ขนาดของความต่างศักย์สูงสุดที่ตกคร่อมตัวเหนี่ยวนำ (Inductor) หรือตัวเก็บประจุ (Capacitor) จะมีค่าเท่าใด?",
        "question_en": "where มีแรงดันไฟฟ้าสลับamplitude $V_0$ ตกคร่อมวงจรอนุกรม LCR ที่สภาวะเรโซแนนซ์ของกระแส ขนาดของความต่างศักย์สูงสุดที่ตกคร่อมตัวเหนี่ยวนำ (Inductor) หรือตัวเก็บประจุ (Capacitor) จะมีค่าเท่าใด?",
        "formulas": [
          "V_L = I_0 (\\omega_0 L) = \\left(\\frac{V_0}{R}\\right) \\omega_0 L = Q V_0"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.11:**\nความต่างศักย์สูงสุดตกคร่อมตัวเหนี่ยวนำที่สภาวะเรโซแนนซ์กระแสในวงจร LCR คือ $V_L = Q V_0$",
        "solution_en": "**Detailed Solution for Problem 7.11:**\nCapacitor/Inductor voltage at resonance $V_L = Q V_0$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_12",
        "num_in_lec": 12,
        "global_id": 95,
        "topic_th": "หัวข้อ 7.12",
        "topic_en": "Topic 7.12",
        "question_th": "ในวงจรอนุกรม LCR ความถี่เชิงมุม $\\omega$ ที่ทำให้เกิดความต่างศักย์สูงสุดตกคร่อมตัวเก็บประจุ (Capacitor) มีค่าเท่าใด?",
        "question_en": "ในวงจรอนุกรม LCR frequencyเชิงมุม $\\omega$ ที่ทำให้เกิดความต่างศักย์สูงสุดตกคร่อมตัวเก็บประจุ (Capacitor) มีค่าเท่าใด?",
        "formulas": [
          "\\omega_C = \\sqrt{\\omega_0^2 - \\frac{R^2}{2L^2}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.12:**\nความถี่ที่ทำให้ความต่างศักย์ตกคร่อมตัวเก็บประจุสูงสุดในวงจร LCR คือ $\\omega_C = \\sqrt{\\omega_0^2 - \\frac{R^2}{2L^2}}$",
        "solution_en": "**Detailed Solution for Problem 7.12:**\nMaximum capacitor voltage frequency $\\omega_C = \\sqrt{\\omega_0^2 - \\frac{R^2}{2L^2}}$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_13",
        "num_in_lec": 13,
        "global_id": 96,
        "topic_th": "หัวข้อ 7.13",
        "topic_en": "Topic 7.13",
        "question_th": "ในวงจรอนุกรม LCR ความถี่เชิงมุม $\\omega$ ที่ทำให้เกิดความต่างศักย์สูงสุดตกคร่อมตัวเหนี่ยวนำ (Inductor) มีค่าเท่าใด?",
        "question_en": "ในวงจรอนุกรม LCR frequencyเชิงมุม $\\omega$ ที่ทำให้เกิดความต่างศักย์สูงสุดตกคร่อมตัวเหนี่ยวนำ (Inductor) มีค่าเท่าใด?",
        "formulas": [
          "\\omega_L = \\frac{\\omega_0}{\\sqrt{1 - \\frac{R^2}{2\\omega_0^2 L^2}}}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.13:**\nความถี่ที่ทำให้ความต่างศักย์ตกคร่อมตัวเหนี่ยวนำสูงสุดในวงจร LCR คือ $\\omega_L = \\frac{\\omega_0}{\\sqrt{1 - \\frac{R^2}{2\\omega_0^2 L^2}}}$",
        "solution_en": "**Detailed Solution for Problem 7.13:**\nMaximum inductor voltage frequency $\\omega_L = \\frac{\\omega_0}{\\sqrt{1 - \\frac{R^2}{2\\omega_0^2 L^2}}}$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_14",
        "num_in_lec": 14,
        "global_id": 97,
        "topic_th": "หัวข้อ 7.14",
        "topic_en": "Topic 7.14",
        "question_th": "วงจรอนุกรม LCR มี $C = 8.0 \\times 10^{-6}\\text{ F}$, $L = 2.0 \\times 10^{-2}\\text{ H}$, และ $R = 75\\ \\Omega$ ถูกขับเคลื่อนด้วยแรงดันไฟฟ้า $V(t) = 15 \\cos(\\omega t)\\text{ V}$ จงหา:(a) ความถี่เรโซแนนซ์ (ในหน่วย Hz)(b) แอมพลิจูดของกระแสไฟฟ้าที่ความถี่นี้",
        "question_en": "วงจรอนุกรม LCR มี $C = 8.0 \\times 10^{-6}\\text{ F}$, $L = 2.0 \\times 10^{-2}\\text{ H}$, and  $R = 75\\ \\Omega$ ถูกขับเคลื่อนด้วยแรงดันไฟฟ้า $V(t) = 15 \\cos(\\omega t)\\text{ V}$ Find:(a) frequencyเรโซแนนซ์ (ในหน่วย Hz)(b) amplitudeของกระแสไฟฟ้าที่frequencyนี้",
        "formulas": [
          "X_L = \\omega L = 50\\ \\Omega, \\quad X_C = \\frac{1}{\\omega C} = 50\\ \\Omega \\implies Z = R",
          "I_0 = \\frac{V_0}{R}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.14:**\nวงจร LCR: $C = 8.0 \\times 10^{-6}\\text{ F}$, $L = 2.0 \\times 10^{-2}\\text{ H}$, $R = 75\\ \\Omega$, $V_0 = 15\\text{ V}$\n(a) ความถี่เรโซแนนซ์เชิงมุม:\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{2.0 \\times 10^{-2} \\times 8.0 \\times 10^{-6}}} = \\frac{1}{\\sqrt{1.6 \\times 10^{-7}}} = 2500\\text{ rad/s}$$\nความถี่ในหน่วย Hz: $$f_0 = \\frac{\\omega_0}{2\\pi} = \\frac{2500}{2\\pi} \\approx 398\\text{ Hz}$$\n(b) แอมพลิจูดกระแสที่เรโซแนนซ์ ($Z = R$):\n$$I_0 = \\frac{V_0}{R} = \\frac{15}{75} = 0.200\\text{ A}$$",
        "solution_en": "**Detailed Solution for Problem 7.14:**\n$C = 8.0\\ \\mu\\text{F}$, $L = 20\\text{ mH}$, $R = 75\\ \\Omega$, $V_0 = 15\\text{ V}$.\n(a) Resonance frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}} = 2500\\text{ rad/s} \\implies f_0 = \\frac{2500}{2\\pi} \\approx 398\\text{ Hz}$.\n(b) Current amplitude at resonance $$I_0 = \\frac{V_0}{R} = \\frac{15}{75} = 0.200\\text{ A}$$",
        "hints": [
          "ความถี่เรโซแนนซ์เชิงมุม $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, ความถี่เป็น Hz คือ $f_0 = \\frac{\\omega_0}{2\\pi}$",
          "ที่ความถี่เรโซแนนซ์ อิมพีแดนซ์ $Z = R \\implies I_0 = \\frac{V_0}{R}$"
        ]
      },
      {
        "id": "p7_15",
        "num_in_lec": 15,
        "global_id": 98,
        "topic_th": "หัวข้อ 7.15",
        "topic_en": "Topic 7.15",
        "question_th": "สำหรับตัวแกว่งกวัดที่มีแรงขับเคลื่อนและมีความหน่วงน้อย อัตราส่วนระหว่าง \"พลังงานที่สูญเสียไปต่อรอบ\" ต่อ \"พลังงานที่สะสมไว้\" ณ ตำแหน่งความถี่เรโซแนนซ์ จะมีค่าเท่าใดในเทอมของตัวประกอบคุณภาพ $Q$?",
        "question_en": "สำหรับตัวแกว่งกวัดที่มีแรงขับเคลื่อนand มีความหน่วงน้อย อัตราส่วนระหว่าง \"พลังงานที่สูญเสียไปต่อรอบ\" ต่อ \"พลังงานที่สะสมไว้\" ณ ตำแหน่งfrequencyเรโซแนนซ์ จะมีค่าเท่าใดในเทอมของตัวประกอบคุณภาพ $Q$?",
        "formulas": [
          "\\frac{\\Delta E_{\\text{cycle}}}{E} = \\frac{2\\pi}{Q}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.15:**\nอัตราส่วนระหว่างพลังงานที่สูญเสียไปต่อรอบต่อพลังงานรวมคือ $\\frac{\\Delta E_{\\text{cycle}}}{E} = \\frac{2\\pi}{Q}$",
        "solution_en": "**Detailed Solution for Problem 7.15:**\nFractional energy loss per cycle $\\frac{\\Delta E}{E} = \\frac{2\\pi}{Q}$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_16",
        "num_in_lec": 16,
        "global_id": 99,
        "topic_th": "หัวข้อ 7.16",
        "topic_en": "Topic 7.16",
        "question_th": "มวล $0.03\\text{ kg}$ วางอยู่บนโต๊ะแนวนอนและผูกติดกับสปริง $12\\text{ N/m}$ ปลายอีกด้านยึดติดกับผนัง มวลถูกกระทำด้วยแรงขับเคลื่อน $F = 0.15 \\cos(20t)$ และมีแรงหน่วง $b = 0.06\\text{ kg/s}$ จงหาแอมพลิจูด และมุมเฟสระหว่างการกระจัดกับแรงขับ ที่สภาวะคงตัว",
        "question_en": "มวล $0.03\\text{ kg}$ วางอยู่บนโต๊ะแนวนอนand ผูกติดกับสปริง $12\\text{ N/m}$ ปลายอีกด้านยึดติดกับผนัง มวลถูกกระทำด้วยแรงขับเคลื่อน $F = 0.15 \\cos(20t)$ and มีแรงหน่วง $b = 0.06\\text{ kg/s}$ Find amplitude and มุมเฟสระหว่างการกระจัดกับแรงขับ ที่สภาวะคงตัว",
        "formulas": [
          "\\omega_0 = \\sqrt{\\frac{k}{m}} = 20.0\\text{ rad/s} = \\omega_d \\implies A = \\frac{F_0}{b \\omega_0}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.16:**\nมวล $m = 0.030\\text{ kg}$, $k = 12.0\\text{ N/m}$, แรงขับ $F(t) = 0.15 \\cos(20t)$, $b = 0.060\\text{ kg/s}$\nความถี่ธรรมชาติ $\\omega_0 = \\sqrt{\\frac{12.0}{0.030}} = 20.0\\text{ rad/s}$\nเนื่องจากความถี่แรงขับ $\\omega_d = 20.0\\text{ rad/s} = \\omega_0$ ระบบเกิดการสั่นพ้องพอดี\n(a) แอมพลิจูดสภาวะคงตัว $$A = \\frac{F_0}{b \\omega_d} = \\frac{0.15}{0.060 \\times 20.0} = \\frac{0.15}{1.20} = 0.125\\text{ m} = 12.5\\text{ cm}$$\n(b) มุมเฟสระหว่างแรงขับและการกระจัดที่เรโซแนนซ์ $$\\delta = \\frac{\\pi}{2}\\text{ rad} = 90^\\circ$$",
        "solution_en": "**Detailed Solution for Problem 7.16:**\n$m = 0.030\\text{ kg}$, $k = 12.0\\text{ N/m}$, $F_0 = 0.15\\text{ N}$, $\\omega_d = 20.0\\text{ rad/s}$, $b = 0.060\\text{ kg/s}$.\nNatural frequency $\\omega_0 = 20.0\\text{ rad/s} = \\omega_d \\implies$ Resonance!\nAmplitude $$A = \\frac{F_0}{b \\omega_d} = \\frac{0.15}{0.060 \\times 20.0} = 0.125\\text{ m} = 12.5\\text{ cm}$$\nPhase angle $\\delta = 90^\\circ = \\pi/2\\text{ rad}$.",
        "hints": [
          "ความถี่ธรรมชาติ $\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{12.0}{0.030}} = 20.0\\text{ rad/s}$",
          "เนื่องจาก $\\omega_d = 20.0\\text{ rad/s} = \\omega_0$ เกิดการสั่นพ้อง (Resonance): $A = \\frac{F_0}{b \\omega_d}$ และมุมเฟส $\\delta = 90^\\circ$"
        ]
      },
      {
        "id": "p7_17",
        "num_in_lec": 17,
        "global_id": 100,
        "topic_th": "หัวข้อ 7.17",
        "topic_en": "Topic 7.17",
        "question_th": "สมการ $m\\ddot{x} + sx = F_0 \\sin(\\omega t)$ อธิบายการเคลื่อนที่ของตัวแกว่งกวัดที่ไม่หน่วงและมีแรงขับ จงหาคำตอบของสมการสำหรับการกระจัดที่สภาวะคงตัว (Steady state solution)",
        "question_en": "สมการ $m\\ddot{x} + sx = F_0 \\sin(\\omega t)$ อธิบายการเคลื่อนที่ของตัวแกว่งกวัดที่ไม่หน่วงand มีแรงขับ Find คำตอบของสมการสำหรับการกระจัดที่สภาวะคงตัว (Steady state solution)",
        "formulas": [
          "x_p(t) = \\frac{F_0}{s - m\\omega^2} \\sin(\\omega t)"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.17:**\nคำตอบเฉพาะของสมการ $m\\ddot{x} + s x = F_0 \\sin(\\omega t)$ คือ $x_p(t) = \\frac{F_0}{s - m\\omega^2} \\sin(\\omega t)$",
        "solution_en": "**Detailed Solution for Problem 7.17:**\nParticular solution $x_p(t) = \\frac{F_0}{s - m\\omega^2} \\sin(\\omega t)$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_18",
        "num_in_lec": 18,
        "global_id": 101,
        "topic_th": "หัวข้อ 7.18",
        "topic_en": "Topic 7.18",
        "question_th": "สำหรับกราฟการดูดกลืนกำลังของตัวแกว่งกวัดเชิงกล เมื่อค่าความหน่วง $r$ มีค่าน้อย กำลังที่ถูกดูดกลืนจะมีค่าลดลงเหลือครึ่งหนึ่งของค่าสูงสุด (Half-power points) ที่ความถี่ $\\omega$ ใด?",
        "question_en": "สำหรับกราฟการดูดกลืนกำลังของตัวแกว่งกวัดเชิงกล where ค่าความหน่วง $r$ มีค่าน้อย กำลังที่ถูกดูดกลืนจะมีค่าลดลงเหลือครึ่งหนึ่งของค่าสูงสุด (Half-power points) ที่frequency $\\omega$ ใด?",
        "formulas": [
          "\\Delta \\omega = \\frac{r}{m}, \\quad Q = \\frac{\\omega_0 m}{r}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.18:**\nความกว้างของครึ่งกำลัง (Half-power bandwidth) คือ $\\Delta \\omega = \\frac{r}{m}$ และ Quality factor $Q = \\frac{\\omega_0 m}{r}$",
        "solution_en": "**Detailed Solution for Problem 7.18:**\nHalf-power width $\\Delta \\omega = \\frac{r}{m}$ and quality factor $Q = \\frac{\\omega_0 m}{r}$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_19",
        "num_in_lec": 19,
        "global_id": 102,
        "topic_th": "หัวข้อ 7.19",
        "topic_en": "Topic 7.19",
        "question_th": "ความต้านทานเชิงกล (Mechanical impedance, $Z_m$) นิยามเป็นอัตราส่วนระหว่างแรงต่อความเร็ว ($F/v$) จงหาค่าแอมพลิจูดของ $Z_m$",
        "question_en": "ความต้านทานเชิงกล (Mechanical impedance, $Z_m$) นิยามเป็นอัตราส่วนระหว่างแรงต่อความเร็ว ($F/v$) Find ค่าamplitudeของ $Z_m$",
        "formulas": [
          "Z_m = \\sqrt{r^2 + \\left(m\\omega_d - \\frac{s}{\\omega_d}\\right)^2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.19:**\nความต้านทานเชิงกล $Z_m = \\sqrt{r^2 + \\left(m\\omega_d - \\frac{s}{\\omega_d}\\right)^2}$ ที่เรโซแนนซ์ $Z_m = r$",
        "solution_en": "**Detailed Solution for Problem 7.19:**\nMechanical impedance $Z_m = \\sqrt{r^2 + (m\\omega_d - s/\\omega_d)^2}$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      },
      {
        "id": "p7_20",
        "num_in_lec": 20,
        "global_id": 103,
        "topic_th": "หัวข้อ 7.20",
        "topic_en": "Topic 7.20",
        "question_th": "สำหรับตัวแกว่งกวัดฮาร์มอนิกแบบหน่วงและมีแรงขับเคลื่อนซึ่งมีการกระจัด $z = A e^{i(\\omega t - \\delta)}$ มุมเฟส $\\delta$ ระหว่างแรงขับเคลื่อนและการกระจัดของมวลจะมีความสัมพันธ์ในรูป $\\tan\\delta$ อย่างไร? (กำหนดให้ $\\gamma = b/m$ และ $\\omega_0^2 = k/m$)",
        "question_en": "สำหรับตัวแกว่งกวัดฮาร์มอนิกแบบหน่วงand มีแรงขับเคลื่อนซึ่งมีการกระจัด $z = A e^{i(\\omega t - \\delta)}$ มุมเฟส $\\delta$ ระหว่างแรงขับเคลื่อนand การกระจัดของมวลจะมีความสัมพันธ์ในรูป $\\tan\\delta$ อย่างไร? (กำหนดให้ $\\gamma = b/m$ and  $\\omega_0^2 = k/m$)",
        "formulas": [
          "\\tan\\delta = \\frac{r\\omega_d/m}{\\omega_0^2 - \\omega_d^2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 7.20:**\nมุมเฟส $\\delta$ ระหว่างแรงขับและการกระจัดกำหนดโดย $\\tan\\delta = \\frac{r\\omega_d/m}{\\omega_0^2 - \\omega_d^2}$\nที่เรโซแนนซ์ $\\omega_d = \\omega_0 \\implies \\delta = \\frac{\\pi}{2} = 90^\\circ$",
        "solution_en": "**Detailed Solution for Problem 7.20:**\nPhase angle $\\tan\\delta = \\frac{r\\omega_d/m}{\\omega_0^2 - \\omega_d^2}$. At resonance, $\\delta = 90^\\circ$.",
        "hints": [
          "สมการตัวแกว่งกวัดที่มีแรงขับ $m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega_d t)$",
          "แอมพลิจูด $A = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2\\omega_d^2}}$ และ $\\tan\\delta = \\frac{b\\omega_d}{m(\\omega_0^2 - \\omega_d^2)}$"
        ]
      }
    ]
  },
  {
    "lecture": 8,
    "title_th": "Lecture 8: ระบบคู่ควบและนอร์มัลโหมด (Coupled Systems & Normal Modes)",
    "title_en": "Lecture 8: Coupled Oscillations & Normal Modes",
    "problems": [
      {
        "id": "p8_1",
        "num_in_lec": 1,
        "global_id": 104,
        "topic_th": "หัวข้อ 8.1",
        "topic_en": "Topic 8.1",
        "question_th": "มวล $m$ สองก้อนที่เท่ากันถูกแขวนเรียงต่อกันในแนวดิ่งด้วยสปริงที่มีความแข็ง $s$ เท่ากันสองตัว จงหาความถี่เชิงมุมกำลังสอง ($\\omega^2$) ของนอร์มัลโหมดการสั่นทั้งสองโหมด และหาอัตราส่วนของแอมพลิจูดของมวลก้อนบนต่อมวลก้อนล่างในโหมดที่ช้ากว่าและโหมดที่เร็วกว่าตามลำดับ",
        "question_en": "มวล $m$ สองก้อนที่เท่ากันถูกแขวนเรียงต่อกันในแนวดิ่งด้วยสปริงที่มีความแข็ง $s$ เท่ากันสองตัว Find frequencyเชิงมุมกำลังสอง ($\\omega^2$) ของนอร์มัลโหมดการสั่นทั้งสองโหมด and หาอัตราส่วนของamplitudeของมวลก้อนบนต่อมวลก้อนล่างในโหมดที่ช้ากว่าand โหมดที่เร็วกว่าตามลำดับ",
        "formulas": [
          "\\begin{pmatrix} k_1+k_2 - m_1\\omega^2 & -k_2 \\\\ -k_2 & k_2+k_3 - m_2\\omega^2 \\end{pmatrix} \\begin{pmatrix} A_1 \\\\ A_2 \\end{pmatrix} = 0"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 8.1:**\nพิจารณามวล $m$ สองก้อนแขวนเรียงต่อกันในแนวดิ่งด้วยสปริงความแข็ง $s$ สองตัว ให้ $x_1, x_2$ เป็นการกระจัดจากตำแหน่งสมดุล:\nสมการการเคลื่อนที่:\n$$m \\ddot{x}_1 = -s x_1 + s(x_2 - x_1) = -2s x_1 + s x_2$$\n$$m \\ddot{x}_2 = -s(x_2 - x_1) = s x_1 - s x_2$$\n\nตั้งสมการเมทริกซ์นอร์มัลโหมด $(\\mathbf{K} - \\omega^2 \\mathbf{M}) \\mathbf{X} = \\mathbf{0}$:\n$$\\begin{pmatrix} 2s - m\\omega^2 & -s \\\\ -s & s - m\\omega^2 \\end{pmatrix} \\begin{pmatrix} A_1 \\\\ A_2 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$$\nหาตัวกำหนดเป็นศูนย์: $(2s - m\\omega^2)(s - m\\omega^2) - s^2 = 0 \\implies (m\\omega^2)^2 - 3s(m\\omega^2) + s^2 = 0$\nแก้สมการกำลังสองได้ความถี่นอร์มัลโหมด:\n- **โหมดที่ช้ากว่า (Slow Mode, $\\omega_1^2$):** $$\\omega_1^2 = \\left(\\frac{3 - \\sqrt{5}}{2}\\right) \\frac{s}{m} \\approx 0.382 \\frac{s}{m}$$\n  อัตราส่วนแอมพลิจูด $\\frac{A_1}{A_2} = \\frac{s}{2s - m\\omega_1^2} = \\frac{\\sqrt{5}-1}{2} \\approx +0.618$ (มวลเคลื่อนที่ไปทางเดียวกัน)\n- **โหมดที่เร็วกว่า (Fast Mode, $\\omega_2^2$):** $$\\omega_2^2 = \\left(\\frac{3 + \\sqrt{5}}{2}\\right) \\frac{s}{m} \\approx 2.618 \\frac{s}{m}$$\n  อัตราส่วนแอมพลิจูด $\\frac{A_1}{A_2} = -\\frac{\\sqrt{5}+1}{2} \\approx -1.618$ (มวลเคลื่อนที่สวนทางกัน)",
        "solution_en": "**Detailed Solution for Problem 8.1:**\nEquations of motion for two vertical coupled identical masses $m$ and springs $s$:\n$m \\ddot{x}_1 = -2s x_1 + s x_2$ and $m \\ddot{x}_2 = s x_1 - s x_2$.\nSecular determinant: $\\det(\\mathbf{K} - \\omega^2 \\mathbf{M}) = 0 \\implies (m\\omega^2)^2 - 3s(m\\omega^2) + s^2 = 0$.\n- **Slow Mode (In-Phase):** $\\omega_1^2 = \\left(\\frac{3 - \\sqrt{5}}{2}\\right) \\frac{s}{m} \\approx 0.382 \\frac{s}{m}$, Amplitude ratio $\\frac{A_1}{A_2} = \\frac{\\sqrt{5}-1}{2} \\approx +0.618$.\n- **Fast Mode (Out-of-Phase):** $\\omega_2^2 = \\left(\\frac{3 + \\sqrt{5}}{2}\\right) \\frac{s}{m} \\approx 2.618 \\frac{s}{m}$, Amplitude ratio $\\frac{A_1}{A_2} = -\\frac{\\sqrt{5}+1}{2} \\approx -1.618$.",
        "hints": [
          "เขียนสมการการเคลื่อนที่ของมวลทั้งสองตัว $m_1 \\ddot{x}_1 = -(k_1+k_2)x_1 + k_2 x_2$ และ $m_2 \\ddot{x}_2 = k_2 x_1 - (k_2+k_3)x_2$",
          "ตั้งดีเทอร์มิแนนต์ของเมทริกซ์สเกลาร์ (Secular determinant) ให้เท่ากับศูนย์เพื่อหาความถี่โหมดปกติ $\\omega^2$"
        ]
      },
      {
        "id": "p8_2",
        "num_in_lec": 2,
        "global_id": 105,
        "topic_th": "หัวข้อ 8.2",
        "topic_en": "Topic 8.2",
        "question_th": "สำหรับลูกตุ้มคู่ควบที่มวลทั้งสองก้อนมีค่าไม่เท่ากัน ($m_1$ และ $m_2$) ลูกตุ้มทั้งสองเชื่อมต่อกันด้วยสปริงที่มีค่าคงที่สปริงเท่ากับ $k$ โดยมีสมการการเคลื่อนที่คือ$$m_1\\ddot{x} = -m_1(g/l)x - k(x - y)$$$$m_2\\ddot{y} = -m_2(g/l)y + k(x - y)$$จงหาความถี่ของนอร์มัลโหมด $\\omega_1^2$ และ $\\omega_2^2$ ของระบบนี้",
        "question_en": "สำหรับลูกตุ้มคู่ควบที่มวลทั้งสองก้อนมีค่าไม่เท่ากัน ($m_1$ and  $m_2$) ลูกตุ้มทั้งสองเชื่อมต่อกันด้วยสปริงที่มีค่าคงที่สปริงเท่ากับ $k$ โดยมีสมการการเคลื่อนที่คือ$$m_1\\ddot{x} = -m_1(g/l)x - k(x - y)$$$$m_2\\ddot{y} = -m_2(g/l)y + k(x - y)$$Find frequencyของนอร์มัลโหมด $\\omega_1^2$ and  $\\omega_2^2$ ของระบบนี้",
        "formulas": [
          "\\omega_1 = \\sqrt{\\frac{k}{m}} \\quad (\\text{In-phase mode})",
          "\\omega_2 = \\sqrt{\\frac{k + 2k_c}{m}} \\quad (\\text{Out-of-phase mode})"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 8.2:**\nลูกตุ้มคู่ควบที่มีมวลต่างกัน $m_1, m_2$ ยาว $l$ เชื่อมด้วยสปริง $k$:\nจากสมการการเคลื่อนที่:\n$$\\ddot{x} = -\\frac{g}{l} x - \\frac{k}{m_1}(x - y)$$\n$$\\ddot{y} = -\\frac{g}{l} y + \\frac{k}{m_2}(x - y)$$\n\nพิจารณานอร์มัลพิกัด:\n1. **โหมดจุดศูนย์กลางมวล (In-phase mode):** $X = m_1 x + m_2 y \\implies \\ddot{X} = -\\frac{g}{l} X$\n   ความถี่นอร์มัลโหมดแรก: $$\\omega_1^2 = \\frac{g}{l}$$\n2. **โหมดการกระจัดสัมพัทธ์ (Out-of-phase mode):** $q = x - y \\implies \\ddot{q} = -\\left(\\frac{g}{l} + k\\left(\\frac{1}{m_1} + \\frac{1}{m_2}\\right)\\right) q$\n   ความถี่นอร์มัลโหมดสอง: $$\\omega_2^2 = \\frac{g}{l} + k\\left(\\frac{m_1 + m_2}{m_1 m_2}\\right) = \\frac{g}{l} + \\frac{k}{\\mu}$$ (เมื่อ $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$ คือมวลลดทอน)",
        "solution_en": "**Detailed Solution for Problem 8.2:**\nCoupled pendulums of unequal masses $m_1, m_2$:\nNormal mode 1 (Center of Mass / In-phase): $\\omega_1^2 = \\frac{g}{l}$.\nNormal mode 2 (Relative Motion / Out-of-phase): $\\omega_2^2 = \\frac{g}{l} + k\\left(\\frac{m_1 + m_2}{m_1 m_2}\\right) = \\frac{g}{l} + \\frac{k}{\\mu}$.",
        "hints": [
          "โหมดเฟสตรงกัน (In-phase mode): สปริงตรงกลางไม่ยืดหรือหด มวลทั้งสองขยับไปทิศทางเดียวกัน $x_1 = x_2 \\implies \\omega_1 = \\sqrt{k/m}$",
          "โหมดเฟสตรงข้าม (Out-of-phase mode): มวลทั้งสองขยับสวนทางกัน $x_1 = -x_2 \\implies \\omega_2 = \\sqrt{(k+2k_c)/m}$"
        ]
      },
      {
        "id": "p8_3",
        "num_in_lec": 3,
        "global_id": 106,
        "topic_th": "หัวข้อ 8.3",
        "topic_en": "Topic 8.3",
        "question_th": "จากระบบลูกตุ้มคู่ควบมวล $m_1$ และ $m_2$ ในข้อก่อนหน้า หากกำหนดเงื่อนไขเริ่มต้นที่เวลา $t = 0$ มวลมีตำแหน่งเป็น $x = A, y = 0$ และมีความเร็วเริ่มต้นเป็นศูนย์ ($\\dot{x} = \\dot{y} = 0$) จงหาสมการการกระจัด $x(t)$ และ $y(t)$ ของมวลทั้งสองก้อนในเทอมของผลรวมนอร์มัลโหมด (กำหนดให้ $M = m_1 + m_2$)",
        "question_en": "จากระบบลูกตุ้มคู่ควบมวล $m_1$ and  $m_2$ ในข้อก่อนหน้า หากกำหนดเงื่อนไขเริ่มต้นat time  $t = 0$ มวลมีตำแหน่งเป็น $x = A, y = 0$ and มีความเร็วเริ่มต้นเป็นศูนย์ ($\\dot{x} = \\dot{y} = 0$) Find สมการการกระจัด $x(t)$ and  $y(t)$ ของมวลทั้งสองก้อนในเทอมของผลรวมนอร์มัลโหมด (กำหนดให้ $M = m_1 + m_2$)",
        "formulas": [
          "\\frac{A_1}{A_2} = \\frac{k_c}{k + k_c - m\\omega^2}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 8.3:**\nเงื่อนไขเริ่มต้นที่ $t = 0$: $x(0) = A, y(0) = 0, \\dot{x}(0) = \\dot{y}(0) = 0$ (ให้ $M = m_1 + m_2$):\nเขียนกระจายพิกัด $x(t)$ และ $y(t)$ ในรูปผลรวมของนอร์มัลโหมด $\\cos(\\omega_1 t)$ และ $\\cos(\\omega_2 t)$:\n- $x(t) = \\frac{m_1 A}{M} \\cos(\\omega_1 t) + \\frac{m_2 A}{M} \\cos(\\omega_2 t)$\n- $y(t) = \\frac{m_1 A}{M} \\cos(\\omega_1 t) - \\frac{m_1 A}{M} \\cos(\\omega_2 t) = \\frac{m_1 A}{M} \\left(\\cos(\\omega_1 t) - \\cos(\\omega_2 t)\\right)$",
        "solution_en": "**Detailed Solution for Problem 8.3:**\nFor initial displacement $x(0) = A, y(0) = 0$ and zero initial velocity:\n$x(t) = \\frac{m_1 A}{M} \\cos(\\omega_1 t) + \\frac{m_2 A}{M} \\cos(\\omega_2 t)$\n$y(t) = \\frac{m_1 A}{M} \\left(\\cos(\\omega_1 t) - \\cos(\\omega_2 t)\\right)$.",
        "hints": [
          "แทนค่าความถี่โหมดปกติ $\\omega_1^2$ หรือ $\\omega_2^2$ ลงในสมการการเคลื่อนที่เพื่อหาอัตราส่วนแอมพลิจูด $A_1/A_2$",
          "โหมดแรกได้ $A_1/A_2 = +1$ และโหมดที่สองได้ $A_1/A_2 = -1$"
        ]
      },
      {
        "id": "p8_4",
        "num_in_lec": 4,
        "global_id": 107,
        "topic_th": "หัวข้อ 8.4",
        "topic_en": "Topic 8.4",
        "question_th": "สำหรับระบบมวล $m$ บนเส้นเชือกที่มีความตึง $T$ ซึ่งประกอบด้วยมวล 3 ก้อน และแต่ละช่วงเชือกมีความยาว $a$ จงหาความถี่เชิงมุมกำลังสอง ($\\omega^2$) ของนอร์มัลโหมดการสั่นทั้งสามโหมด (กำหนดให้ $\\omega_0^2 = T/ma$)",
        "question_en": "สำหรับระบบมวล $m$ บนเส้นเชือกที่มีความตึง $T$ ซึ่งประกอบด้วยมวล 3 ก้อน and แต่ละช่วงเชือกมีความยาว $a$ Find frequencyเชิงมุมกำลังสอง ($\\omega^2$) ของนอร์มัลโหมดการสั่นทั้งสามโหมด (กำหนดให้ $\\omega_0^2 = T/ma$)",
        "formulas": [
          "x_1(t) = A \\cos(\\omega_1 t) + B \\cos(\\omega_2 t)",
          "x_2(t) = A \\cos(\\omega_1 t) - B \\cos(\\omega_2 t)"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 8.4:**\nมวล $m$ จำนวน 3 ก้อนบนเส้นเชือกตึง $T$ ช่องห่าง $a$ (มี 4 ช่วงเชือก):\nเมทริกซ์สติฟเนสของระบบ 3 มวล: $\\mathbf{K} = \\frac{T}{a} \\begin{pmatrix} 2 & -1 & 0 \\\\ -1 & 2 & -1 \\\\ 0 & -1 & 2 \\end{pmatrix}$\nไอเกนแวเลียของการสั่น: $\\lambda_k = 2 - 2 \\cos\\left(\\frac{k\\pi}{4}\\right)$ สำหรับ $k = 1, 2, 3$\n1. **โหมด 1 (ต่ำสุด):** $$\\omega_1^2 = \\left(2 - 2\\cos\\left(\\frac{\\pi}{4}\\right)\\right) \\omega_0^2 = (2 - \\sqrt{2}) \\omega_0^2 \\approx 0.586 \\omega_0^2$$\n2. **โหมด 2 (กลาง):** $$\\omega_2^2 = \\left(2 - 2\\cos\\left(\\frac{\\pi}{2}\\right)\\right) \\omega_0^2 = 2 \\omega_0^2$$\n3. **โหมด 3 (สูงสุด):** $$\\omega_3^2 = \\left(2 - 2\\cos\\left(\\frac{3\\pi}{4}\\right)\\right) \\omega_0^2 = (2 + \\sqrt{2}) \\omega_0^2 \\approx 3.414 \\omega_0^2$$",
        "solution_en": "**Detailed Solution for Problem 8.4:**\nThree masses $m$ on a taut string of tension $T$ with 4 segments of length $a$ ($\\omega_0^2 = T/(ma)$):\n- Mode 1: $\\omega_1^2 = (2 - \\sqrt{2}) \\omega_0^2 \\approx 0.586 \\omega_0^2$\n- Mode 2: $\\omega_2^2 = 2 \\omega_0^2$\n- Mode 3: $\\omega_3^2 = (2 + \\sqrt{2}) \\omega_0^2 \\approx 3.414 \\omega_0^2$.",
        "hints": [
          "คำตอบทั่วไปของการกระจัดมวลแต่ละตัวคือการผสมกันของโหมดปกติสองโหมด",
          "ใช้เงื่อนไขเริ่มต้น เช่น ดึงมวลก้อนหนึ่งแล้วปล่อยจากหยุดนิ่งเพื่อหาค่าคงตัว $A$ และ $B$"
        ]
      },
      {
        "id": "p8_5",
        "num_in_lec": 5,
        "global_id": 108,
        "topic_th": "หัวข้อ 8.5",
        "topic_en": "Topic 8.5",
        "question_th": "จากปัญหาระบบมวล 3 ก้อนบนเส้นเชือกในข้อก่อนหน้า จงหาอัตราส่วนการกระจัดสัมพัทธ์ของมวลแต่ละก้อนในนอร์มัลโหมดทั้งสามรูปแบบเรียงตามลำดับความถี่จากต่ำไปสูง",
        "question_en": "จากปัญหาระบบมวล 3 ก้อนบนเส้นเชือกในข้อก่อนหน้า Find อัตราส่วนการกระจัดสัมพัทธ์ของมวลแต่ละก้อนในนอร์มัลโหมดทั้งสามรูปแบบเรียงตามลำดับfrequencyจากต่ำไปสูง",
        "formulas": [
          "\\omega_{\\text{mod}} = \\frac{\\omega_2 - \\omega_1}{2}",
          "T_{\\text{transfer}} = \\frac{\\pi}{\\omega_2 - \\omega_1}"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 8.5:**\nอัตราส่วนการกระจัดสัมพัทธ์ของมวลทั้งสามก้อน $(x_1 : x_2 : x_3)$ ในนอร์มัลโหมดตามลำดับความถี่:\n1. **โหมดความถี่ต่ำสุด (Mode 1, $\\omega_1^2 = (2-\\sqrt{2})\\omega_0^2$):** รูปแบบสมมาตร ทุกมวลเบี่ยงเบนทิศเดียวกัน $$(x_1 : x_2 : x_3) = (1 : \\sqrt{2} : 1)$$\n2. **โหมดความถี่กลาง (Mode 2, $\\omega_2^2 = 2\\omega_0^2$):** รูปแบบปฏิสมมาตร มวลตรงกลางอยู่นิ่ง $$(x_1 : x_2 : x_3) = (1 : 0 : -1)$$\n3. **โหมดความถี่สูงสุด (Mode 3, $\\omega_3^2 = (2+\\sqrt{2})\\omega_0^2$):** มวลตรงกลางสั่นสวนทางกับมวลปลายสองก้อน $$(x_1 : x_2 : x_3) = (1 : -\\sqrt{2} : 1)$$",
        "solution_en": "**Detailed Solution for Problem 8.5:**\nRelative displacement ratios $(x_1 : x_2 : x_3)$ for the 3 normal modes:\n- Mode 1 (Lowest $\\omega_1$): $(1 : \\sqrt{2} : 1)$\n- Mode 2 (Middle $\\omega_2$): $(1 : 0 : -1)$\n- Mode 3 (Highest $\\omega_3$): $(1 : -\\sqrt{2} : 1)$.",
        "hints": [
          "เมื่อตัวแกว่งกวัดสองตัวมีมวลและสปริงเหมือนกัน พลังงานจะถูกส่งผ่านสลับไปมาระหว่างสองตัว",
          "เวลาในการถ่ายโอนพลังงานจากตัวหนึ่งไปอีกตัวหนึ่งจนหมดคือ $T_{\\text{transfer}} = \\frac{\\pi}{\\omega_2 - \\omega_1}$"
        ]
      },
      {
        "id": "p8_6",
        "num_in_lec": 6,
        "global_id": 109,
        "topic_th": "หัวข้อ 8.6",
        "topic_en": "Topic 8.6",
        "question_th": "ระบบมวล 3 ก้อนจัดเรียงเป็นเส้นตรง โดยมีมวล $m$ สองก้อนอยู่ที่ปลายและมวล $M$ อยู่ตรงกลาง มวลเชื่อมต่อกันด้วยสปริงที่มีความแข็ง $s$ สองตัว (ไม่มีการยึดติดกับผนัง) จงหาความถี่เชิงมุมกำลังสอง ($\\omega^2$) ของนอร์มัลโหมดการสั่นในแนวแกนทั้งสามโหมดของระบบนี้",
        "question_en": "ระบบมวล 3 ก้อนจัดเรียงเป็นเส้นตรง โดยมีมวล $m$ สองก้อนอยู่ที่ปลายand มวล $M$ อยู่ตรงกลาง มวลเชื่อมต่อกันด้วยสปริงที่มีความแข็ง $s$ สองตัว (ไม่มีการยึดติดกับผนัง) Find frequencyเชิงมุมกำลังสอง ($\\omega^2$) ของนอร์มัลโหมดการสั่นในแนวแกนทั้งสามโหมดของระบบนี้",
        "formulas": [
          "\\omega_1^2 = 0 \\quad (\\text{Translation})",
          "\\omega_2^2 = \\frac{s}{m} \\quad (\\text{Antisymmetric})",
          "\\omega_3^2 = \\frac{s(M+2m)}{mM} \\quad (\\text{Symmetric})"
        ],
        "solution_th": "**เฉลยละเอียด:**\nระบบ $m - M - m$ เชื่อมด้วยสปริง $s$ ไม่มีผนัง (Free-free):\n1. โหมดเลื่อนที่ (Translation): ทุกตัวขยับเท่ากัน $\\omega_1^2 = 0$\n2. โหมดต้านสมมาตร (Antisymmetric): มวลกลางอยู่นิ่ง มวลขอบขยับสวนทางกัน $m\\ddot{x}_1 = -sx_1 \\implies \\omega_2^2 = \\frac{s}{m}$\n3. โหมดสมมาตร (Symmetric): มวลขอบขยับทิศเดียวกัน มวลกลางขยับสวนทิศรักษาสมดุล CM $\\omega_3^2 = \\frac{s}{m}(1 + \\frac{2m}{M}) = \\frac{s(M+2m)}{mM}$",
        "solution_en": "**Detailed Solution:**\nFor a triatomic linear molecule $m - M - m$ connected by two springs $s$:\n1. Translation mode (Rigid body shift): All move equally. $\\omega_1^2 = 0$.\n2. Antisymmetric mode: Center mass $M$ is stationary ($x_2 = 0$), outer masses move oppositely ($x_1 = -x_3$). $m\\ddot{x}_1 = -s x_1 \\implies \\omega_2^2 = \\frac{s}{m}$.\n3. Symmetric mode: Outer masses move identically ($x_1 = x_3$). CM is stationary $\\implies 2mx_1 + Mx_2 = 0 \\implies x_2 = -\\frac{2m}{M}x_1$.\n$m\\ddot{x}_1 = -s(x_1 - x_2) = -s(1 + \\frac{2m}{M})x_1 \\implies \\omega_3^2 = \\frac{s(M+2m)}{mM}$.",
        "hints": [
          "สมการแรง $m\\ddot{x}_1 = -s(x_1-x_2)$ และ $M\\ddot{x}_2 = -s(x_2-x_1) - s(x_2-x_3)$",
          "โหมดเลื่อนที่ $\\omega^2 = 0$, โหมดต้านสมมาตร $x_2=0$, โหมดสมมาตร $x_1=x_3$"
        ]
      },
      {
        "id": "p8_7",
        "num_in_lec": 7,
        "global_id": 110,
        "topic_th": "หัวข้อ 8.7",
        "topic_en": "Topic 8.7",
        "question_th": "มวลขนาด $3m$ และ $m$ ถูกแขวนเรียงต่อกันในแนวดิ่งด้วยสปริงที่มีค่าคงตัวสปริง $4k$ และ $k$ ตามลำดับ (เพดานยึดสปริง $4k$ ซึ่งห้อยมวล $3m$ และมวล $3m$ ห้อยสปริง $k$ ซึ่งห้อยมวล $m$) จงหาความถี่นอร์มัลโหมด ($\\omega$) ของการสั่นของระบบนี้",
        "question_en": "มวลขนาด $3m$ and  $m$ ถูกแขวนเรียงต่อกันในแนวดิ่งด้วยสปริงที่มีspring constant $4k$ and  $k$ ตามลำดับ (เพดานยึดสปริง $4k$ ซึ่งห้อยมวล $3m$ and มวล $3m$ ห้อยสปริง $k$ ซึ่งห้อยมวล $m$) Find frequencyนอร์มัลโหมด ($\\omega$) ของการสั่นของระบบนี้",
        "formulas": [
          "\\det(K - \\omega^2 M) = 0"
        ],
        "solution_th": "**เฉลยอย่างละเอียดข้อ 8.7:**\nระบบแนวดิ่ง: เพดานยึดสปริง $4k$ ห้อยมวล $3m$ และมวล $3m$ ห้อยสปริง $k$ ห้อยมวล $m$:\nสมการการเคลื่อนที่:\n$$3m \\ddot{x}_1 = -4k x_1 + k(x_2 - x_1) = -5k x_1 + k x_2$$\n$$m \\ddot{x}_2 = -k(x_2 - x_1) = k x_1 - k x_2$$\n\nตั้งสมการเมทริกซ์นอร์มัลโหมด $(\\mathbf{K} - \\omega^2 \\mathbf{M}) \\mathbf{X} = \\mathbf{0}$:\n$$\\det \\begin{pmatrix} 5k - 3m\\omega^2 & -k \\\\ -k & k - m\\omega^2 \\end{pmatrix} = 0$$\n$(5k - 3m\\omega^2)(k - m\\omega^2) - k^2 = 0 \\implies 3(m\\omega^2)^2 - 8k(m\\omega^2) + 4k^2 = 0$\nแยกตัวประกอบได้: $$(3 m\\omega^2 - 2k)(m\\omega^2 - 2k) = 0$$\nดังนั้น ความถี่นอร์มัลโหมดทั้งสองคือ:\n- **โหมดแรก (Slow mode):** $$\\omega_1 = \\sqrt{\\frac{2k}{3m}}$$\n- **โหมดสอง (Fast mode):** $$\\omega_2 = \\sqrt{\\frac{2k}{m}}$$",
        "solution_en": "**Detailed Solution for Problem 8.7:**\nVertical system with ceiling spring $4k$, mass $3m$, lower spring $k$, lower mass $m$:\nSecular equation: $(5k - 3m\\omega^2)(k - m\\omega^2) - k^2 = 0 \\implies (3 m\\omega^2 - 2k)(m\\omega^2 - 2k) = 0$.\nNormal mode frequencies:\n- Mode 1 (Slow): $\\omega_1 = \\sqrt{\\frac{2k}{3m}}$\n- Mode 2 (Fast): $\\omega_2 = \\sqrt{\\frac{2k}{m}}$.",
        "hints": [
          "สร้างเมทริกซ์มวล $M$ และเมทริกซ์ความตึง $K$ สำหรับระบบ 3 มวล 4 สปริง",
          "หาค่าเจาะจง (Eigenvalues) $\\omega^2$ จากดีเทอร์มิแนนต์ $\\det(K - \\omega^2 M) = 0$"
        ]
      }
    ]
  }
];
