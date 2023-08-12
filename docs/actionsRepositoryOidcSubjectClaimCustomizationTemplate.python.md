# `github_actions_repository_oidc_subject_claim_customization_template`

Refer to the Terraform Registory for docs: [`github_actions_repository_oidc_subject_claim_customization_template`](https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template).

# `actionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule <a name="`actionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRepositoryOidcSubjectClaimCustomizationTemplate <a name="ActionsRepositoryOidcSubjectClaimCustomizationTemplate" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template github_actions_repository_oidc_subject_claim_customization_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_oidc_subject_claim_customization_template

actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: str,
  use_default: typing.Union[bool, IResolvable],
  id: str = None,
  include_claim_keys: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.useDefault">use_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.includeClaimKeys">include_claim_keys</a></code> | <code>typing.List[str]</code> | A list of OpenID Connect claims. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.repository"></a>

- *Type:* str

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#repository ActionsRepositoryOidcSubjectClaimCustomizationTemplate#repository}

---

##### `use_default`<sup>Required</sup> <a name="use_default" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.useDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#use_default ActionsRepositoryOidcSubjectClaimCustomizationTemplate#use_default}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_claim_keys`<sup>Optional</sup> <a name="include_claim_keys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.includeClaimKeys"></a>

- *Type:* typing.List[str]

A list of OpenID Connect claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#include_claim_keys ActionsRepositoryOidcSubjectClaimCustomizationTemplate#include_claim_keys}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetIncludeClaimKeys">reset_include_claim_keys</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_claim_keys` <a name="reset_include_claim_keys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetIncludeClaimKeys"></a>

```python
def reset_include_claim_keys() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_oidc_subject_claim_customization_template

actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_oidc_subject_claim_customization_template

actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_oidc_subject_claim_customization_template

actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput">include_claim_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefaultInput">use_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys">include_claim_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault">use_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_claim_keys_input`<sup>Optional</sup> <a name="include_claim_keys_input" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput"></a>

```python
include_claim_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `use_default_input`<sup>Optional</sup> <a name="use_default_input" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefaultInput"></a>

```python
use_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_claim_keys`<sup>Required</sup> <a name="include_claim_keys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys"></a>

```python
include_claim_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `use_default`<sup>Required</sup> <a name="use_default" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault"></a>

```python
use_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig <a name="ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_oidc_subject_claim_customization_template

actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: str,
  use_default: typing.Union[bool, IResolvable],
  id: str = None,
  include_claim_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.repository">repository</a></code> | <code>str</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.useDefault">use_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys">include_claim_keys</a></code> | <code>typing.List[str]</code> | A list of OpenID Connect claims. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#repository ActionsRepositoryOidcSubjectClaimCustomizationTemplate#repository}

---

##### `use_default`<sup>Required</sup> <a name="use_default" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.useDefault"></a>

```python
use_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#use_default ActionsRepositoryOidcSubjectClaimCustomizationTemplate#use_default}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_claim_keys`<sup>Optional</sup> <a name="include_claim_keys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys"></a>

```python
include_claim_keys: typing.List[str]
```

- *Type:* typing.List[str]

A list of OpenID Connect claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#include_claim_keys ActionsRepositoryOidcSubjectClaimCustomizationTemplate#include_claim_keys}

---



