package org.burgeon.aero.as.adapter.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

/**
 * @author Sam Lu
 * @date 2021/11/22
 */
@Slf4j
@Component
public class DefaultAuthenticationProvider implements AuthenticationProvider {

    @Override
    public Authentication authenticate(Authentication auth) throws AuthenticationException {
        String username = auth.getName();
        String password = auth.getCredentials().toString();

        log.info("User login, username: {}, password: {}", username, password);
        if ("user".equals(username) && "pass".equals(password)) {
            log.info("User login success, username: {}", username);
            return new UsernamePasswordAuthenticationToken(username, password,
                    AuthorityUtils.createAuthorityList("ROLE_USER"));
        } else {
            log.info("User login fail, username: {}", username);
            throw new BadCredentialsException("External system authentication failed");
        }
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return aClass.equals(UsernamePasswordAuthenticationToken.class);
    }

}
