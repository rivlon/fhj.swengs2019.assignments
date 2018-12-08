package at.fh.ima.swengs.bartendrV2.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource()
public interface UserRepository extends PagingAndSortingRepository<at.fh.ima.swengs.bartendrV2.model.User,Long> {

    //This would be exposed under the URL: http://localhost:8080/actors/search/findByFirstNameAndLastName
    public User findByUsername(@Param("username") String username);

    }
