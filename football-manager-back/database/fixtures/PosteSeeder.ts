import { AbstractSeeder } from "./AbstractSeeder";

class PosteSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "poste", truncate: true });
  }

  run() {
    const postes = [
      { id: 1, label: "Gardien de but", abbr: "G" },
      { id: 2, label: "Défenseur central", abbr: "DC" },
      { id: 3, label: "Défenseur central droit", abbr: "DCD" },
      { id: 4, label: "Défenseur central gauche", abbr: "DCG" },
      { id: 5, label: "Défenseur droit", abbr: "DD" },
      { id: 6, label: "Défenseur gauche", abbr: "DG" },
      { id: 7, label: "Piston droit", abbr: "DLD" },
      { id: 8, label: "Piston gauche", abbr: "DLG" },
      { id: 9, label: "Milieu défensif", abbr: "MDC" },
      { id: 10, label: "Milieu défensif droit", abbr: "MDCD" },
      { id: 11, label: "Milieu défensif gauche", abbr: "MDCG" },
      { id: 12, label: "Milieu central", abbr: "MC" },
      { id: 13, label: "Milieu droit", abbr: "MD" },
      { id: 14, label: "Milieu gauche", abbr: "MG" },
      { id: 15, label: "Milieu offensif central", abbr: "MOC" },
      { id: 16, label: "Milieu offensif droit", abbr: "MOD" },
      { id: 17, label: "Milieu offensif gauche", abbr: "MOG" },
      { id: 18, label: "Ailier droit", abbr: "AD" },
      { id: 19, label: "Ailier gauche", abbr: "AG" },
      { id: 20, label: "Attaquant de soutien", abbr: "AT" },
      { id: 21, label: "Buteur", abbr: "BU" },
    ];

    for (const poste of postes) {
      this.insert(poste);
    }
  }
}

export default PosteSeeder;
