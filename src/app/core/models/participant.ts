class ParticipantModel {
    constructor(
    public nickname: string,
    public user_id: number,
    public _id?: string
  ) { }
}

class FormParticipantModel {
  constructor(
    public nickname: string,
     public user_id: string
  ) { }
}




export { ParticipantModel, FormParticipantModel };