package com.example.performance;

public class PredictionRequest {

    private double studyHours;
    private double attendance;
    private double previousScore;

    public double getStudyHours() { return studyHours; }
    public void setStudyHours(double studyHours) { this.studyHours = studyHours; }

    public double getAttendance() { return attendance; }
    public void setAttendance(double attendance) { this.attendance = attendance; }

    public double getPreviousScore() { return previousScore; }
    public void setPreviousScore(double previousScore) { this.previousScore = previousScore; }
}
