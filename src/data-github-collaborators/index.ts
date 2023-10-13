// https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/collaborators
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubCollaboratorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}
  */
  readonly affiliation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/collaborators#id DataGithubCollaborators#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}
  */
  readonly repository: string;
}
export interface DataGithubCollaboratorsCollaborator {
}

export function dataGithubCollaboratorsCollaboratorToTerraform(struct?: DataGithubCollaboratorsCollaborator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGithubCollaboratorsCollaboratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGithubCollaboratorsCollaborator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGithubCollaboratorsCollaborator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events_url - computed: true, optional: false, required: false
  public get eventsUrl() {
    return this.getStringAttribute('events_url');
  }

  // followers_url - computed: true, optional: false, required: false
  public get followersUrl() {
    return this.getStringAttribute('followers_url');
  }

  // following_url - computed: true, optional: false, required: false
  public get followingUrl() {
    return this.getStringAttribute('following_url');
  }

  // gists_url - computed: true, optional: false, required: false
  public get gistsUrl() {
    return this.getStringAttribute('gists_url');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // organizations_url - computed: true, optional: false, required: false
  public get organizationsUrl() {
    return this.getStringAttribute('organizations_url');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // received_events_url - computed: true, optional: false, required: false
  public get receivedEventsUrl() {
    return this.getStringAttribute('received_events_url');
  }

  // repos_url - computed: true, optional: false, required: false
  public get reposUrl() {
    return this.getStringAttribute('repos_url');
  }

  // site_admin - computed: true, optional: false, required: false
  public get siteAdmin() {
    return this.getBooleanAttribute('site_admin');
  }

  // starred_url - computed: true, optional: false, required: false
  public get starredUrl() {
    return this.getStringAttribute('starred_url');
  }

  // subscriptions_url - computed: true, optional: false, required: false
  public get subscriptionsUrl() {
    return this.getStringAttribute('subscriptions_url');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataGithubCollaboratorsCollaboratorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGithubCollaboratorsCollaboratorOutputReference {
    return new DataGithubCollaboratorsCollaboratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/collaborators github_collaborators}
*/
export class DataGithubCollaborators extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_collaborators";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/collaborators github_collaborators} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubCollaboratorsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubCollaboratorsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_collaborators',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.40.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affiliation = config.affiliation;
    this._id = config.id;
    this._owner = config.owner;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affiliation - computed: false, optional: true, required: false
  private _affiliation?: string; 
  public get affiliation() {
    return this.getStringAttribute('affiliation');
  }
  public set affiliation(value: string) {
    this._affiliation = value;
  }
  public resetAffiliation() {
    this._affiliation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affiliationInput() {
    return this._affiliation;
  }

  // collaborator - computed: true, optional: false, required: false
  private _collaborator = new DataGithubCollaboratorsCollaboratorList(this, "collaborator", false);
  public get collaborator() {
    return this._collaborator;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affiliation: cdktf.stringToTerraform(this._affiliation),
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
