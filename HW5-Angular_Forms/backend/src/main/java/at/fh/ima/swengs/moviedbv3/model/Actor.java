package at.fh.ima.swengs.moviedbv3.model;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Actor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    private String firstName;
    private String lastName;

    private Integer rating;
    private String color;
    private double income;
    private String clothingSize;

    private boolean alive = true;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd") // We changed this from dd:MM:YY
                                                                         // because of the datePicker in frontend
    private Date dayOfBirth;

    @ManyToMany
    @JoinTable(name = "movies_actors",
            joinColumns = @JoinColumn(name = "actor_id"),
            inverseJoinColumns = @JoinColumn(name = "movie_id")
    )
    private Set<Movie> movies;


    @Version
    @JsonIgnore
    private long version;

    public Actor() {
    }

    public Actor(String firstName, String lastName, Integer rating, String color, double income, String clothingSize, boolean alive, Gender gender, Date dayOfBirth, Set<Movie> movies, long version) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rating = rating;
        this.color = color;
        this.income = income;
        this.clothingSize = clothingSize;
        this.alive = alive;
        this.gender = gender;
        this.dayOfBirth = dayOfBirth;
        this.movies = movies;
        this.version = version;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
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

    public boolean isAlive() {
        return alive;
    }

    public void setAlive(boolean alive) {
        this.alive = alive;
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

    public Set<Movie> getMovies() {
        return movies;
    }

    public void setMovies(Set<Movie> movies) {
        this.movies = movies;
    }

    public long getVersion() {
        return version;
    }

    public void setVersion(long version) {
        this.version = version;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Actor)) return false;
        Actor actor = (Actor) o;
        return getId() == actor.getId() &&
                Double.compare(actor.getIncome(), getIncome()) == 0 &&
                isAlive() == actor.isAlive() &&
                getVersion() == actor.getVersion() &&
                Objects.equals(getFirstName(), actor.getFirstName()) &&
                Objects.equals(getLastName(), actor.getLastName()) &&
                Objects.equals(getRating(), actor.getRating()) &&
                Objects.equals(getColor(), actor.getColor()) &&
                Objects.equals(getClothingSize(), actor.getClothingSize()) &&
                getGender() == actor.getGender() &&
                Objects.equals(getDayOfBirth(), actor.getDayOfBirth()) &&
                Objects.equals(getMovies(), actor.getMovies());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getFirstName(), getLastName(), getRating(), getColor(), getIncome(), getClothingSize(), isAlive(), getGender(), getDayOfBirth(), getMovies(), getVersion());
    }

    @Override
    public String toString() {
        return "Actor{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", rating=" + rating +
                ", color='" + color + '\'' +
                ", income=" + income +
                ", clothingSize='" + clothingSize + '\'' +
                ", alive=" + alive +
                ", gender=" + gender +
                ", dayOfBirth=" + dayOfBirth +
                ", movies=" + movies +
                ", version=" + version +
                '}';
    }
}
