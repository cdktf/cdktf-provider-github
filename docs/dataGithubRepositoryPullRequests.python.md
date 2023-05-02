# `data_github_repository_pull_requests`

Refer to the Terraform Registory for docs: [`data_github_repository_pull_requests`](https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests).

# `dataGithubRepositoryPullRequests` Submodule <a name="`dataGithubRepositoryPullRequests` Submodule" id="@cdktf/provider-github.dataGithubRepositoryPullRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryPullRequests <a name="DataGithubRepositoryPullRequests" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests github_repository_pull_requests}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_pull_requests

dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_repository: str,
  base_ref: str = None,
  head_ref: str = None,
  id: str = None,
  owner: str = None,
  sort_by: str = None,
  sort_direction: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.baseRepository">base_repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#base_repository DataGithubRepositoryPullRequests#base_repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.baseRef">base_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#base_ref DataGithubRepositoryPullRequests#base_ref}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.headRef">head_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#head_ref DataGithubRepositoryPullRequests#head_ref}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#id DataGithubRepositoryPullRequests#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#owner DataGithubRepositoryPullRequests#owner}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#sort_by DataGithubRepositoryPullRequests#sort_by}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#sort_direction DataGithubRepositoryPullRequests#sort_direction}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#state DataGithubRepositoryPullRequests#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_repository`<sup>Required</sup> <a name="base_repository" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.baseRepository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#base_repository DataGithubRepositoryPullRequests#base_repository}.

---

##### `base_ref`<sup>Optional</sup> <a name="base_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.baseRef"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#base_ref DataGithubRepositoryPullRequests#base_ref}.

---

##### `head_ref`<sup>Optional</sup> <a name="head_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.headRef"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#head_ref DataGithubRepositoryPullRequests#head_ref}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#id DataGithubRepositoryPullRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#owner DataGithubRepositoryPullRequests#owner}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#sort_by DataGithubRepositoryPullRequests#sort_by}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.sortDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#sort_direction DataGithubRepositoryPullRequests#sort_direction}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#state DataGithubRepositoryPullRequests#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetBaseRef">reset_base_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetHeadRef">reset_head_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetSortDirection">reset_sort_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_base_ref` <a name="reset_base_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetBaseRef"></a>

```python
def reset_base_ref() -> None
```

##### `reset_head_ref` <a name="reset_head_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetHeadRef"></a>

```python
def reset_head_ref() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_direction` <a name="reset_sort_direction" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetSortDirection"></a>

```python
def reset_sort_direction() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_pull_requests

dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_pull_requests

dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_pull_requests

dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.results">results</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList">DataGithubRepositoryPullRequestsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRefInput">base_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRepositoryInput">base_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.headRefInput">head_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortDirectionInput">sort_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRef">base_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRepository">base_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.headRef">head_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortDirection">sort_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.results"></a>

```python
results: DataGithubRepositoryPullRequestsResultsList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList">DataGithubRepositoryPullRequestsResultsList</a>

---

##### `base_ref_input`<sup>Optional</sup> <a name="base_ref_input" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRefInput"></a>

```python
base_ref_input: str
```

- *Type:* str

---

##### `base_repository_input`<sup>Optional</sup> <a name="base_repository_input" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRepositoryInput"></a>

```python
base_repository_input: str
```

- *Type:* str

---

##### `head_ref_input`<sup>Optional</sup> <a name="head_ref_input" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.headRefInput"></a>

```python
head_ref_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_direction_input`<sup>Optional</sup> <a name="sort_direction_input" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortDirectionInput"></a>

