package at.fh.ima.swengs.bartendrV2.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource()
public interface DrinkRepository extends PagingAndSortingRepository<Drink,Long> {

    //This would be exposed under the URL: http://localhost:8080/actors/search/findByFirstNameAndLastName
    public List<Drink> findByDrinkNameAndBar(@Param("drinkName") String drinkName, @Param("bar")String bar);

}
