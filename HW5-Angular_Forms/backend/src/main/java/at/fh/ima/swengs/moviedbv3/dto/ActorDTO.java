package at.fh.ima.swengs.moviedbv3.dto;


import at.fh.ima.swengs.moviedbv3.model.Gender;

import java.util.Date;
import java.util.Set;

public class ActorDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private boolean alive = true;
    private Integer rating;
    private Gender gender;
    private Date dayOfBirth;
    private Set<Long> movies;
    private String color;
    private double income;
    private String clothingSize;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public boolean isAlive() {
        return alive;
    }

    public void setAlive(boolean alive) {
        this.alive = alive;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Date getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(Date dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public Set<Long> getMovies() {
        return movies;
    }

    public void setMovies(Set<Long> movies) {
        this.movies = movies;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getIncome() {
        return income;
    }

    public void setIncome(double income) {
        this.income = income;
    }

    public String getClothingSize() {
        return clothingSize;
    }

    public void setClothingSize(String clothingSize) {
        this.clothingSize = clothingSize;
    }

    public ActorDTO() {
    }

    public ActorDTO(Long id, String firstName, String lastName, boolean alive, Integer rating, Gender gender, Date dayOfBirth, Set<Long> movies, String color, double income, String clothingSize) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.alive = alive;
        this.rating = rating;
        this.gender = gender;
        this.dayOfBirth = dayOfBirth;
        this.movies = movies;
        this.color = color;
        this.income = income;
        this.clothingSize = clothingSize;
    }
}
