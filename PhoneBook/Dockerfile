# Pull base image
FROM tomcat:8-jre8
ENV _JAVA_OPTIONS "-Xms100m -Xmx200m -Djava.awt.headless=true"

# Maintainer
MAINTAINER "neider.tapia@gmail.com"

# Copy to images tomcat path
ADD out/artifacts/PhoneBook_war_exploded/*.war /usr/local/tomcat/webapps/


# docker build -t phonebook-challenge .
