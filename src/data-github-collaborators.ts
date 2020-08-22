// https://www.terraform.io/docs/providers/github/r/data_github_collaborators.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGithubCollaboratorsConfig extends TerraformMetaArguments {
  readonly affiliation?: string;
  readonly owner: string;
  readonly repository: string;
}
export class DataGithubCollaboratorsCollaborator extends ComplexComputedList {

  // events_url - computed: true, optional: false, required: true
  public get eventsUrl() {
    return this.getStringAttribute('events_url');
  }

  // followers_url - computed: true, optional: false, required: true
  public get followersUrl() {
    return this.getStringAttribute('followers_url');
  }

  // following_url - computed: true, optional: false, required: true
  public get followingUrl() {
    return this.getStringAttribute('following_url');
  }

  // gists_url - computed: true, optional: false, required: true
  public get gistsUrl() {
    return this.getStringAttribute('gists_url');
  }

  // html_url - computed: true, optional: false, required: true
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getNumberAttribute('id');
  }

  // login - computed: true, optional: false, required: true
  public get login() {
    return this.getStringAttribute('login');
  }

  // organizations_url - computed: true, optional: false, required: true
  public get organizationsUrl() {
    return this.getStringAttribute('organizations_url');
  }

  // permission - computed: true, optional: false, required: true
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // received_events_url - computed: true, optional: false, required: true
  public get receivedEventsUrl() {
    return this.getStringAttribute('received_events_url');
  }

  // repos_url - computed: true, optional: false, required: true
  public get reposUrl() {
    return this.getStringAttribute('repos_url');
  }

  // site_admin - computed: true, optional: false, required: true
  public get siteAdmin() {
    return this.getBooleanAttribute('site_admin');
  }

  // starred_url - computed: true, optional: false, required: true
  public get starredUrl() {
    return this.getStringAttribute('starred_url');
  }

  // subscriptions_url - computed: true, optional: false, required: true
  public get subscriptionsUrl() {
    return this.getStringAttribute('subscriptions_url');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}

// Resource

export class DataGithubCollaborators extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGithubCollaboratorsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_collaborators',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._affiliation = config.affiliation;
    this._owner = config.owner;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affiliation - computed: false, optional: true, required: false
  private _affiliation?: string;
  public get affiliation() {
    return this._affiliation;
  }
  public set affiliation(value: string | undefined) {
    this._affiliation = value;
  }

  // collaborator - computed: true, optional: false, required: true
  public collaborator(index: string) {
    return new DataGithubCollaboratorsCollaborator(this, 'collaborator', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner - computed: false, optional: false, required: true
  private _owner: string;
  public get owner() {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affiliation: this._affiliation,
      owner: this._owner,
      repository: this._repository,
    };
  }
}