```python
sort_direction_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `base_ref`<sup>Required</sup> <a name="base_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRef"></a>

```python
base_ref: str
```

- *Type:* str

---

##### `base_repository`<sup>Required</sup> <a name="base_repository" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRepository"></a>

```python
base_repository: str
```

- *Type:* str

---

##### `head_ref`<sup>Required</sup> <a name="head_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.headRef"></a>

```python
head_ref: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_direction`<sup>Required</sup> <a name="sort_direction" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryPullRequestsConfig <a name="DataGithubRepositoryPullRequestsConfig" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_pull_requests

dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_repository: str,
  base_ref: str = None,
  head_ref: str = None,
  id: str = None,
  owner: str = None,
  sort_by: str = None,
  sort_direction: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.baseRepository">base_repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#base_repository DataGithubRepositoryPullRequests#base_repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.baseRef">base_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#base_ref DataGithubRepositoryPullRequests#base_ref}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.headRef">head_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#head_ref DataGithubRepositoryPullRequests#head_ref}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#id DataGithubRepositoryPullRequests#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#owner DataGithubRepositoryPullRequests#owner}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#sort_by DataGithubRepositoryPullRequests#sort_by}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#sort_direction DataGithubRepositoryPullRequests#sort_direction}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#state DataGithubRepositoryPullRequests#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_repository`<sup>Required</sup> <a name="base_repository" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.baseRepository"></a>

```python
base_repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#base_repository DataGithubRepositoryPullRequests#base_repository}.

---

##### `base_ref`<sup>Optional</sup> <a name="base_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.baseRef"></a>

```python
base_ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#base_ref DataGithubRepositoryPullRequests#base_ref}.

---

##### `head_ref`<sup>Optional</sup> <a name="head_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.headRef"></a>

```python
head_ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#head_ref DataGithubRepositoryPullRequests#head_ref}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#id DataGithubRepositoryPullRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#owner DataGithubRepositoryPullRequests#owner}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#sort_by DataGithubRepositoryPullRequests#sort_by}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#sort_direction DataGithubRepositoryPullRequests#sort_direction}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/data-sources/repository_pull_requests#state DataGithubRepositoryPullRequests#state}.

---

### DataGithubRepositoryPullRequestsResults <a name="DataGithubRepositoryPullRequestsResults" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResults.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_pull_requests

dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryPullRequestsResultsList <a name="DataGithubRepositoryPullRequestsResultsList" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_pull_requests

dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubRepositoryPullRequestsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubRepositoryPullRequestsResultsOutputReference <a name="DataGithubRepositoryPullRequestsResultsOutputReference" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_pull_requests

dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.baseRef">base_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.baseSha">base_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.draft">draft</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headOwner">head_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headRef">head_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headRepository">head_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headSha">head_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.maintainerCanModify">maintainer_can_modify</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.openedAt">opened_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.openedBy">opened_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResults">DataGithubRepositoryPullRequestsResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_ref`<sup>Required</sup> <a name="base_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.baseRef"></a>

```python
base_ref: str
```

- *Type:* str

---

##### `base_sha`<sup>Required</sup> <a name="base_sha" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.baseSha"></a>

```python
base_sha: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.draft"></a>

```python
draft: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `head_owner`<sup>Required</sup> <a name="head_owner" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headOwner"></a>

```python
head_owner: str
```

- *Type:* str

---

##### `head_ref`<sup>Required</sup> <a name="head_ref" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headRef"></a>

```python
head_ref: str
```

- *Type:* str

---

##### `head_repository`<sup>Required</sup> <a name="head_repository" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headRepository"></a>

```python
head_repository: str
```

- *Type:* str

---

##### `head_sha`<sup>Required</sup> <a name="head_sha" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headSha"></a>

```python
head_sha: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maintainer_can_modify`<sup>Required</sup> <a name="maintainer_can_modify" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.maintainerCanModify"></a>

```python
maintainer_can_modify: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opened_at`<sup>Required</sup> <a name="opened_at" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.openedAt"></a>

```python
opened_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opened_by`<sup>Required</sup> <a name="opened_by" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.openedBy"></a>

```python
opened_by: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubRepositoryPullRequestsResults
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResults">DataGithubRepositoryPullRequestsResults</a>

---



