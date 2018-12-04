package at.fh.ima.swengs.bartendrV1.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Drink {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    private String drinkName;
    private String bar;
    private double price;

    @Version
    @JsonIgnore
    private long version;

    public Drink() {
    }

    public Drink(String drinkName, String bar, double price, long version) {
        this.drinkName = drinkName;
        this.bar = bar;
        this.price = price;
        this.version = version;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDrinkName() {
        return drinkName;
    }

    public void setDrinkName(String drinkName) {
        this.drinkName = drinkName;
    }

    public String getBar() {
        return bar;
    }

    public void setBar(String bar) {
        this.bar = bar;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
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
        if (o == null || getClass() != o.getClass()) return false;
        Drink drink = (Drink) o;
        return id == drink.id &&
                Double.compare(drink.price, price) == 0 &&
                version == drink.version &&
                Objects.equals(drinkName, drink.drinkName) &&
                Objects.equals(bar, drink.bar);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, drinkName, bar, price, version);
    }

    @Override
    public String toString() {
        return "Drink{" +
                "id=" + id +
                ", drinkName='" + drinkName + '\'' +
                ", bar='" + bar + '\'' +
                ", price=" + price +
                ", version=" + version +
                '}';
    }
}
