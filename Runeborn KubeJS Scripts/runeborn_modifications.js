ClientEvents.lang('en_us', event => {
  // === RUNIC SWORD ===
  event.renameItem("runeborn:runic_sword", "§6§lRunic Sword")

  // === RUNIC HAMMER ===
  event.renameItem("runeborn:runic_hammer", "§6§lRunic Hammer")

  // === BLANK RUNE ===
  event.renameItem("runeborn:blank_rune", "§6§lBlank §f§lRune")

  // === TIER 1 RUNES ===
  event.renameItem("runeborn:awe_rune", "§6§lAwe §f§lRune")
  event.renameItem("runeborn:ber_rune", "§6§lBer §f§lRune")
  event.renameItem("runeborn:cham_rune", "§6§lCham §f§lRune")

  // === TIER 2 RUNES ===
  event.renameItem("runeborn:dol_rune", "§6§lDol §f§lRune")
  event.renameItem("runeborn:eld_rune", "§6§lEld §f§lRune")
  event.renameItem("runeborn:fal_rune", "§6§lFal §f§lRune")

  // === TIER 3 RUNES ===
  event.renameItem("runeborn:gul_rune", "§6§lGul §f§lRune")
  event.renameItem("runeborn:hel_rune", "§6§lHel §f§lRune")
  event.renameItem("runeborn:ith_rune", "§6§lIth §f§lRune")

  // === TIER 4 RUNES ===
  event.renameItem("runeborn:jah_rune", "§6§lJah §f§lRune")
  event.renameItem("runeborn:kol_rune", "§6§lKol §f§lRune")
  event.renameItem("runeborn:lo_rune", "§6§lLo §f§lRune")

  // === TIER 5 RUNES ===
  event.renameItem("runeborn:mal_rune", "§6§lMal §f§lRune")
  event.renameItem("runeborn:nef_rune", "§6§lNef §f§lRune")
  event.renameItem("runeborn:ort_rune", "§6§lOrt §f§lRune")

  // === TIER 6 RUNES ===
  event.renameItem("runeborn:pul_rune", "§6§lPul §f§lRune")
  event.renameItem("runeborn:que_rune", "§6§lQue §f§lRune")
  event.renameItem("runeborn:ral_rune", "§6§lRal §f§lRune")

  // === TIER 7 RUNES ===
  event.renameItem("runeborn:shael_rune", "§6§lShael §f§lRune")
  event.renameItem("runeborn:tal_rune", "§6§lTal §f§lRune")
  event.renameItem("runeborn:um_rune", "§6§lUm §f§lRune")

  // === TIER 8 RUNES ===
  event.renameItem("runeborn:vex_rune", "§6§lVex §f§lRune")
  event.renameItem("runeborn:wol_rune", "§6§lWol §f§lRune")
  event.renameItem("runeborn:x_rune", "§6§lX §f§lRune")
})

ItemEvents.modifyTooltips(event => {
  // === BLANK RUNE ===
  event.add("runeborn:blank_rune", [Text.of("Tier: §7§lBlank").gray()])

  // === TIER 1 RUNES ===
  event.add("runeborn:awe_rune", [Text.of("Tier: §7§l1").gray()])
  event.add("runeborn:ber_rune", [Text.of("Tier: §7§l1").gray()])
  event.add("runeborn:cham_rune", [Text.of("Tier: §7§l1").gray()])

  // === TIER 2 RUNES ===
  event.add("runeborn:dol_rune", [Text.of("Tier: §7§l2").gray()])
  event.add("runeborn:eld_rune", [Text.of("Tier: §7§l2").gray()])
  event.add("runeborn:fal_rune", [Text.of("Tier: §7§l2").gray()])

  // === TIER 3 RUNES ===
  event.add("runeborn:gul_rune", [Text.of("Tier: §7§l3").gray()])
  event.add("runeborn:hel_rune", [Text.of("Tier: §7§l3").gray()])
  event.add("runeborn:ith_rune", [Text.of("Tier: §7§l3").gray()])

  // === TIER 4 RUNES ===
  event.add("runeborn:jah_rune", [Text.of("Tier: §7§l4").gray()])
  event.add("runeborn:kol_rune", [Text.of("Tier: §7§l4").gray()])
  event.add("runeborn:lo_rune", [Text.of("Tier: §7§l4").gray()])

  // === TIER 5 RUNES ===
  event.add("runeborn:mal_rune", [Text.of("Tier: §7§l5").gray()])
  event.add("runeborn:nef_rune", [Text.of("Tier: §7§l5").gray()])
  event.add("runeborn:ort_rune", [Text.of("Tier: §7§l5").gray()])

  // === TIER 6 RUNES ===
  event.add("runeborn:pul_rune", [Text.of("Tier: §7§l6").gray()])
  event.add("runeborn:que_rune", [Text.of("Tier: §7§l6").gray()])
  event.add("runeborn:ral_rune", [Text.of("Tier: §7§l6").gray()])

  // === TIER 7 RUNES ===
  event.add("runeborn:shael_rune", [Text.of("Tier: §7§l7").gray()])
  event.add("runeborn:tal_rune", [Text.of("Tier: §7§l7").gray()])
  event.add("runeborn:um_rune", [Text.of("Tier: §7§l7").gray()])

  // === TIER 8 RUNES ===
  event.add("runeborn:vex_rune", [Text.of("Tier: §7§l8").gray()])
  event.add("runeborn:wol_rune", [Text.of("Tier: §7§l8").gray()])
  event.add("runeborn:x_rune", [Text.of("Tier: §7§l8").gray()])
})
