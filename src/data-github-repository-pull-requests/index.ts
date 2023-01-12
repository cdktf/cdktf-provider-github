// https://www.terraform.io/docs/providers/github/d/repository_pull_requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryPullRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests#base_ref DataGithubRepositoryPullRequests#base_ref}
  */
  readonly baseRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests#base_repository DataGithubRepositoryPullRequests#base_repository}
  */
  readonly baseRepository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests#head_ref DataGithubRepositoryPullRequests#head_ref}
  */
  readonly headRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests#id DataGithubRepositoryPullRequests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests#owner DataGithubRepositoryPullRequests#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests#sort_by DataGithubRepositoryPullRequests#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests#sort_direction DataGithubRepositoryPullRequests#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests#state DataGithubRepositoryPullRequests#state}
  */
  readonly state?: string;
}
export interface DataGithubRepositoryPullRequestsResults {
}

export function dataGithubRepositoryPullRequestsResultsToTerraform(struct?: DataGithubRepositoryPullRequestsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGithubRepositoryPullRequestsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGithubRepositoryPullRequestsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGithubRepositoryPullRequestsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_ref - computed: true, optional: false, required: false
  public get baseRef() {
    return this.getStringAttribute('base_ref');
  }

  // base_sha - computed: true, optional: false, required: false
  public get baseSha() {
    return this.getStringAttribute('base_sha');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // draft - computed: true, optional: false, required: false
  public get draft() {
    return this.getBooleanAttribute('draft');
  }

  // head_owner - computed: true, optional: false, required: false
  public get headOwner() {
    return this.getStringAttribute('head_owner');
  }

  // head_ref - computed: true, optional: false, required: false
  public get headRef() {
    return this.getStringAttribute('head_ref');
  }

  // head_repository - computed: true, optional: false, required: false
  public get headRepository() {
    return this.getStringAttribute('head_repository');
  }

  // head_sha - computed: true, optional: false, required: false
  public get headSha() {
    return this.getStringAttribute('head_sha');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // maintainer_can_modify - computed: true, optional: false, required: false
  public get maintainerCanModify() {
    return this.getBooleanAttribute('maintainer_can_modify');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // opened_at - computed: true, optional: false, required: false
  public get openedAt() {
    return this.getNumberAttribute('opened_at');
  }

  // opened_by - computed: true, optional: false, required: false
  public get openedBy() {
    return this.getStringAttribute('opened_by');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
}

export class DataGithubRepositoryPullRequestsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataGithubRepositoryPullRequestsResultsOutputReference {
    return new DataGithubRepositoryPullRequestsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests github_repository_pull_requests}
*/
export class DataGithubRepositoryPullRequests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_pull_requests";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests github_repository_pull_requests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoryPullRequestsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoryPullRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_pull_requests',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.14.0',
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
    this._baseRef = config.baseRef;
    this._baseRepository = config.baseRepository;
    this._headRef = config.headRef;
    this._id = config.id;
    this._owner = config.owner;
    this._sortBy = config.sortBy;
    this._sortDirection = config.sortDirection;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_ref - computed: false, optional: true, required: false
  private _baseRef?: string; 
  public get baseRef() {
    return this.getStringAttribute('base_ref');
  }
  public set baseRef(value: string) {
    this._baseRef = value;
  }
  public resetBaseRef() {
    this._baseRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRefInput() {
    return this._baseRef;
  }

  // base_repository - computed: false, optional: false, required: true
  private _baseRepository?: string; 
  public get baseRepository() {
    return this.getStringAttribute('base_repository');
  }
  public set baseRepository(value: string) {
    this._baseRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRepositoryInput() {
    return this._baseRepository;
  }

  // head_ref - computed: false, optional: true, required: false
  private _headRef?: string; 
  public get headRef() {
    return this.getStringAttribute('head_ref');
  }
  public set headRef(value: string) {
    this._headRef = value;
  }
  public resetHeadRef() {
    this._headRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headRefInput() {
    return this._headRef;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataGithubRepositoryPullRequestsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_ref: cdktf.stringToTerraform(this._baseRef),
      base_repository: cdktf.stringToTerraform(this._baseRepository),
      head_ref: cdktf.stringToTerraform(this._headRef),
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_direction: cdktf.stringToTerraform(this._sortDirection),
      state: cdktf.stringToTerraform(this._state),
    };
  }
}
