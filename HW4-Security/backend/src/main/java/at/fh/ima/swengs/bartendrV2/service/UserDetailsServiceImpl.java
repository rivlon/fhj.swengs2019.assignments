package at.fh.ima.swengs.bartendrV2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.List;

@Service("userDetailsService")   // It has to be annotated with @Service.
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Autowired
    private at.fh.ima.swengs.bartendrV2.model.UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        try {
            at.fh.ima.swengs.bartendrV2.model.User user = userRepository.findByUsername(username);
            if (user.getUsername().equals(username)) {
                List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                        .commaSeparatedStringToAuthorityList(user.isAdmin() ? "ROLE_ADMIN" : "ROLE_USER");
                return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), grantedAuthorities);

            }
        } catch (Exception e) {
        }
        throw new UsernameNotFoundException("Username: " + username + " not found");
    }

    @PostConstruct()
    @Transactional
    public void initUsers() {
        if (userRepository.count() == 0) {
            at.fh.ima.swengs.bartendrV2.model.User admin = new at.fh.ima.swengs.bartendrV2.model.User();
            admin.setUsername("admin");
            admin.setPassword(encoder.encode("12345"));
            admin.setAdmin(true);
            userRepository.save(admin);

            at.fh.ima.swengs.bartendrV2.model.User tester = new at.fh.ima.swengs.bartendrV2.model.User();
            tester.setUsername("tester");
            tester.setPassword(encoder.encode("12345"));
            userRepository.save(tester);
        }
    }
}