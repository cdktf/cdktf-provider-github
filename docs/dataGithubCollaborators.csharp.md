# `data_github_collaborators`

Refer to the Terraform Registory for docs: [`data_github_collaborators`](https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators).

# `dataGithubCollaborators` Submodule <a name="`dataGithubCollaborators` Submodule" id="@cdktf/provider-github.dataGithubCollaborators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubCollaborators <a name="DataGithubCollaborators" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators github_collaborators}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubCollaborators(Construct Scope, string Id, DataGithubCollaboratorsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig">DataGithubCollaboratorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig">DataGithubCollaboratorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetAffiliation">ResetAffiliation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAffiliation` <a name="ResetAffiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetAffiliation"></a>

```csharp
private void ResetAffiliation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubCollaborators.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubCollaborators.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubCollaborators.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.collaborator">Collaborator</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList">DataGithubCollaboratorsCollaboratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliationInput">AffiliationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliation">Affiliation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Collaborator`<sup>Required</sup> <a name="Collaborator" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.collaborator"></a>

```csharp
public DataGithubCollaboratorsCollaboratorList Collaborator { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList">DataGithubCollaboratorsCollaboratorList</a>

---

##### `AffiliationInput`<sup>Optional</sup> <a name="AffiliationInput" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliationInput"></a>

```csharp
public string AffiliationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Affiliation`<sup>Required</sup> <a name="Affiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliation"></a>

```csharp
public string Affiliation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubCollaboratorsCollaborator <a name="DataGithubCollaboratorsCollaborator" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubCollaboratorsCollaborator {

};
```


### DataGithubCollaboratorsConfig <a name="DataGithubCollaboratorsConfig" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubCollaboratorsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Owner,
    string Repository,
    string Affiliation = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.affiliation">Affiliation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators#id DataGithubCollaborators#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}.

---

##### `Affiliation`<sup>Optional</sup> <a name="Affiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.affiliation"></a>

```csharp
public string Affiliation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/collaborators#id DataGithubCollaborators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGithubCollaboratorsCollaboratorList <a name="DataGithubCollaboratorsCollaboratorList" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubCollaboratorsCollaboratorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.get"></a>

```csharp
private DataGithubCollaboratorsCollaboratorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubCollaboratorsCollaboratorOutputReference <a name="DataGithubCollaboratorsCollaboratorOutputReference" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubCollaboratorsCollaboratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.eventsUrl">EventsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followersUrl">FollowersUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followingUrl">FollowingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.gistsUrl">GistsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.htmlUrl">HtmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.organizationsUrl">OrganizationsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.receivedEventsUrl">ReceivedEventsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.reposUrl">ReposUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.siteAdmin">SiteAdmin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.starredUrl">StarredUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.subscriptionsUrl">SubscriptionsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator">DataGithubCollaboratorsCollaborator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventsUrl`<sup>Required</sup> <a name="EventsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.eventsUrl"></a>

```csharp
public string EventsUrl { get; }
```

- *Type:* string

---

##### `FollowersUrl`<sup>Required</sup> <a name="FollowersUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followersUrl"></a>

```csharp
public string FollowersUrl { get; }
```

- *Type:* string

---

##### `FollowingUrl`<sup>Required</sup> <a name="FollowingUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followingUrl"></a>

```csharp
public string FollowingUrl { get; }
```

- *Type:* string

---

##### `GistsUrl`<sup>Required</sup> <a name="GistsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.gistsUrl"></a>

```csharp
public string GistsUrl { get; }
```

- *Type:* string

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.htmlUrl"></a>

```csharp
public string HtmlUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `OrganizationsUrl`<sup>Required</sup> <a name="OrganizationsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.organizationsUrl"></a>

```csharp
public string OrganizationsUrl { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `ReceivedEventsUrl`<sup>Required</sup> <a name="ReceivedEventsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.receivedEventsUrl"></a>

```csharp
public string ReceivedEventsUrl { get; }
```

- *Type:* string

---

##### `ReposUrl`<sup>Required</sup> <a name="ReposUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.reposUrl"></a>

```csharp
public string ReposUrl { get; }
```

- *Type:* string

---

##### `SiteAdmin`<sup>Required</sup> <a name="SiteAdmin" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.siteAdmin"></a>

```csharp
public IResolvable SiteAdmin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StarredUrl`<sup>Required</sup> <a name="StarredUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.starredUrl"></a>

```csharp
public string StarredUrl { get; }
```

- *Type:* string

---

##### `SubscriptionsUrl`<sup>Required</sup> <a name="SubscriptionsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.subscriptionsUrl"></a>

```csharp
public string SubscriptionsUrl { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.internalValue"></a>

```csharp
public DataGithubCollaboratorsCollaborator InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator">DataGithubCollaboratorsCollaborator</a>

---



