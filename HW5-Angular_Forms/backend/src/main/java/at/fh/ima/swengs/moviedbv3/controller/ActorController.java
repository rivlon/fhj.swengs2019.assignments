package at.fh.ima.swengs.moviedbv3.controller;

import at.fh.ima.swengs.moviedbv3.dto.ActorDTO;
import at.fh.ima.swengs.moviedbv3.facade.ActorFacade;
import at.fh.ima.swengs.moviedbv3.model.Actor;
import at.fh.ima.swengs.moviedbv3.model.ActorRepository;
import at.fh.ima.swengs.moviedbv3.service.ActorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
public class ActorController {

    @Autowired
    private ActorFacade actorFacade;

    @Autowired
    private ActorRepository actorRepository;

    @GetMapping("/dto/actors/{id}")
    ActorDTO getById(@PathVariable Long id) {
        return actorFacade.getById(id);
    }

    @GetMapping("/dto/actors/firstName/{firstName}")
    Actor getByFirstName(@PathVariable String firstName) {
        try {
            return actorRepository.findByFirstName(firstName);
        } catch (java.util.NoSuchElementException e) {
            System.out.println("No Actor with this firstname!");
            return null;
        }
    }

    @PostMapping("/dto/actors")
    ActorDTO create(@RequestBody @Valid ActorDTO dto) {
        return actorFacade.create(dto);
    }

    @PutMapping("/dto/actors/{id}")
    ActorDTO update(@RequestBody @Valid ActorDTO dto, @PathVariable Long id) {
        return actorFacade.update(id, dto);
    }

}
