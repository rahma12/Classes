
class Human{
    name="rahma";
    job="secretaire";
    skills=["hhhh"];
    
    getJob(jb){
       this.job=jb;

    };
    
    leaveJob(){

        this.job="unemployed"

    };

    learnNewSkill(x){
        this.skills.push(x)
        
        
    };

   forgetSkill(y){

    this.skills = this.skills.filter(el => el !== y);
     
      

    };
}
export default Human;
