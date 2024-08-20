package xyz.senius99.senius.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.senius99.senius.entity.Member;
import xyz.senius99.senius.repository.MemberRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class OAuth2UserService extends DefaultOAuth2UserService {
    private final MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        // Role generate
        List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList("ROLE_ADMIN");

        // nameAttributeKey
        String userNameAttributeName = userRequest.getClientRegistration()
                .getProviderDetails()
                .getUserInfoEndpoint()
                .getUserNameAttributeName();
        DefaultOAuth2User defaultOAuth2User = new DefaultOAuth2User(authorities, oAuth2User.getAttributes(), userNameAttributeName);

        // 여기에서, 멤버 객체를 만들어서 리포지토리에 저장하게 됨. 정보는 defaultOauth2User에 저장되어있고
        signUpOrLogin(defaultOAuth2User);

        return defaultOAuth2User;
    }

    @Transactional
    public void signUpOrLogin(OAuth2User oAuth2User) {
        Map<String, Object> attributes = oAuth2User.getAttributes();
        Map<String, Object> account = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> profile = (Map<String, Object>) account.get("profile");
        String name = (String) account.get("nickname");
        String id = (String) account.get("email");
        //String phone = (String) account.get("phone_number");
        String phone = "010-1234-5678";
        String profileUrl = (String) profile.get("thumbnail_image_url");
        //int birthday = Integer.parseInt(account.get("birthyear").toString());
        //int age = LocalDate.now().getYear() - birthday;
        int age = 60;
        if (!this.memberRepository.existsById(id)) {//존재하지 않으면, 새로 회원 가입
            this.memberRepository.save(new Member(name, age, phone, id, profileUrl, 0));
        }

    }
}
