export class XP {
    constructor(mental=0, physical=0, financial=0, social=0, spiritual=0) {
        this.mental = mental;
        this.physical = physical;
        this.financial = financial;
        this.social = social;
        this.spiritual = spiritual;
    }

    // Returns the total XP gained
    overall() {
        return this.mental + this.physical + this.financial + this.social + this.spiritual;
    };
}
