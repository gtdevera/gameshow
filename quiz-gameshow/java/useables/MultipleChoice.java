import java.util.List;
import java.util.ArrayList;

public class MultipleChoice {

    private int correctAnswer;
    private int numberChoices;
    private List<String> inputtedAnswers = new ArrayList<>();

    public String getAnswer(int chosenAnswer){
        return this.inputtedAnswers.get(chosenAnswer);
    }

    public void setAnswers(List<String> userAnswers){
        this.inputtedAnswers = userAnswers;
    }

    public int getNumChoices(){
        return this.numberChoices;
    }

    public void setNumChoices(int userChoices){
        this.numberChoices = userChoices;
    }

    public int getCorrectAnswer(){
        return this.correctAnswer;
    }

    public void setCorrectAnswer(int userCorrectNum){
        this.correctAnswer = userCorrectNum;
    }
}
